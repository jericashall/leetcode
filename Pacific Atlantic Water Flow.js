/*There is an m x n rectangular island that borders both the Pacific Ocean and Atlantic Ocean. The Pacific Ocean touches the island's left and top edges, and the Atlantic Ocean touches the island's right and bottom edges.

The island is partitioned into a grid of square cells. You are given an m x n integer matrix heights where heights[r][c] represents the height above sea level of the cell at coordinate (r, c).

The island receives a lot of rain, and the rain water can flow to neighboring cells directly north, south, east, and west if the neighboring cell's height is less than or equal to the current cell's height. Water can flow from any cell adjacent to an ocean into the ocean.

Return a 2D list of grid coordinates result where result[i] = [ri, ci] denotes that rain water can flow from cell (ri, ci) to both the Pacific and Atlantic oceans.

 

Example 1:


Input: heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]
Output: [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]
Example 2:

Input: heights = [[2,1],[1,2]]
Output: [[0,0],[0,1],[1,0],[1,1]]
 

Constraints:

m == heights.length
n == heights[r].length
1 <= m, n <= 200
0 <= heights[r][c] <= 105*/

/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
 var pacificAtlantic = function(heights) {
    let pacific = new Array(heights.length).fill().map(() => Array(heights[0].length).fill(false))
    let atlantic = new Array(heights.length).fill().map(() => Array(heights[0].length).fill(false))
    
    let results = []
    
     for(let i = 0; i < heights.length; i++) {
         dfs(i, 0, 0, pacific, heights)
         dfs(i, heights[0].length-1, 0, atlantic, heights)
     }
     
     for(let i = 0; i < heights[0].length; i++) {
         dfs(0, i, 0, pacific, heights)
         dfs(heights.length-1, i, 0, atlantic, heights)
     }
     
     for(let i = 0; i < heights.length; i++) {
         for(let j = 0; j < heights[0].length; j++) {
             if(pacific[i][j] === true && atlantic[i][j] === true) {
                 results.push([i,j])
             }
         }
     }
     
     function dfs(row, column, current, ocean, matrix) {
         if(row < 0 || row >= matrix.length || column < 0 || column >= matrix[0].length) return
         if(ocean[row][column] === true || matrix[row][column] < current ) return
             ocean[row][column] = true
         
         dfs(row+1, column, matrix[row][column], ocean, matrix)
         dfs(row-1, column, matrix[row][column], ocean, matrix)
         dfs(row, column+1, matrix[row][column], ocean, matrix)
         dfs(row, column-1, matrix[row][column], ocean, matrix)
     }
     
     return results
 }

/*Runtime: 154 ms, faster than 80.26% of JavaScript online submissions for Pacific Atlantic Water Flow.
Memory Usage: 51.1 MB, less than 64.41% of JavaScript online submissions for Pacific Atlantic Water Flow.*/
