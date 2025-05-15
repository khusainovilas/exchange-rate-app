// DOM manipulation (element selection, UI updates)

import {getCurrencyData, loadCurrencyData, popularCurrencies} from './api.js';

export async function loadData() {
    await loadCurrencyData();
    const rates = getCurrencyData();

    const inputCurrencyOption = document.getElementById("input-currency-option");
    const outputCurrencyOption = document.getElementById("output-currency-option");
    const inputCoinRate = document.getElementById("input-coin-rate");
    const outputCoinRate = document.getElementById("output-coin-rate");

    // Initialize empty fields with zero
    if (!inputCoinRate.value){
        inputCoinRate.value = 0;
    }
    if (!outputCoinRate.value){
        outputCoinRate.value = 0;
    }

    // Populate currency dropdowns
    for (let key in rates) {
        if (key in popularCurrencies){
            const option = document.createElement('option');
            option.textContent = key;
            inputCurrencyOption.appendChild(option);

            const optionCopy = document.createElement('option');
            optionCopy.textContent = key;
            outputCurrencyOption.appendChild(optionCopy);
        }

    }

    // Set default values
    inputCurrencyOption.value = "USD";
    outputCurrencyOption.value = "RUB";
}





