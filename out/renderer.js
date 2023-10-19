"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const World_1 = require("./world/World");
const InteractiveElementsGUI_1 = require("./gui/InteractiveElementsGUI");
const GenerationLoop_1 = require("./generation/GenerationLoop");
const StatisticsGUI_1 = require("./gui/StatisticsGUI");
window.onload = () => {
    World_1.World.getInstance();
    GenerationLoop_1.GenerationLoop.getInstance();
    InteractiveElementsGUI_1.InteractiveElementsGUI.getInstance();
    StatisticsGUI_1.StatisticsGUI.getInstance();
    // CellCountsStatistics.getInstance().addObserver();
};
