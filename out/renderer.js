"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const World_1 = require("./world/World");
const Elements_1 = require("./gui/Elements");
const GenerationLoop_1 = require("./generation/GenerationLoop");
window.onload = () => {
    // Create a new World instance
    const world = new World_1.World();
    const generationLoop = new GenerationLoop_1.GenerationLoop(world);
    const elementsGUI = new Elements_1.ElementsGUI(world, generationLoop);
    elementsGUI.loadGUI();
};
