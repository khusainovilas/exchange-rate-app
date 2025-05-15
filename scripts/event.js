// Event handlers setup and currency operations

import {mainFunctionCurrencyConverter} from './convert.js';

export const inputMoney = document.getElementById("input-coin-rate");
export const outputMoney = document.getElementById("output-coin-rate");
export const changeBtn = document.getElementById("changeBtn");

export let inputCurrencySelect  = document.getElementById("input-currency-option");
export let outputCurrencySelect  = document.getElementById("output-currency-option");

const inputOneToOne = document.getElementById("one-to-one-input-converter");

// Swaps selected currencies when swap button is clicked
export async function funcChangeBtn() {
    const inputCurrency = inputCurrencySelect.value;

    inputCurrencySelect.value = outputCurrencySelect.value;
    outputCurrencySelect.value = inputCurrency;
}

// Performs currency conversion and updates output field
export async function funcInputOutput() {
    const inputCurrency = inputCurrencySelect.value;
    const outputCurrency = outputCurrencySelect.value;
    const result =  await mainFunctionCurrencyConverter(inputCurrency, inputMoney.value, outputCurrency);
    outputMoney.value = result.toFixed(2);
}

// Displays 1:1 exchange rate between selected currencies
export async function funcOneToOne() {
    const inputCurrency = inputCurrencySelect.value;
    const outputCurrency = outputCurrencySelect.value;

    const OneToOneInputConverter = await mainFunctionCurrencyConverter(inputCurrency, 1, outputCurrency);
    inputOneToOne.textContent = "1 " + inputCurrency + " = " + OneToOneInputConverter.toFixed(4) + "  " + outputCurrency;
}