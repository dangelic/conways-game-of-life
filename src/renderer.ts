import { Grid } from './grid/Grid';
import { RandomSeed } from './seed/RandomSeed';


window.onload = () => {
    // TODO: Outsource
    const button = document.createElement('button');
    button.textContent = 'Randomize Gen 0';
    button.addEventListener('click', () => {
        let randomSeed  = new RandomSeed(0.2) 
        randomSeed.seedGenerationZero(grid)
    });
    document.body.appendChild(button);


  const grid = new Grid(); // Create a new Grid instance
};