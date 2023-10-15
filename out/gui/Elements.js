"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElementsGUI = void 0;
const RandomSeed_1 = require("../seed/RandomSeed");
class ElementsGUI {
    constructor(grid) {
        this.grid = grid;
    }
    createGUI() {
        this.createRandomSeedButton();
        this.createSpawnChanceSlider();
    }
    createRandomSeedButton() {
        // Create a button to randomize Generation 0
        const button = document.createElement('button');
        button.textContent = 'Randomize Gen 0';
        button.addEventListener('click', () => {
            const randomSeed = new RandomSeed_1.RandomSeed(this.randomSpawnChance);
            randomSeed.seedGenerationZero(this.grid);
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
}
exports.ElementsGUI = ElementsGUI;
