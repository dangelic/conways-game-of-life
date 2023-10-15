import { Grid } from './grid/Grid';
import { ElementsGUI } from './gui/Elements'
import { Rules } from './generation/Rules'

window.onload = () => {
    // Create a new Grid instance
    const grid = new Grid();
    const elementsGUI = new ElementsGUI(grid)
    elementsGUI.createGUI();

    // let gen = 0;
    
    // function generateNextGeneration() {
        
    //     let nextGeneration = Rules.determineNextGeneration(grid.getCurrentGeneration())
    //     grid.setGrid(nextGeneration)

    //     if (gen <= 2) {
    //         // Increment the generation counter
    //         gen++;
    //         grid.setCurrentGenerationCount(gen)
            
    //         // Wait for 2 seconds and then call the next generation
    //         setTimeout(generateNextGeneration, 2000); // 2000 milliseconds (2 seconds)
    //     }
    // }

    // // Start the generation loop
    // generateNextGeneration();
};
