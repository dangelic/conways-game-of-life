import { StatisticsObserver } from "../interfaces/StatisticsObserver";

export class StatisticsGUI implements StatisticsObserver {
  private deadCellCounter: HTMLSpanElement;
  private spawnedCellCounter: HTMLSpanElement;
  private deadSpawnRatio: HTMLSpanElement;
  private deadCellCount: number;
  private spawnedCellCount: number;

  constructor() {
    this.createCounters();
    this.deadCellCount = 0;
    this.spawnedCellCount = 0;
  }

  // Create and initialize the counters with CSS positioning and styling
  private createCounters() {
    // Create a container div for the counters
    const countersContainer = document.createElement('div');
    countersContainer.textContent = 'Population ∑ : ';
    // countersContainer.style.fontWeight = 'bold';
    countersContainer.style.fontSize = '18px';
    countersContainer.style.position = 'fixed';
    countersContainer.style.bottom = '10px';
    countersContainer.style.left = '50%'; // Set the left position to 50% to center horizontally
    countersContainer.style.transform = 'translateX(-50%)'; // Center horizontally

    // dead cells
    this.deadCellCounter = document.createElement('span');
    this.deadCellCounter.textContent = 'Dead Cells: 0 ';
    this.deadCellCounter.style.fontSize = '18px';
    this.deadCellCounter.style.color = 'blue';
    countersContainer.appendChild(this.deadCellCounter);

    // spawned cells
    this.spawnedCellCounter = document.createElement('span');
    this.spawnedCellCounter.textContent = 'Spawned Cells: 0 ';
    //this.spawnedCellCounter.style.fontWeight = 'bold';
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

  public resetCounter(): void {
    this.deadCellCount = 0;
    this.spawnedCellCount = 0;
    this.updateDeadCellCount(this.deadCellCount);
    this.updateSpawnedCellCount(this.spawnedCellCount);
    this.updateDeadSpawnRatio();
  }

  // Update the counter for spawned cells
  public updateSpawnedCellCount(count: number): void {
    this.spawnedCellCounter.textContent = `Spawned Cells: ${count} `;
    this.spawnedCellCount = count;
    if (this.spawnedCellCount !== 0) {
      this.updateDeadSpawnRatio();
    } else {
      this.deadSpawnRatio.textContent = 'Ratio: /';
    }
  }

  // Update the counter for dead cells
  public updateDeadCellCount(count: number): void {
    this.deadCellCounter.textContent = `Dead Cells: ${count} `;
    this.deadCellCount = count;
    if (this.deadCellCount !== 0) {
      this.updateDeadSpawnRatio();
    } else {
      this.deadSpawnRatio.textContent = 'Ratio: /';
    }
  }

  private updateDeadSpawnRatio() {
    const ratio = (this.deadCellCount / this.spawnedCellCount) * 100;
    this.deadSpawnRatio.textContent = `Ratio: ${ratio.toFixed(2)}%`;
  }
}
