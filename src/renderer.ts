import { Grid } from './grid/Grid';
import { ElementsGUI } from './gui/Elements'
import { GenerationLoop } from './generation/GenerationLoop'

window.onload = () => {
    // Create a new Grid instance
    const grid = new Grid();
    const elementsGUI = new ElementsGUI(grid)
    elementsGUI.loadGUI();
    const generationLoop = new GenerationLoop(grid)
    generationLoop.startGenerationLoop();
};
