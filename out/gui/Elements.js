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
        this.comparisonModeIsOn = false;
    }
    loadGUI() {
        this.createSpawnChanceSlider();
        this.createRandomSeedButton();
        this.createStartStopButton();
        this.createToggleComparisonButton();
        this.createSpeedControl();
        this.createClearButton();
    }
    createClearButton() {
        // Create a button to clear the world
        const button = document.createElement('button');
        button.textContent = 'Clear';
        button.addEventListener('click', () => {
            this.world.initEmptyWorld();
            this.generationLoop.setGenerationCount(0);
        });
        document.body.appendChild(button);
    }
    createToggleComparisonButton() {
        // Create a button to start/stop comparison mode
        const button = document.createElement('button');
        button.textContent = 'Comparison Mode';
        button.addEventListener('click', () => {
            if (this.comparisonModeIsOn) {
                this.comparisonModeIsOn = false;
                this.world.setComparisonToggle(false);
            }
            else {
                this.comparisonModeIsOn = true;
                this.world.setComparisonToggle(true);
            }
        });
        document.body.appendChild(button);
    }
    createRandomSeedButton() {
        // Create a button to randomize Generation 0
        const button = document.createElement('button');
        button.textContent = 'Randomize Gen 0';
        button.addEventListener('click', () => {
            const randomSeed = new RandomSeed_1.RandomSeed(this.randomSpawnChance);
            this.world.setCurrentGenerationCount(0);
            randomSeed.seedGenerationZero(this.world);
        });
        document.body.appendChild(button);
    }
    createSpawnChanceSlider() {
        const slider = document.createElement('input');
        slider.type = 'range';
        slider.min = '0.05';
        slider.max = '1';
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
    createSpeedControl() {
        // Create a speed control with plus and minus buttons
        const speedControl = document.createElement('div');
        speedControl.classList.add('speed-control');
        const plusButton = document.createElement('button');
        plusButton.textContent = '+';
        plusButton.addEventListener('click', () => {
            // Reduce the delay to make the loop faster
            const currentDelay = this.generationLoop.getDelay();
            if (currentDelay > 50) { // Ensure it doesn't go too fast
                const newDelay = currentDelay - 50;
                this.generationLoop.setDelay(newDelay);
            }
        });
        const minusButton = document.createElement('button');
        minusButton.textContent = '-';
        minusButton.addEventListener('click', () => {
            // Accelerate the delay to make the loop slower
            const currentDelay = this.generationLoop.getDelay();
            if (currentDelay < 15000) {
                const newDelay = currentDelay + 50;
                this.generationLoop.setDelay(newDelay);
            }
        });
        speedControl.appendChild(plusButton);
        speedControl.appendChild(minusButton);
        document.body.appendChild(speedControl);
    }
}
exports.ElementsGUI = ElementsGUI;
