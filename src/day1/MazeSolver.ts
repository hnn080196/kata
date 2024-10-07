// return a list of  points from start => end
// tìm đường đi của mê cung khi có điểm đầu và điểm cuối
// Depth first search

const direction = [
    [-1, 0], // <=
    [1, 0], // =>
    [0, -1], // down
    [0, 1], // top
];

function walk(
    maze: string[],
    wall: string,
    current: Point,
    end: Point,
    seen: boolean[][],
    path: Point[],
): boolean {
    //1 base case
    // ko outsize
    // ko đụng tường
    // chưa duyệt qua

    // off the map // outside zone

    if (
        current.x < 0 ||
        current.x >= maze[0].length ||
        current.y < 0 ||
        current.y >= maze.length
    ) {
        return false;
    }

    // on a wall
    if (maze[current.y][current.x] === wall) {
        return false;
    }
    if (current.x === end.x && current.y === end.y) {
        path.push(end);
        return true;
    }
    if (seen[current.y][current.x]) {
        // không duyệt qua những thằng đã đi đi qua
        return false;
    }

    //pre
    seen[current.y][current.x] = true;
    path.push(current);

    //recursive
    for (let i = 0; i < direction.length; i++) {
        const [x, y] = direction[i];

        const nextPoint = {
            x: current.x + x,
            y: current.y + y,
        };
        if (walk(maze, wall, nextPoint, end, seen, path)) {
            return true;
        }
    }
    //post
    path.pop();
    return false;
}
export default function solve(
    maze: string[],
    wall: string,
    start: Point,
    end: Point,
): Point[] {
    let seen: boolean[][] = [];
    let path: Point[] = [];
    for (let i = 0; i < maze.length; i++) {
        seen.push(new Array(maze[0].length).fill(false));
    }
    walk(maze, wall, start, end, seen, path);
    return path;
}
