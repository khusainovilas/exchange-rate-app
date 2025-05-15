// Application entry point and initialization

import { loadData } from './dom.js';
import {
    funcChangeBtn,
    funcInputOutput,
    changeBtn,
    inputMoney,
    inputCurrencySelect,
    outputCurrencySelect,
    funcOneToOne,
} from './event.js';


document.addEventListener('DOMContentLoaded', async () => {
    // Initialize currency data and UI
    await loadData();
    await funcOneToOne();

    inputMoney.addEventListener('input', funcInputOutput);

    inputMoney.addEventListener('keydown', function (e) {
        // Block e, +, - and other invalid characters
        if (['e', 'E', '+', '-'].includes(e.key)) {
            e.preventDefault();
        }
    });

    // Currency swap button handler
    changeBtn.addEventListener('click', () => {
        funcChangeBtn();
        funcInputOutput();
        funcOneToOne();
    });

    inputCurrencySelect.addEventListener('change', () => {
        funcInputOutput();
        funcOneToOne();
    });

    outputCurrencySelect.addEventListener('change', () => {
        funcInputOutput();
        funcOneToOne();
    });
});


