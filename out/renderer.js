"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Grid_1 = require("./grid/Grid");
const RandomSeed_1 = require("./seed/RandomSeed");
window.onload = () => {
    // TODO: Outsource
    const button = document.createElement('button');
    button.textContent = 'Randomize Gen 0';
    button.addEventListener('click', () => {
        let randomSeed = new RandomSeed_1.RandomSeed(0.2);
        randomSeed.seedGenerationZero(grid);
    });
    document.body.appendChild(button);
    const grid = new Grid_1.Grid(); // Create a new Grid instance
};
