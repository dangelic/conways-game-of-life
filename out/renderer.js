"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const World_1 = require("./world/World");
const InteractiveElementsGUI_1 = require("./gui/InteractiveElementsGUI");
const GenerationLoop_1 = require("./generation/GenerationLoop");
const StatisticsGUI_1 = require("./gui/StatisticsGUI");
const CellCountsStatistics_1 = require("./statistics/CellCountsStatistics");
window.onload = () => {
    // Create a new World instance
    const world = new World_1.World();
    const statisticsGUI = new StatisticsGUI_1.StatisticsGUI();
    const cellCountsStatistics = new CellCountsStatistics_1.CellCountsStatistics(statisticsGUI);
    const generationLoop = new GenerationLoop_1.GenerationLoop(world, cellCountsStatistics);
    const interactiveElementsGUI = new InteractiveElementsGUI_1.InteractiveElementsGUI(world, generationLoop, cellCountsStatistics);
};
