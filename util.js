export const validateStockSymbol = str => {
    if (!str) {
        throw new Error('Missing stock symbol');
    }

    return str.toUpperCase();
};

export const parseNumber = str => {
    try {
        const num = +str;
        if (isNaN(num)) {
            throw new Error('Time period param is not a valid integer');
        }

        return num;
    } catch (error) {
        throw new Error('Time period param is not a valid integer');
    }
};
