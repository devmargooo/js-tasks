// Given an m x n 2D binary grid which represents a map of '1's (land) and '0's (water),
// return the number of islands.
// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.
// You may assume all four edges of the grid are all surrounded by water.
//
// Constraints:
//
// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 300
// grid[i][j] is '0' or '1'.


export function numIslands(grid: string[][]): number {
    if (!grid[0]) { // корнер кейс
        return 0;
    }
    const rowLength = grid[0].length;
    const columnLength = grid.length;
    let count = 0;

    for (let i = 0; i < columnLength; i++) {
        for (let j = 0; j < rowLength; j++) {
            if (grid[i][j] === '1') {
                count++;
                markIsland(grid, i, j)
            }
        }
    }
    return count;
};

function markIsland(grid:string[][], i:number, j:number ) {
    const last_in_row = grid[0].length - 1;
    const last_in_column = grid.length - 1;

    const should_mark = j >= 0 &&
        j <= last_in_row &&
        i >= 0 &&
        i <= last_in_column &&
        grid[i][j] === '1';

    if (!should_mark) {
        return;
    }

    grid[i][j] = 'marked'; // маркируем текущую ячейку
    markIsland(grid, i, j + 1);
    markIsland(grid, i, j - 1);
    markIsland(grid, i + 1, j);
    markIsland(grid, i - 1, j);
}
