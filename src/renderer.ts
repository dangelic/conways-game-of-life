import { Grid } from './grid/Grid';
import { RandomSeed } from './seed/RandomSeed';


window.onload = () => {
  const grid = new Grid(); // Create a new Grid instanc
  const randomSeed  = new RandomSeed(0.2) 
  randomSeed.seedGenerationZero(grid)
};