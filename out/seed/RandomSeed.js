"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RandomSeed = void 0;
class RandomSeed {
    constructor(randomSpawnChance) {
        this.randomSpawnChance = randomSpawnChance;
    }
    seedGenerationZero(world) {
        const generationZero = world.getCurrentGeneration();
        for (let i = 0; i < generationZero.length; i++) {
            for (let j = 0; j < generationZero[0].length; j++) {
                // Generate a random number between 0 and 1
                const random = Math.random();
                // If the random number is less than the given spawn chance, set the cell as alive
                if (random < this.randomSpawnChance)
                    generationZero[i][j] = true;
                else
                    generationZero[i][j] = false;
            }
        }
        world.setWorld(generationZero);
    }
}
exports.RandomSeed = RandomSeed;
