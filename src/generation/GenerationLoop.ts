import { Grid } from "../grid/Grid";
import { Rules } from "./Rules";

export class GenerationLoop {
    private grid: Grid
    private stateOn: boolean;
    private delay: number; // ms
    private generationCount: number;

    constructor(grid: Grid) {
        this.grid = grid;
        this.stateOn = true;
        this.delay = 1000;
        this.generationCount = 0;
    }

    public setState(isOn: boolean): void {
        this.stateOn = isOn;
    }

    public setDelay(delay: number): void {
        this.delay = delay;
    }

    public setGenerationCount(generationCount: number): void {
        this.generationCount = generationCount;
    }

    public startGenerationLoop(): void {
        const loop = () => {
            if (this.stateOn) {
                this.generateNextGeneration();
                setTimeout(loop, this.delay);
            }
        };
    
        loop();
    }

    private generateNextGeneration(): void {
        let nextGeneration = Rules.determineNextGeneration(this.grid.getCurrentGeneration())
            this.grid.setGrid(nextGeneration)
            this.generationCount++;
            this.grid.setCurrentGenerationCount(this.generationCount)
    }

}