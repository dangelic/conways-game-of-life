"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CellCountsStatistics = void 0;
class CellCountsStatistics {
    constructor() {
        this.observers = [];
        this.diedCount = 0;
        this.spawnedCount = 0;
    }
    // Add an observer to the list
    addObserver(observer) {
        this.observers.push(observer);
    }
    // Remove an observer from the list
    removeObserver(observer) {
        const index = this.observers.indexOf(observer);
        if (index !== -1) {
            this.observers.splice(index, 1);
        }
    }
    // Notify all observers when data changes
    notifyObservers() {
        this.observers.forEach((observer) => {
            observer.updateDeadCellCount(this.diedCount);
            observer.updateSpawnedCellCount(this.spawnedCount);
        });
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
        this.notifyObservers(); // Notify the observers when data changes
    }
    // Update the current and previous generations and recalculate the counts
    updateGenerations(currentGeneration, previousGeneration) {
        this.currentGeneration = currentGeneration;
        this.previousGeneration = previousGeneration;
        this.calculateCounts();
        this.notifyObservers(); // Notify the observers when data changes
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
