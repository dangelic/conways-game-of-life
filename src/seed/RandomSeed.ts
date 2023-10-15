import { Population } from '../types/Population'
import { Grid } from "../grid/Grid";


export class RandomSeed {
    private randomSpawnChance: number
    constructor(randomSpawnChance: number) {
      this.randomSpawnChance = randomSpawnChance;
    }
    public seedGenerationZero(grid: Grid): void {
        const population_zero: Population = grid.getCurrentPopulation();

        for (let i = 0; i < population_zero.length; i++) {
            for (let j = 0; j < population_zero[0].length; j++) {
              // Generate a random number between 0 and 1
              const random = Math.random();
        
              // If the random number is less than the given spawn chance, set the cell as alive
              if (random < this.randomSpawnChance) population_zero[i][j] = true;
              else population_zero[i][j] = false;
            }
       }
       grid.setGridForPopulation(population_zero);
    }
}

