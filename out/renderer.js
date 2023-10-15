"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Grid_1 = require("./grid/Grid");
const RandomSeed_1 = require("./seed/RandomSeed");
let randomSpawnChance = 0.2; // Initial value
window.onload = () => {
    // Create a new Grid instance
    const grid = new Grid_1.Grid();
    // Create a slider to adjust randomSpawnChance
    const slider = document.createElement('input');
    slider.type = 'range';
    slider.min = '0.05';
    slider.max = '0.5';
    slider.step = '0.01';
    slider.value = randomSpawnChance.toString();
    // Update randomSpawnChance when the slider value changes
    slider.addEventListener('input', () => {
        randomSpawnChance = parseFloat(slider.value);
    });
    // Create a button to randomize Generation 0
    const button = document.createElement('button');
    button.textContent = 'Randomize Gen 0';
    button.addEventListener('click', () => {
        const randomSeed = new RandomSeed_1.RandomSeed(randomSpawnChance);
        randomSeed.seedGenerationZero(grid);
    });
    // Append the slider and button to the document
    document.body.appendChild(slider);
    document.body.appendChild(button);
};
