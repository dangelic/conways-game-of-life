// // Import any necessary types
// import { Grid } from '../'; // Import your grid type
// // Function to initialize the grid with a 25% chance for each cell to be alive
// export function initializeGridWithProbability(grid: Grid) {
//   const numRows = grid.length;
//   const numCols = grid[0].length;
//   for (let i = 0; i < numRows; i++) {
//     for (let j = 0; j < numCols; j++) {
//       // Generate a random number between 0 and 1
//       const random = Math.random();
//       // If the random number is less than 0.25 (25% chance), set the cell as alive
//       if (random < 0.25) {
//         grid[i][j] = true;
//       } else {
//         grid[i][j] = false;
//       }
//     }
//   }
// }
