export interface StatisticsObserver {
    updateSpawnedCellCount(count: number): void;
    updateDeadCellCount(count: number): void;
  }