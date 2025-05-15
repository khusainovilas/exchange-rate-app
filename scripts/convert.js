// Currency conversion logic

import {getCurrencyData, loadCurrencyData} from './api.js';

export async function mainFunctionCurrencyConverter(inputId, inputMoney, outputId) {
    await loadCurrencyData();
    const rates = getCurrencyData();
    const ratesInput = inputMoney / rates[inputId];
    return ratesInput * rates[outputId];
}