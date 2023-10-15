import { World } from '../world/World';
import { RandomSeed } from '../seed/RandomSeed';
import { GenerationLoop } from '../generation/GenerationLoop';

export class ElementsGUI {
    private randomSpawnChance: number;
    private world: World;
    private generationLoop: GenerationLoop;
    private stateOn: boolean;

    constructor(world: World, generationLoop: GenerationLoop) {
        this.world = world;
        this.generationLoop = generationLoop;
        this.randomSpawnChance = 0.2; // Set the initial value for randomSpawnChance
        this.stateOn = false;
    }

    public loadGUI() {
        this.createSpawnChanceSlider();
        this.createRandomSeedButton();
        this.createStartStopButton()
    }

    private createRandomSeedButton() {
        // Create a button to randomize Generation 0
        const button = document.createElement('button');
        button.textContent = 'Randomize Gen 0';
        button.addEventListener('click', () => {
            const randomSeed = new RandomSeed(this.randomSpawnChance);
            randomSeed.seedGenerationZero(this.world);
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

    private createStartStopButton() {
        // Create a button to start/stop the generation loop
        const button = document.createElement('button');
        button.textContent = 'Start/Stop';
        button.addEventListener('click', () => {
            if (this.stateOn) {
                this.stateOn = false; // Stop the loop
                this.generationLoop.setState(false);
            } else {
                this.stateOn = true; // Start the loop
                this.generationLoop.setState(true);
                this.generationLoop.startGenerationLoop(); // Start the loop
            }
        });
        document.body.appendChild(button);
    }
    
}
