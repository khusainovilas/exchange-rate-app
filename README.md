# 💱 Currency Converter

Project: Simple JavaScript currency converter using API.

## 🚀 Features

- Conversion of popular currencies (USD, EUR, RUB, etc.)
- Automatic update on input change
- Reverse currency swap
- Support for 1:1 rate display

## 🛠️ Technologies

- HTML5 / CSS3 / JavaScript
- Fetch API
- Responsive design
- API integration

## 🌍 How It Works

Client inputs:
- Source currency
- Target currency
- Amount

The system then:
- Makes a request to a secured Node.js server (where the API key is stored)
- The server forwards the request to [ExchangeRate-API](https://www.exchangerate-api.com/)

## 🖥️ Usage Example

![Application demo](demo.gif)

## 📌 Important Notes

Currently using direct API calls with environment variables for key protection. Future plans include implementing a proxy service for additional security.

---

Author: [@khusainovilas](https://github.com/khusainovilas)