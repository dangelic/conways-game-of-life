import { World } from './world/World';
import { InteractiveElementsGUI } from './gui/InteractiveElementsGUI'
import { GenerationLoop } from './generation/GenerationLoop'
import { StatisticsGUI } from './gui/StatisticsGUI';
import { CellCountsStatistics } from './statistics/CellCountsStatistics';

window.onload = () => {
    World.getInstance(); // Load the grid
    GenerationLoop.getInstance(); // Start the loop for creating generations
    InteractiveElementsGUI.getInstance(); // Enable basic GUI

    // Enable statistics and comparison
    const cellCountsStatistics = CellCountsStatistics.getInstance();
    const statisticsGUI = StatisticsGUI.getInstance()
    cellCountsStatistics.addObserver(statisticsGUI); // Add observer so that statisticsGUI notices changes in stats
};
