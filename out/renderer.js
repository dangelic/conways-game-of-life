"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Grid_1 = require("./grid/Grid");
const Elements_1 = require("./gui/Elements");
window.onload = () => {
    // Create a new Grid instance
    const grid = new Grid_1.Grid();
    const elementsGUI = new Elements_1.ElementsGUI(grid);
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
