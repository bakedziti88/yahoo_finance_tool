# yahoo_finance_tool


## Requirements

1. node latest version - download here https://nodejs.org/en/download/

## How to run
1. After node is installed, clone this repository.
2. Change your working directory to this repository on your local machine
3. Install all packages using
> npm i
4. Start the project using either
> npm start [stock symbol]  
or  
> node index.js [stock symbol]
  
**Note: You must provide the stock symbol as a command line argument**

## Output
Downloaded csv files will go to output folder in ./ of this project

## Notes / future work
  
Right now, the only parameter this script takes is the stock symbol.
It will (by default) download the prices for 1 year with an interval of 1 day.

In the future, if time permits, I will expand the parameters to accept datetimes and interval changes.

If you are able to understand javascript, you can manually change the parameters in the code.
