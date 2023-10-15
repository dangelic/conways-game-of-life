import { Grid } from './grid/Grid';
import { RandomSeed } from './seed/RandomSeed';
import { ElementsGUI } from './gui/Elements'

let randomSpawnChance = 0.2; // Initial value

window.onload = () => {
    // Create a new Grid instance
    const grid = new Grid();
    const elementsGUI = new ElementsGUI(grid)
    elementsGUI.createGUI();
    
};
