import { World } from './world/World';
import { ElementsGUI } from './gui/Elements'
import { GenerationLoop } from './generation/GenerationLoop'

window.onload = () => {
    // Create a new World instance
    const world = new World();
    const generationLoop = new GenerationLoop(world)
    const elementsGUI = new ElementsGUI(world, generationLoop)
    elementsGUI.loadGUI();
};
