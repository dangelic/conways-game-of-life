"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RandomSeed = void 0;
class RandomSeed {
    constructor(randomSpawnChance) {
        this.randomSpawnChance = randomSpawnChance;
    }
    seedGenerationZero(grid) {
        const generation_zero = grid.getCurrentGeneration();
        for (let i = 0; i < generation_zero.length; i++) {
            for (let j = 0; j < generation_zero[0].length; j++) {
                // Generate a random number between 0 and 1
                const random = Math.random();
                // If the random number is less than the given spawn chance, set the cell as alive
                if (random < this.randomSpawnChance)
                    generation_zero[i][j] = true;
                else
                    generation_zero[i][j] = false;
            }
        }
        grid.setGridForGeneration(generation_zero);
    }
}
exports.RandomSeed = RandomSeed;
