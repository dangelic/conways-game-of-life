import { Generation } from '../types/Generation';

export class Rules {

    public static determineNextGeneration(currentGeneration: Generation): Generation {
        const numRows = currentGeneration.length;
        const numCols = currentGeneration[0].length;

        // Create a new 2D array to store the next generation
        const nextGeneration: Generation = new Array(numRows).fill(null).map(() => new Array(numCols).fill(false));

        // Iterate through each cell in the current generation
        for (let x = 0; x < numRows; x++) {
            for (let y = 0; y < numCols; y++) {
                // Apply the rules to determine the state of the cell in the next generation
                if (Rules.willSpawn(currentGeneration, x, y)) {
                    nextGeneration[x][y] = true; // Cell is born
                } else if (Rules.willDie(currentGeneration, x, y)) {
                    nextGeneration[x][y] = false; // Cell dies
                } else if (Rules.willStayAlive(currentGeneration, x, y)) {
                    nextGeneration[x][y] = true; // Cell stays alive
                }
            }
        }
        return nextGeneration;
    }

    /**
     * RULE I: BIRTH
     * A dead cell with exactly three living neighbors is born in the following generation. 
     */
    private static willSpawn(generation: Generation, x: number, y: number): boolean {
        const livingNeighbors = Rules.countLivingNeighbors(generation, x, y);
        return !generation[x][y] && livingNeighbors === 3;
    }

    /**
     * RULE II + III: DEATH FROM LONELINESS OR OVERPOPULATION
     * A living cell with fewer than two living neighbors (- or more than three) dies in the next generation from loneliness (- or overgeneration).
     */
    private static willDie(generation: Generation, x: number, y: number): boolean {
        const livingNeighbors = Rules.countLivingNeighbors(generation, x, y);
        return (generation[x][y] && livingNeighbors < 2) || (generation[x][y] && livingNeighbors > 3);
    }

    /**
     * RULE IV: STAYING ALIVE
     * A living cell with two or three living neighbors remains alive in the following generation.
     */
    private static willStayAlive(generation: Generation, x: number, y: number): boolean {
        const livingNeighbors = Rules.countLivingNeighbors(generation, x, y);
        return generation[x][y] && (livingNeighbors === 2 || livingNeighbors === 3);
    }

    private static countLivingNeighbors(generation: Generation, x: number, y: number): number {
        const numRows = generation.length;
        const numCols = generation[0].length;

        // Define the relative positions of the 8 neighboring cells
        const neighbors = [
            [-1, -1] , [-1, 0] , [-1, 1],
            [0, -1]  ,           [0, 1],
            [1, -1]  , [1, 0]  , [1, 1]
        ];
        
        let count = 0;

        for (const [dx, dy] of neighbors) {
            const newX = x + dx;
            const newY = y + dy;

            // Check if the neighboring cell is within the bounds of the grid
            if (newX >= 0 && newX < numRows && newY >= 0 && newY < numCols) {
                // If the neighboring cell is alive, increment the count
                if (generation[newX][newY]) {
                    count++;
                }
            }
        }

        return count;
    }
}
