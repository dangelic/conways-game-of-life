"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CellCountsStatistics = void 0;
class CellCountsStatistics {
    constructor(statisticsGUI) {
        this.statisticsGUI = statisticsGUI;
        this.diedCount = 0;
        this.spawnedCount = 0;
    }
    // Calculate and return the count of cells that died
    getDiedCellCount() {
        return this.diedCount;
    }
    // Calculate and return the count of cells that spawned
    getSpawnedCellCount() {
        return this.spawnedCount;
    }
    // Reset both counters to zero
    resetCounters() {
        this.diedCount = 0;
        this.spawnedCount = 0;
        this.statisticsGUI.resetCounter();
    }
    // Update the current and previous generations and recalculate the counts
    updateGenerations(currentGeneration, previousGeneration) {
        this.currentGeneration = currentGeneration;
        this.previousGeneration = previousGeneration;
        this.calculateCounts();
        this.statisticsGUI.updateDeadCellCount(this.diedCount);
        this.statisticsGUI.updateSpawnedCellCount(this.spawnedCount);
    }
    // Calculate the counts of died and spawned cells
    calculateCounts() {
        for (let i = 0; i < this.currentGeneration.length; i++) {
            for (let j = 0; j < this.currentGeneration[i].length; j++) {
                if (this.previousGeneration[i][j] && !this.currentGeneration[i][j]) {
                    this.diedCount++;
                }
                else if (!this.previousGeneration[i][j] && this.currentGeneration[i][j]) {
                    this.spawnedCount++;
                }
            }
        }
    }
}
exports.CellCountsStatistics = CellCountsStatistics;
