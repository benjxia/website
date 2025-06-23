interface FileNode {
    id: string;
    path: string;
    isDir: boolean;
    children: FileNode[];
}

function SortNodes(list: FileNode[]): FileNode[] {
    var dirs = list.filter(x => x.isDir === true).sort((a, b) => a.id.localeCompare(b.id));
    var files = list.filter(x => x.isDir === false).sort((a, b) => a.id.localeCompare(b.id));
    return [...dirs, ...files]
}

export type { FileNode };
export { SortNodes };
