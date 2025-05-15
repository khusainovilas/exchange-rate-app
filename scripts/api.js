// Currency API Service
import { API_CONFIG } from './config.js';
const API_URL = `${API_CONFIG.BASE_URL}/${API_CONFIG.KEY}/latest/USD`;

let currencyData = null;

export const popularCurrencies = {
    "USD": "US Dollar",
    "EUR": "Euro",
    "RUB": "Russian Ruble",
    "GBP": "British Pound Sterling",
    "JPY": "Japanese Yen",
    "CNY": "Chinese Yuan",
    "CHF": "Swiss Franc",
    "AUD": "Australian Dollar",
    "CAD": "Canadian Dollar",
    "KRW": "South Korean Won",
    "INR": "Indian Rupee",
    "BRL": "Brazilian Real",
    "TRY": "Turkish Lira",
    "ZAR": "South African Rand",
    "AED": "UAE Dirham"
};

// Fetches currency data from API
export async function loadCurrencyData() {
    if (currencyData !== null) return;
    // Fetch currency exchange rates
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        currencyData = data["conversion_rates"];
    } catch (error) {
        console.error("Currency data load error:", error);
        throw error;
    }
}

// Returns cached currency data
export function getCurrencyData() {
    return currencyData;
}

