const currencies = {
    USD: 'United States Dollar',
    AUD: 'Australian Dollar',
    BGN: 'Bulgarian Lev',
    BRL: 'Brazilian Real',
    CAD: 'Canadian Dollar',
    CHF: 'Swiss Franc',
    CNY: 'Chinese Yuan',
    CZK: 'Czech Republic Koruna',
    DKK: 'Danish Krone',
    GBP: 'British Pound Sterling',
    HKD: 'Hong Kong Dollar',
    HRK: 'Croatian Kuna',
    HUF: 'Hungarian Forint',
    IDR: 'Indonesian Rupiah',
    ILS: 'Israeli New Sheqel',
    INR: 'Indian Rupee',
    JPY: 'Japanese Yen',
    KRW: 'South Korean Won',
    MXN: 'Mexican Peso',
    MYR: 'Malaysian Ringgit',
    NOK: 'Norwegian Krone',
    NZD: 'New Zealand Dollar',
    PHP: 'Philippine Peso',
    PLN: 'Polish Zloty',
    RON: 'Romanian Leu',
    RUB: 'Russian Ruble',
    SEK: 'Swedish Krona',
    SGD: 'Singapore Dollar',
    THB: 'Thai Baht',
    TRY: 'Turkish Lira',
    ZAR: 'South African Rand',
    EUR: 'Euro',
};

const optionsHTML = generateOptions(currencies);
console.log(optionsHTML);

function generateOptions(options) {
    return Object.entries(options);
}

function generateOptions(options) {
    return Object.entries(options).map((arr) => {
        console.log(arr);
    });
}
function generateOptions(options) {
    return Object.entries(options).map(([currencyCode, currencyName]) => {
        console.log(currencyCode, currencyName);
    });
}
function generateOptions(options) {
    return Object.entries(options).map(([currencyCode, currencyName]) => {
        return `<option value="${currencyCode}">${currencyCode} - ${currencyName}</option>`;
    });
}
function generateOptions(options) {
    return Object.entries(options).map(([currencyCode, currencyName]) =>
        `<option value=${currencyCode}">${currencyCode}-${currencyName}</option> `).join("");
}

const fromSelect = document.querySelector('[name="from_currency"]');
const fromInput = document.querySelector('[name="from_amount"]');

const optionsHTML = generateOptions(currencies);
// populate the options elements
fromSelect.innerHTML = optionsHTML;
toSelect.innerHTML = optionsHTML;

const endpoint = "https://api.exchangeratesapi.io/latest";

async function fetchRates(base = "USD") {
    const res = await fetch(`${endpoint}?base=${base}`);
    const rates = await res.json();
    console.log(rates);
}
async function fetchRates(base = "USD") {
    const res = await fetch(`${endpoint}?base=${base}`);
    const rates = await res.json();
    return rates;
}

function convert(amount, from, to) {
    // first check if we even have the rates to convert from that currency
}

const ratesByBase = {
    CAD: {
        CAD: 1,
        HKD: 6.63234
    },
    AUD: {

    }
};
function convert(amount, from, to) {
    // first check if we even have the rates to convert from that currency
    if (!ratesByBase[from]) {
        console.log(`Oh no! we don't have ${from} to convert it ${to}, so let's go get it!`);
    }
}
async function convert(amount, from, to) {
    // first check if we even have the rates to convert from that currency
    if (!ratesByBase[from]) {
        console.log(`Oh no! we don't have ${from} to convert it ${to}, so let's go get it!`);
        const rates = await fetchRates(from);
        console.log(rates);
        // store them for next time
        ratesByBase[from] = rates;
    }
}
function convert(amount, from, to) {
    // first check if we even have the rates to convert from that currency
    if (!ratesByBase[from]) {
        console.log(`Oh no! we don't have ${from} to convert it ${to}, so let's go get it!`);
        const rates = await fetchRates(from);
        console.log(rates);
        // store them for next time
        ratesByBase[from] = rates;
    }
    const rate = ratesByBase[from].rates[to];
}
const rate = ratesByBase[from].rates[to];
function convert(amount, from, to) {
    // first check if we even have the rates to convert from that currency
    if (!ratesByBase[from]) {
        console.log(`Oh no! we don't have ${from} to convert it ${to}, so let's go get it!`);
        const rates = await fetchRates(from);
        console.log(rates);
        // store them for next time
        ratesByBase[from] = rates;
    }
    const rate = ratesByBase[from].rates[to];
    const convertedAmount = rate * amount;
    console.log(`${amount} ${from} is ${convertedAmount} in ${to}`);
    return convertedAmount;
}
const form = document.querySelector('.app form');
form.addEventListener('input', handleInput);
function handleInput(e) {
    console.log(e.target);
    console.log(e.currentTarget);
}
const fromSelect = document.querySelector('[name="from_currency"]');
const toSelect = document.querySelector('[name="to_currency"]');
const fromInput = document.querySelector('[name="from_amount"]');

async function handleInput(e) {
    const rawAmount = await convert(
        fromInput.value,
        fromSelect.value,
        toSelect.value
    );
    console.log(rawAmount);
}
const fromSelect = document.querySelector('[name="from_currency"]');
const toSelect = document.querySelector('[name="to_currency"]');
const fromInput = document.querySelector('[name="from_amount"]');
const toEl = document.querySelector('.to_amount');
async function handleInput(e) {
    const rawAmount = await convert(
        fromInput.value,
        fromSelect.value,
        toSelect.value
    );
    toEl.textContent = rawAmount;
}
function formatCurrency(amount, currency) {
    return Intl.NumberFormat({
        style: 'currency',
        currency
    }).format(amount);
}
async function handleInput(e) {
    const rawAmount = await convert(
        fromInput.value,
        fromSelect.value,
        toSelect.value
    );
    toEl.textContent = formatCurrency(rawAmount, toSelect.value);
}
function formatCurrency(amount, currency) {
    return Intl.NumberFormat("en-US", {
        style: 'currency',
        currency
    }).format(amount);
}