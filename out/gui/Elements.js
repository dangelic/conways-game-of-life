"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElementsGUI = void 0;
const RandomSeed_1 = require("../seed/RandomSeed");
class ElementsGUI {
    constructor(world, generationLoop) {
        this.world = world;
        this.generationLoop = generationLoop;
        this.randomSpawnChance = 0.2; // Set the initial value for randomSpawnChance
        this.stateOn = false;
    }
    loadGUI() {
        this.createSpawnChanceSlider();
        this.createRandomSeedButton();
        this.createStartStopButton();
    }
    createRandomSeedButton() {
        // Create a button to randomize Generation 0
        const button = document.createElement('button');
        button.textContent = 'Randomize Gen 0';
        button.addEventListener('click', () => {
            const randomSeed = new RandomSeed_1.RandomSeed(this.randomSpawnChance);
            randomSeed.seedGenerationZero(this.world);
        });
        document.body.appendChild(button);
    }
    createSpawnChanceSlider() {
        const slider = document.createElement('input');
        slider.type = 'range';
        slider.min = '0.05';
        slider.max = '0.5';
        slider.step = '0.01';
        slider.value = this.randomSpawnChance.toString();
        // Update randomSpawnChance when the slider value changes
        slider.addEventListener('input', () => {
            this.randomSpawnChance = parseFloat(slider.value);
        });
        document.body.appendChild(slider);
    }
    createStartStopButton() {
        // Create a button to start/stop the generation loop
        const button = document.createElement('button');
        button.textContent = 'Start/Stop';
        button.addEventListener('click', () => {
            if (this.stateOn) {
                this.stateOn = false; // Stop the loop
                this.generationLoop.setState(false);
            }
            else {
                this.stateOn = true; // Start the loop
                this.generationLoop.setState(true);
                this.generationLoop.startGenerationLoop(); // Start the loop
            }
        });
        document.body.appendChild(button);
    }
}
exports.ElementsGUI = ElementsGUI;
