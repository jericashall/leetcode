/*Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

 

Example 1:

Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1
Example 2:

Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3
 

Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 300
grid[i][j] is '0' or '1'.*/



//with dfs
/**
 * @param {character[][]} grid
 * @return {number}
 */
 var numIslands = function(grid) {
  
    let islands = 0;
    
    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[i].length; j++) {
            if(grid[i][j] === "1") {
                islands += 1
                dfs(i, j)
            }
        }
    }
    
    return islands
    
    function dfs(row, column) {
        grid[row][column] = 0
        
        if(grid?.[row + 1]?.[column] === "1") {
            dfs(row+1, column)
        }
        if(grid?.[row-1]?.[column] === "1") {
            dfs(row-1, column)
        }
        if(grid[row]?.[column + 1] === "1") {
            dfs(row, column+1)
        }
        if(grid[row]?.[column -1] === "1") {
            dfs(row, column-1)
        }
        return;
    }
};

/*Runtime: 90 ms, faster than 87.13% of JavaScript online submissions for Number of Islands.
Memory Usage: 44.7 MB, less than 87.47% of JavaScript online submissions for Number of Islands.*/




// with bfs
/**
 * @param {character[][]} grid
 * @return {number}
 */
 var numIslands = function(grid) {
    
    let islands = 0;
    let rows = grid.length;
    let columns = grid[0].length;
    
    for(let i = 0; i < rows; i++) {
        for(let j = 0; j < columns; j++) {
            if(grid[i][j] === "1") {
                islands += 1;
                bfs(i, j) 
            }
        }
            
    }
    return islands;
    
    function bfs(row, column) {   
        let queue = [[row, column]];
        while(queue.length > 0) {
            let current = queue.shift();
            row = current[0];
            column = current[1];
            if(grid[row][column] === "1") {
                grid[row][column] = 0;
                if(grid?.[row+1]?.[column] === "1"){
                    queue.push([row+1,column])
                }
                if(grid?.[row-1]?.[column] === "1"){
                    queue.push([row-1, column])
                }
                if(grid?.[row]?.[column+1] === "1"){
                    queue.push([row, column+1])
                }
                if(grid?.[row]?.[column-1] === "1"){
                    queue.push([row, column-1])
                }
            }
        }
    }

};

/*Runtime: 92 ms, faster than 84.66% of JavaScript online submissions for Number of Islands.
Memory Usage: 48.8 MB, less than 42.67% of JavaScript online submissions for Number of Islands.*/
