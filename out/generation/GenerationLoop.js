"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenerationLoop = void 0;
const CellCountsStatistics_1 = require("../statistics/CellCountsStatistics");
const World_1 = require("../world/World");
const Rules_1 = require("./Rules");
class GenerationLoop {
    constructor() {
        this.world = World_1.World.getInstance();
        this.stateOn = true;
        this.delay = 200;
        this.generationCount = 0;
        this.cellCountsStatistics = CellCountsStatistics_1.CellCountsStatistics.getInstance();
    }
    // Get the singleton instance
    static getInstance() {
        if (!GenerationLoop.instance) {
            GenerationLoop.instance = new GenerationLoop();
        }
        return GenerationLoop.instance;
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
    getDelay() {
        return this.delay;
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
        let currentGeneration = this.world.getCurrentGeneration();
        let nextGeneration = Rules_1.Rules.determineNextGeneration(currentGeneration);
        this.world.setWorld(nextGeneration);
        this.cellCountsStatistics.updateGenerations(currentGeneration, nextGeneration);
    }
}
exports.GenerationLoop = GenerationLoop;
GenerationLoop.instance = null;
