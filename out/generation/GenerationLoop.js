"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenerationLoop = void 0;
const Rules_1 = require("./Rules");
class GenerationLoop {
    constructor(world) {
        this.world = world;
        this.stateOn = true;
        this.delay = 200;
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
        let nextGeneration = Rules_1.Rules.determineNextGeneration(this.world.getCurrentGeneration());
        this.world.setWorld(nextGeneration);
        this.generationCount++;
        this.world.setCurrentGenerationCount(this.generationCount);
    }
}
exports.GenerationLoop = GenerationLoop;
