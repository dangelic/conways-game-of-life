"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.World = void 0;
class World {
    constructor() {
        this.margin = 10;
        this.canvas = document.createElement('canvas');
        this.canvas.width = 1000 + 2 * this.margin;
        this.canvas.height = 800 + 2 * this.margin;
        this.canvas.style.position = 'absolute';
        this.canvas.style.left = '50%';
        this.canvas.style.top = '50%';
        this.canvas.style.transform = 'translate(-50%, -50%)';
        document.body.appendChild(this.canvas);
        this.ctx = this.canvas.getContext('2d');
        this.cellSize = 10;
        this.numRows = (this.canvas.height - 2 * this.margin) / this.cellSize;
        this.numCols = (this.canvas.width - 2 * this.margin) / this.cellSize;
        this.initEmptyWorld();
        this.drawWorld();
        this.addClickListener();
        this.currentGenerationCount = 0;
        this.hasComparisonToggled = false;
    }
    getCurrentGeneration() {
        return this.currentGeneration;
    }
    getPreviousGeneration() {
        return this.previousGeneration;
    }
    getCurrentGenerationCount() {
        return this.currentGenerationCount;
    }
    getNumRows() {
        return this.numRows;
    }
    getNumCols() {
        return this.numCols;
    }
    // Setter to update the state of the world
    setWorld(currentGeneration) {
        this.previousGeneration = this.currentGeneration; // Save the last generation for comparison
        this.currentGeneration = currentGeneration;
        this.currentGenerationCount++;
        this.drawWorld(); // Update the display after changing the currentGeneration
    }
    setCurrentGenerationCount(currentGenerationCount) {
        this.currentGenerationCount = currentGenerationCount;
    }
    setComparisonToggle(toggle) {
        this.hasComparisonToggled = toggle;
    }
    initEmptyWorld() {
        this.currentGeneration = new Array(this.numRows).fill(null).map(() => new Array(this.numCols).fill(false));
        this.previousGeneration = this.currentGeneration;
        this.currentGenerationCount = 0;
        this.drawWorld(); // Update the display after changing the currentGeneration
    }
    drawWorld() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.strokeStyle = 'red';
        for (let x = this.margin; x <= this.canvas.width - this.margin; x += this.cellSize) {
            const pixelX = Math.round(x);
            this.ctx.beginPath();
            this.ctx.moveTo(pixelX, this.margin);
            this.ctx.lineTo(pixelX, this.canvas.height - this.margin);
            this.ctx.stroke();
        }
        for (let y = this.margin; y <= this.canvas.height - this.margin; y += this.cellSize) {
            const pixelY = Math.round(y);
            this.ctx.beginPath();
            this.ctx.moveTo(this.margin, pixelY);
            this.ctx.lineTo(this.canvas.width - this.margin, pixelY);
            this.ctx.stroke();
        }
        // Draw the current generation
        for (let i = 0; i < this.numRows; i++) {
            for (let j = 0; j < this.numCols; j++) {
                if (this.currentGeneration[i][j]) {
                    this.ctx.fillStyle = 'black';
                    this.ctx.fillRect(j * this.cellSize + this.margin, i * this.cellSize + this.margin, this.cellSize, this.cellSize);
                }
            }
        }
        if (this.hasComparisonToggled)
            this.drawGenerationComparison(); // Draw the comparison before the current generation
        // Add a counter for generations
        this.ctx.font = 'bold 50px Arial';
        this.ctx.fillStyle = 'red';
        this.ctx.fillText(`Gen ${this.currentGenerationCount}`, 10, this.canvas.height - 20);
    }
    drawGenerationComparison() {
        for (let i = 0; i < this.numRows; i++) {
            for (let j = 0; j < this.numCols; j++) {
                if (this.currentGeneration[i][j] && !this.previousGeneration[i][j]) {
                    // Cell is green if it is in the current generation but not in the previous generation
                    this.ctx.fillStyle = 'green';
                    this.ctx.fillRect(j * this.cellSize + this.margin, i * this.cellSize + this.margin, this.cellSize, this.cellSize);
                }
                else if (!this.currentGeneration[i][j] && this.previousGeneration[i][j]) {
                    // Cell is red if it is in the previous generation but not in the current generation
                    this.ctx.fillStyle = 'blue';
                    this.ctx.fillRect(j * this.cellSize + this.margin, i * this.cellSize + this.margin, this.cellSize, this.cellSize);
                }
            }
        }
    }
    addClickListener() {
        this.canvas.addEventListener('click', (e) => {
            const rect = this.canvas.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const cellX = Math.floor((x - this.margin) / this.cellSize);
            const cellY = Math.floor((y - this.margin) / this.cellSize);
            this.currentGeneration[cellY][cellX] = !this.currentGeneration[cellY][cellX]; // Toggle the cell state
            this.drawWorld();
        });
    }
}
exports.World = World;
