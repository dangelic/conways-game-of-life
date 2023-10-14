"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Grid = void 0;
class Grid {
    constructor() {
        this.margin = 10;
        this.canvas = document.createElement('canvas');
        this.canvas.width = 800 + 2 * this.margin;
        this.canvas.height = 600 + 2 * this.margin;
        this.canvas.style.position = 'absolute';
        this.canvas.style.left = '50%';
        this.canvas.style.top = '50%';
        this.canvas.style.transform = 'translate(-50%, -50%)';
        document.body.appendChild(this.canvas);
        this.ctx = this.canvas.getContext('2d');
        this.cellSize = 20;
        this.numRows = (this.canvas.height - 2 * this.margin) / this.cellSize;
        this.numCols = (this.canvas.width - 2 * this.margin) / this.cellSize;
        this.initGrid();
        this.drawGrid();
        this.addClickListener();
    }
    getGrid() {
        return this.grid;
    }
    // Setter to update the state of the grid
    setGrid(newGrid) {
        this.grid = newGrid;
        this.drawGrid(); // Update the display after changing the grid
    }
    initGrid() {
        this.grid = new Array(this.numRows).fill(null).map(() => new Array(this.numCols).fill(false));
    }
    drawGrid() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.strokeStyle = 'black';
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
        for (let i = 0; i < this.numRows; i++) {
            for (let j = 0; j < this.numCols; j++) {
                if (this.grid[i][j]) {
                    this.ctx.fillStyle = 'black';
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
            this.grid[cellY][cellX] = !this.grid[cellY][cellX]; // Toggle the cell state
            this.drawGrid();
        });
    }
}
exports.Grid = Grid;
