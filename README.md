# Convays' Game of Life (Life)
This is my simple implementation of Life using Electron.js. 

Life is a classic example of a cellular automaton and exhibits interesting emergent behaviors. 
It fascinates me since I've first encountered the game, as it illustrates how simple rules can give rise to complex and emergent behaviors, mirroring the intricacies of natural systems
(like flock of birds, animal colonies or even Living Cells of a Human Body that form complex societies upstream).

I highly recommend watching this video titled "Life in Life," where, thanks to Life's Turing completeness, a computer is created within the game itself, 
running, as you might have guessed, the Game of Life itself. It's a rather meta experience...
==> [Life in Life](https://www.youtube.com/watch?v=Kk2MH9O4pXY).

## Getting Started
To run this application, make sure you have **Node.js** installed. Then, follow these steps:
1. Clone the repository to your local machine: ```git clone https://github.com/your-username/game-of-life.git```
2. Change directory: ```cd game-of-life```
3. Install dependencies: ```npm i```
4. Start the application ```npm run dev```

This will launch the Electron app and open the Life grid.

## Rules of the Game

Life is a cellular automaton devised by mathematician John Conway. It consists of a grid of cells ("world") that can be either alive or dead. 
The following (trivial) rules determine the evolution of the world:

*Birth:* A dead cell with exactly three living neighbors becomes alive in the next generation.
*Death from Loneliness or Overpopulation:* A living cell with fewer than two or more than three living neighbors dies in the next generation from loneliness or overpopulation.
*Staying Alive:* A living cell with two or three living neighbors remains alive in the following generation.

The game progresses generation by generation, with each generation determined by the previous one.

## License
This project is licensed under the MIT License - see the LICENSE file for details.
