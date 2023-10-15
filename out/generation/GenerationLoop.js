"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenerationLoop = void 0;
const Rules_1 = require("./Rules");
class GenerationLoop {
    constructor(grid) {
        this.grid = grid;
        this.stateOn = true;
        this.delay = 1000;
        this.generationCount = 0;
    }
    setState(isOn) {
        this.stateOn = isOn;
    }
    setDelay(delay) {
        this.delay = delay;
    }
    setGenerationCount(generationCount) {
        this.generationCount = generationCount;
    }
    startGenerationLoop() {
        const loop = () => {
            if (this.stateOn) {
                this.generateNextGeneration();
                setTimeout(loop, this.delay);
            }
        };
        loop();
    }
    generateNextGeneration() {
        let nextGeneration = Rules_1.Rules.determineNextGeneration(this.grid.getCurrentGeneration());
        this.grid.setGrid(nextGeneration);
        this.generationCount++;
        this.grid.setCurrentGenerationCount(this.generationCount);
    }
}
exports.GenerationLoop = GenerationLoop;
