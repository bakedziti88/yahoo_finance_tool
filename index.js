import fs from 'fs';

import { validateStockSymbol } from './util.js';
import getCsvDataForStockSymbol from './app.js';

//Pull in arguments from command line
const [,,rawStockSymbol] = process.argv;

const stockSymbol = validateStockSymbol(rawStockSymbol);

const main = async () => {
    await getCsvDataForStockSymbol(stockSymbol);
};

main();