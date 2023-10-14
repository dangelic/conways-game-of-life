"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Grid_1 = require("./grid/Grid");
const RandomSeed_1 = require("./seed/RandomSeed");
window.onload = () => {
    const grid = new Grid_1.Grid(); // Create a new Grid instanc
    const randomSeed = new RandomSeed_1.RandomSeed(0.1);
    randomSeed.seedGenerationZero(grid);
};
