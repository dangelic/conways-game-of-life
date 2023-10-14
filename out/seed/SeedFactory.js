"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeedFactorySelector = exports.SeedFactory = void 0;
const RandomSeed_1 = require("./RandomSeed");
class SeedFactory {
}
exports.SeedFactory = SeedFactory;
// Factory class that decides which concrete factory to use
class SeedFactorySelector {
    static createFactory(strategy) {
        if (strategy === 'RANDOM') {
            return new RandomSeed_1.RandomSeed();
        }
        throw new Error('Unsupported strategy'); // You can also handle unsupported strategies differently if needed
    }
}
exports.SeedFactorySelector = SeedFactorySelector;
