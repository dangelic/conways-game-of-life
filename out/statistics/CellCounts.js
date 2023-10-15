"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CellCounts = void 0;
class CellCounts {
    constructor(currentGeneration, previousGeneration) {
        this.currentGeneration = currentGeneration;
        this.previousGeneration = previousGeneration;
        this.calculateCounts();
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
    }
    // Update the current and previous generations and recalculate the counts
    updateGenerations(currentGeneration, previousGeneration) {
        this.currentGeneration = currentGeneration;
        this.previousGeneration = previousGeneration;
        this.calculateCounts();
    }
    // Calculate the counts of died and spawned cells
    calculateCounts() {
        this.diedCount = 0;
        this.spawnedCount = 0;
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
exports.CellCounts = CellCounts;
