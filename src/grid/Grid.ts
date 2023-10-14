export class Grid {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private grid: boolean[][];
    private cellSize: number;
    private numRows: number;
    private numCols: number;
  
    constructor() {
      this.canvas = document.createElement('canvas');
      this.canvas.width = 800;
      this.canvas.height = 600;
      document.body.appendChild(this.canvas);
      this.ctx = this.canvas.getContext('2d');
      this.cellSize = 20;
      this.numRows = this.canvas.height / this.cellSize;
      this.numCols = this.canvas.width / this.cellSize;
      this.initGrid();
      this.drawGrid();
      this.addClickListener();
    }
  
    private initGrid() {
      this.grid = new Array(this.numRows).fill(null).map(() => new Array(this.numCols).fill(false));
    }
  
    private drawGrid() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx.strokeStyle = 'black';
  
      for (let x = 0; x < this.canvas.width; x += this.cellSize) {
        this.ctx.beginPath();
        this.ctx.moveTo(x, 0);
        this.ctx.lineTo(x, this.canvas.height);
        this.ctx.stroke();
      }
  
      for (let y = 0; y < this.canvas.height; y += this.cellSize) {
        this.ctx.beginPath();
        this.ctx.moveTo(0, y);
        this.ctx.lineTo(this.canvas.width, y);
        this.ctx.stroke();
      }
  
      for (let i = 0; i < this.numRows; i++) {
        for (let j = 0; j < this.numCols; j++) {
          if (this.grid[i][j]) {
            this.ctx.fillStyle = 'black';
            this.ctx.fillRect(j * this.cellSize, i * this.cellSize, this.cellSize, this.cellSize);
          }
        }
      }
    }
  
    private addClickListener() {
      this.canvas.addEventListener('click', (e) => {
        const rect = this.canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const cellX = Math.floor(x / this.cellSize);
        const cellY = Math.floor(y / this.cellSize);
        this.grid[cellY][cellX] = !this.grid[cellY][cellX];
        this.drawGrid();
      });
    }
  }  