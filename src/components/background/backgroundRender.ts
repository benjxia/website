import { COLORS_VEC } from "../../theme/colors";

// Each tile of the grid will take up 1/20th the min(window width, window height) - and consume the entire canvas
const GRID_TILE_DIM = 0.05;

// Fullscreen quad
const QUAD_VERTICES = new Float32Array([
  -1, -1,
   1, -1,
  -1,  1,
  -1,  1,
   1, -1,
   1,  1,
]);

const VERTEX_SHADER_SOURCE =
`#version 300 es
in vec2 a_position;
out vec2 v_uv;
void main() {
    v_uv = a_position * 0.5 + 0.5;
    // Canvas (0, 0) coord is top left, OpenGLWebGL (0, 0) is bottom left
    v_uv.y = 1.f - v_uv.y;
    gl_Position = vec4(a_position, 0, 1);
}
`;

const FRAGMENT_SHADER_SOURCE =
`#version 300 es
precision highp float;

in vec2 v_uv;
out vec4 outColor;

uniform float u_time;
uniform vec2 u_mouse;
uniform vec2 u_grid_resolution;
uniform vec2 u_resolution;

// Hash function
float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}

// Gradient direction
vec2 grad(vec2 p) {
    float a = hash(p) * 6.2831853; // 2π
    return vec2(cos(a), sin(a));
}

// Fade function (quintic curve) for vec2
vec2 fade(vec2 t) {
    return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
}

// 2D Perlin Noise
float perlin(vec2 p) {
    vec2 pi = floor(p);
    vec2 pf = fract(p);

    vec2 g00 = grad(pi);
    vec2 g10 = grad(pi + vec2(1.0, 0.0));
    vec2 g01 = grad(pi + vec2(0.0, 1.0));
    vec2 g11 = grad(pi + vec2(1.0, 1.0));

    float d00 = dot(g00, pf - vec2(0.0, 0.0));
    float d10 = dot(g10, pf - vec2(1.0, 0.0));
    float d01 = dot(g01, pf - vec2(0.0, 1.0));
    float d11 = dot(g11, pf - vec2(1.0, 1.0));

    vec2 f = fade(pf);

    float x1 = mix(d00, d10, f.x);
    float x2 = mix(d01, d11, f.x);
    float value = mix(x1, x2, f.y);

    return value; // ~[-1, 1]
}

// Fractal Brownian Motion with 5 octaves
float fbm(vec2 p) {
    float value = 0.0;
    float amplitude = 0.5;
    float frequency = 1.0;

    for (int i = 0; i < 3; i++) {
        value += amplitude * perlin(p * frequency);
        frequency *= 2.0;
        amplitude *= 0.5;
    }

    return value;
}

void main() {
    vec2 uv = v_uv;

    // Slight UV displacement for organic flow
    vec2 displacedUV = uv + 0.005 * fbm(uv * 10.0 + u_time * 0.2);

    vec2 grid = u_grid_resolution;
    vec2 cell = floor(displacedUV * grid);
    vec2 cellCenter = (cell + 0.5) / grid;

    // Multi-layer fbm for richer noise with different scales and time offsets
    float noise = 0.0;
    noise += 0.5 * fbm(cellCenter * 2.0 + u_time * 0.1);
    noise += 0.25 * fbm(cellCenter * 5.0 - u_time * 0.2);
    // noise += 0.125 * fbm(cellCenter * 10.0 + u_time * 0.5);

    // Mouse interaction for brightness highlight
    vec2 mouseNorm = u_mouse / u_resolution;
    float dist = distance(mouseNorm, cellCenter);
    float brightness = exp(-dist * 10.0);

    // Base color with subtle time and position variations
    vec3 baseColor = vec3(${COLORS_VEC.PRIMARY[0]}, ${COLORS_VEC.PRIMARY[1]}, ${COLORS_VEC.PRIMARY[2]});
    vec3 colorVariation = vec3(
        0.05 * sin(u_time + cellCenter.x * 10.0),
        0.05 * cos(u_time + cellCenter.y * 10.0),
        0.05 * sin(u_time * 0.5 + cellCenter.x * 5.0)
    );

    vec3 noiseColor = (baseColor + colorVariation) * noise;
    vec3 mouseColor = vec3(${COLORS_VEC.SECONDARY[0]}, ${COLORS_VEC.SECONDARY[1]}, ${COLORS_VEC.SECONDARY[2]}) * brightness;

    vec3 color = 0.5 * mouseColor + 4.0 * noiseColor;

    // CRT scanlines without noise variation
    float scanline = 1.0 + 0.5 * sin(uv.y * u_resolution.y * 2.0);
    // float scanline = 0.9 + 0.1 * sin(uv.y * u_resolution.y * 3.0 + fbm(vec2(0.0, uv.y * 10.0)));
    color *= scanline;

    // Subtle flicker based on noise to mimic natural light variations
    float flicker = 0.03 * fbm(vec2(u_time * 10.0, 0.0));
    color *= 1.0 + flicker;

    outColor = vec4(color, 1.0);
}
`;

