import { World } from './world/World';
import { InteractiveElementsGUI } from './gui/InteractiveElementsGUI'
import { GenerationLoop } from './generation/GenerationLoop'
import { StatisticsGUI } from './gui/StatisticsGUI';
import { CellCountsStatistics } from './statistics/CellCountsStatistics';

window.onload = () => {
    // Create a new World instance
    const world = new World();
    
    // Create a StatisticsGUI instance
    const statisticsGUI = new StatisticsGUI();
    
    // Create a CellCountsStatistics instance
    const cellCountsStatistics = new CellCountsStatistics();

    // Add StatisticsGUI as an observer to CellCountsStatistics
    cellCountsStatistics.addObserver(statisticsGUI);

    // Create a GenerationLoop instance
    const generationLoop = new GenerationLoop(world, cellCountsStatistics);

    // Create an InteractiveElementsGUI instance
    const interactiveElementsGUI = new InteractiveElementsGUI(world, generationLoop, cellCountsStatistics);
};
