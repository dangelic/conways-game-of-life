"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Grid_1 = require("./grid/Grid");
const Elements_1 = require("./gui/Elements");
let randomSpawnChance = 0.2; // Initial value
window.onload = () => {
    // Create a new Grid instance
    const grid = new Grid_1.Grid();
    const elementsGUI = new Elements_1.ElementsGUI(grid);
    elementsGUI.createGUI();
};
