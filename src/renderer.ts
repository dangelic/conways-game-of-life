import { World } from './world/World';
import { InteractiveElementsGUI } from './gui/InteractiveElementsGUI'
import { GenerationLoop } from './generation/GenerationLoop'
import { StatisticsGUI } from './gui/StatisticsGUI';
import { CellCountsStatistics } from './statistics/CellCountsStatistics';

window.onload = () => {
    // Create a new World instance
    const world = new World();
    const statisticsGUI = new StatisticsGUI();
    const cellCountsStatistics = new CellCountsStatistics(statisticsGUI);
    const generationLoop = new GenerationLoop(world, cellCountsStatistics)
    const interactiveElementsGUI = new InteractiveElementsGUI(world, generationLoop, cellCountsStatistics)
};