class GridRenderer {
    width: number;
    height: number;
    gridX: number;
    gridY: number;

    vertices: Float32Array;
    vao: WebGLVertexArrayObject;
    vbo: WebGLBuffer;

    gl: WebGL2RenderingContext;
    program: WebGLProgram;

    constructor(gl: WebGL2RenderingContext, windowWidth: number, windowHeight: number) {
        this.width = windowWidth;
        this.height = windowHeight;
        [this.gridX, this.gridY] = this.calculateGridSize();

        this.gl = gl;
        this.gl.viewport(0, 0, this.width, this.height);

        this.program = this.initProgram();

        this.vertices = QUAD_VERTICES;

        this.vao = gl.createVertexArray()!;
        this.vbo = gl.createBuffer()!;

        gl.bindVertexArray(this.vao);
        gl.bindBuffer(gl.ARRAY_BUFFER, this.vbo);
        gl.bufferData(gl.ARRAY_BUFFER, this.vertices, gl.STATIC_DRAW);

        const a_position_loc = gl.getAttribLocation(this.program, "a_position");
        gl.enableVertexAttribArray(a_position_loc);
        gl.vertexAttribPointer(a_position_loc, 2, gl.FLOAT, false, 0, 0);

        gl.bindVertexArray(null);
    }

    private initProgram(): WebGLProgram {
        const gl = this.gl;

        const vertexShader = gl.createShader(gl.VERTEX_SHADER)!;
        gl.shaderSource(vertexShader, VERTEX_SHADER_SOURCE);
        gl.compileShader(vertexShader);
        if (!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)) {
            console.error("Vertex Shader Error:", gl.getShaderInfoLog(vertexShader));
        }

        const fragShader = gl.createShader(gl.FRAGMENT_SHADER)!;
        gl.shaderSource(fragShader, FRAGMENT_SHADER_SOURCE);
        gl.compileShader(fragShader);
        if (!gl.getShaderParameter(fragShader, gl.COMPILE_STATUS)) {
            console.error("Fragment Shader Error:", gl.getShaderInfoLog(fragShader));
        }

        const program = gl.createProgram()!;
        gl.attachShader(program, vertexShader);
        gl.attachShader(program, fragShader);
        gl.linkProgram(program);
        if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
            console.error("Program Link Error:", gl.getProgramInfoLog(program));
        }

        return program;
    }

    private calculateGridSize(): Array<number> {
        if (this.width < this.height) {
            return [1.0 / GRID_TILE_DIM, Math.floor((this.height / this.width) / GRID_TILE_DIM)];
        } else {
            return [Math.floor((this.width / this.height) / GRID_TILE_DIM), 1.0 / GRID_TILE_DIM]
        }
    }

    public resize(width: number, height: number) {
        this.width = width;
        this.height = height;
        this.gl.viewport(0, 0, this.width, this.height);
        [this.gridX, this.gridY] = this.calculateGridSize();
    }

    public render(mouseX: number, mouseY: number, time: number) {
        const gl = this.gl;

        gl.useProgram(this.program);

        // Set uniforms
        const u_time_loc = gl.getUniformLocation(this.program, "u_time");
        const u_mouse_loc = gl.getUniformLocation(this.program, "u_mouse");
        const u_grid_resolution_loc = gl.getUniformLocation(this.program, "u_grid_resolution");
        const u_resolution_loc = gl.getUniformLocation(this.program, "u_resolution");

        gl.uniform1f(u_time_loc, time);
        gl.uniform2f(u_mouse_loc, mouseX, mouseY);
        gl.uniform2f(u_grid_resolution_loc, this.gridX, this.gridY);
        gl.uniform2f(u_resolution_loc, this.width, this.height);

        // Clear and draw
        gl.clearColor(0.157, 0.1725, 0.204, 1);
        gl.clear(gl.COLOR_BUFFER_BIT);

        gl.bindVertexArray(this.vao);
        gl.drawArrays(gl.TRIANGLES, 0, 6);
        gl.bindVertexArray(null);

        gl.useProgram(null);
    }
}

export { GridRenderer };
