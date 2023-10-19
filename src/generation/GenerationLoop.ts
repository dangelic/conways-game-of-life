import { CellCountsStatistics } from "../statistics/CellCountsStatistics";
import { World } from "../world/World";
import { Rules } from "./Rules";

export class GenerationLoop {
    private world: World;
    private stateOn: boolean;
    private delay: number; // ms
    private generationCount: number;
    private cellCountsStatistics: CellCountsStatistics;
    private static instance: GenerationLoop | null = null;

    private constructor() {
        this.world = World.getInstance();
        this.stateOn = true;
        this.delay = 200;
        this.generationCount = 0;
        this.cellCountsStatistics = CellCountsStatistics.getInstance();
    }

    // Get the singleton instance
    public static getInstance(): GenerationLoop {
        if (!GenerationLoop.instance) {
            GenerationLoop.instance = new GenerationLoop();
        }
        return GenerationLoop.instance;
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
    
    public getDelay(): number {
        return this.delay;
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
        let currentGeneration = this.world.getCurrentGeneration();
        let nextGeneration = Rules.determineNextGeneration(currentGeneration);
        this.world.setWorld(nextGeneration);
        this.cellCountsStatistics.updateGenerations(currentGeneration, nextGeneration);
    }
}