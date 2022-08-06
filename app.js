import fs from 'fs/promises';
import qs from 'qs';
import moment from 'moment';
import axios from 'axios';

import { BASE_URL, ENDPOINT } from './cfg.js';
//https://query1.finance.yahoo.com/v7/finance/download/DIS?period1=1628201709&period2=1659737709&interval=1d&events=history&includeAdjustedClose=true
//https://query1.finance.yahoo.com/v7/finance/download/DIS?period1=1628283625&period2=1659819625&interval=1wk&events=history&includeAdjustedClose=true
//https://query1.finance.yahoo.com/v7/finance/download/DIS?period1=-252374400&period2=1659744000&interval=1mo&events=history&includeAdjustedClose=true
const buildParams = () => {
    const buildTime = () => {
        const momentObjectNow = moment();

        const endTime = momentObjectNow.unix();
        const beginTime = momentObjectNow.subtract(1, 'years').unix();

        return {
            period1: beginTime,
            period2: endTime,
        };
    };

    return {
        ...buildTime(),
        events: "history",
        includeAdjustedClose: true,
        interval: "1d"
    };
};


const getCsvDataForStockSymbol = async (stockSymbol) => {
    try {
        const csvData = await downloadData(stockSymbol);
        const fileName = createFileName(stockSymbol);

        await saveDataToOutput(fileName, csvData);
    } catch (error) {
        console.log(error);
    }
};

const downloadData = async (stockSymbol) => {
    const queryParams = buildParams();
    const queryString = qs.stringify(queryParams);

    const URI = `${BASE_URL}${ENDPOINT}${stockSymbol}?${queryString}`;
    const csvData = (await axios.get(URI)).data;

    return csvData;
};

const createFileName = (stockSymbol) => {
    return `${stockSymbol}_historical_data.csv`;
};

const saveDataToOutput = async (fileName, csvData) => {
    try {
        await fs.writeFile(`./output/${fileName}`, csvData, { flag: "w+" });
    } catch (error) {
        console.log(error);
        console.log("Error occurred trying to save data.");
    }
};

export default getCsvDataForStockSymbol;

