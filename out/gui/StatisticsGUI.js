"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatisticsGUI = void 0;
class StatisticsGUI {
    constructor() {
        this.createCounters();
        this.deadCellCount = 0;
        this.spawnedCellCount = 0;
    }
    // Get the singleton instance
    static getInstance() {
        if (!StatisticsGUI.instance) {
            StatisticsGUI.instance = new StatisticsGUI();
        }
        return StatisticsGUI.instance;
    }
    // Create and initialize the counters with CSS positioning and styling
    createCounters() {
        // Create a container div for the counters
        const countersContainer = document.createElement('div');
        countersContainer.textContent = 'Population ∑ : ';
        countersContainer.style.fontSize = '18px';
        countersContainer.style.position = 'fixed';
        countersContainer.style.bottom = '10px';
        countersContainer.style.left = '50%';
        countersContainer.style.transform = 'translateX(-50%)';
        // dead cells
        this.deadCellCounter = document.createElement('span');
        this.deadCellCounter.textContent = 'Dead Cells: 0 ';
        this.deadCellCounter.style.fontSize = '18px';
        this.deadCellCounter.style.color = 'blue';
        countersContainer.appendChild(this.deadCellCounter);
        // spawned cells
        this.spawnedCellCounter = document.createElement('span');
        this.spawnedCellCounter.textContent = 'Spawned Cells: 0 ';
        this.spawnedCellCounter.style.fontSize = '18px';
        this.spawnedCellCounter.style.color = 'green';
        countersContainer.appendChild(this.spawnedCellCounter);
        // Dead-Spawn-Ratio
        this.deadSpawnRatio = document.createElement('span');
        this.deadSpawnRatio.textContent = 'Ratio: /';
        this.deadSpawnRatio.style.fontWeight = 'bold';
        this.deadSpawnRatio.style.fontSize = '18px';
        this.deadSpawnRatio.style.color = 'black';
        countersContainer.appendChild(this.deadSpawnRatio);
        document.body.appendChild(countersContainer);
    }
    resetCounter() {
        this.deadCellCount = 0;
        this.spawnedCellCount = 0;
        this.updateDeadCellCount(this.deadCellCount);
        this.updateSpawnedCellCount(this.spawnedCellCount);
        this.updateDeadSpawnRatio();
    }
    // Update the counter for spawned cells
    updateSpawnedCellCount(count) {
        this.spawnedCellCounter.textContent = `Spawned Cells: ${count} `;
        this.spawnedCellCount = count;
        if (this.spawnedCellCount !== 0) {
            this.updateDeadSpawnRatio();
        }
        else {
            this.deadSpawnRatio.textContent = 'Ratio: /';
        }
    }
    // Update the counter for dead cells
    updateDeadCellCount(count) {
        this.deadCellCounter.textContent = `Dead Cells: ${count} `;
        this.deadCellCount = count;
        if (this.deadCellCount !== 0) {
            this.updateDeadSpawnRatio();
        }
        else {
            this.deadSpawnRatio.textContent = 'Ratio: /';
        }
    }
    updateDeadSpawnRatio() {
        const ratio = (this.deadCellCount / this.spawnedCellCount) * 100;
        this.deadSpawnRatio.textContent = `Ratio: ${ratio.toFixed(2)}%`;
    }
}
exports.StatisticsGUI = StatisticsGUI;
StatisticsGUI.instance = null;
