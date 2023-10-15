"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RandomSeed = void 0;
class RandomSeed {
    constructor(randomSpawnChance) {
        this.randomSpawnChance = randomSpawnChance;
    }
    seedGenerationZero(grid) {
        const population_zero = grid.getCurrentPopulation();
        for (let i = 0; i < population_zero.length; i++) {
            for (let j = 0; j < population_zero[0].length; j++) {
                // Generate a random number between 0 and 1
                const random = Math.random();
                // If the random number is less than the given spawn chance, set the cell as alive
                if (random < this.randomSpawnChance)
                    population_zero[i][j] = true;
                else
                    population_zero[i][j] = false;
            }
        }
        grid.setGridForPopulation(population_zero);
    }
}
exports.RandomSeed = RandomSeed;
