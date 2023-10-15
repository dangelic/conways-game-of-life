import { World } from "../world/World";
import { Rules } from "./Rules";

export class GenerationLoop {
    private world: World
    private stateOn: boolean;
    private delay: number; // ms
    private generationCount: number;

    constructor(world: World) {
        this.world = world;
        this.stateOn = true;
        this.delay = 200;
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

    public getDelay(): number {
        return this.delay;
    }

    private generateNextGeneration(): void {
        let nextGeneration = Rules.determineNextGeneration(this.world.getCurrentGeneration())
            this.world.setWorld(nextGeneration)
            this.generationCount++;
            this.world.setCurrentGenerationCount(this.generationCount)
    }

}