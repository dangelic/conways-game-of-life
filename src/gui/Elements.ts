import { Grid } from '../grid/Grid';
import { RandomSeed } from '../seed/RandomSeed';

export class ElementsGUI {
    private randomSpawnChance: number;
    private grid: Grid;

    constructor(grid: Grid) {
        this.grid = grid;
        // Set the initial value for randomSpawnChance
        this.randomSpawnChance = 0.2;
    }

    public createGUI() {
        this.createRandomSeedButton();
        this.createSpawnChanceSlider();
    }

    private createRandomSeedButton() {
        // Create a button to randomize Generation 0
        const button = document.createElement('button');
        button.textContent = 'Randomize Gen 0';
        button.addEventListener('click', () => {
            const randomSeed = new RandomSeed(this.randomSpawnChance);
            randomSeed.seedGenerationZero(this.grid);
        });
        document.body.appendChild(button);
    }

    private createSpawnChanceSlider() {
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
