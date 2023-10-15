import { Generation } from '../types/Generation'
import { World } from "../world/World";


export class RandomSeed {
    private randomSpawnChance: number
    constructor(randomSpawnChance: number) {
      this.randomSpawnChance = randomSpawnChance;
    }
    public seedGenerationZero(world: World): void {
        const generationZero: Generation = world.getCurrentGeneration();

        for (let i = 0; i < generationZero.length; i++) {
            for (let j = 0; j < generationZero[0].length; j++) {
              // Generate a random number between 0 and 1
              const random = Math.random();
        
              // If the random number is less than the given spawn chance, set the cell as alive
              if (random < this.randomSpawnChance) generationZero[i][j] = true;
              else generationZero[i][j] = false;
            }
       }
       world.setWorld(generationZero);
    }
}

