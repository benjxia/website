import React, { JSX } from 'react';

import Layout from '../../components/layout/Layout';
import usePageTitle from '../../hooks/pageTitle';
import '../../theme/transition.css';
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math"
import rehypeHighlight from "rehype-highlight";

import './markdown.css'
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';

const POSTS_PAGE_TITLE = 'posts';

const content = `
# Begin!

\`fork()\` according to all known laws of aviation.

$$
\\frac{-b \\pm \\sqrt{b^2-4ac}}{2a}
$$

$$
\\begin{bmatrix}
1 & 2 \\\\
3 & 4 \\\\
\\end{bmatrix}
$$

$$
\\begin{bmatrix}
1 & 2 \\\\
3 & 4 \\\\
\\end{bmatrix}
$$

$$
\\begin{bmatrix}
1 & 2 \\\\
3 & 4 \\\\
\\end{bmatrix}
$$

$$
\\begin{bmatrix}
1 & 2 \\\\
3 & 4 \\\\
\\end{bmatrix}
$$

$$
\\begin{bmatrix}
1 & 2 \\\\
3 & 4 \\\\
\\end{bmatrix}
$$

$$
\\begin{bmatrix}
1 & 2 \\\\
3 & 4 \\\\
\\end{bmatrix}
$$
`;

function Posts(): JSX.Element {
  usePageTitle(POSTS_PAGE_TITLE);
  return (
    <Layout title="technical posts">
      <div className='text transition'>
        <ReactMarkdown
          remarkPlugins={[remarkGfm, remarkMath]}
          rehypePlugins={[rehypeHighlight, rehypeKatex]}
        >
        {content}
        </ReactMarkdown>
      </div>
    </Layout>
  );
}

export default Posts;
