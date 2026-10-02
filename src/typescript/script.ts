import Cambio from "./cambio.js";
import Mercado from "./mercado.js";

const deSelect = document.getElementById("de-select");
const paraSelect = document.getElementById("para-select");
const inputValue = document.getElementById("inputValue");

function validateSelect(select: unknown) {
  if (select instanceof HTMLSelectElement) {
    return select.value;
  } else {
    return "Erro";
  }
}

function multiplicator() {
  if (inputValue instanceof HTMLInputElement) {
    return Number(inputValue.value);
  } else {
    return;
  }
}

inputValue?.addEventListener("input", () => {
  fetchCambio();
});

inputValue?.addEventListener;

let deValue = validateSelect(deSelect);
let paraValue = validateSelect(paraSelect);

deSelect?.addEventListener("change", () => {
  deValue = validateSelect(deSelect);
  const badge = document.getElementById("de-badge");
  const code = document.getElementById("de-code");
  const name = document.getElementById("de-name");

  selectTag(deSelect, badge, code, name);

  fetchCambio();
});

paraSelect?.addEventListener("change", () => {
  paraValue = validateSelect(paraSelect);
  const badge = document.getElementById("para-badge");
  const code = document.getElementById("para-code");
  const name = document.getElementById("para-name");

  selectTag(paraSelect, badge, code, name);

  fetchCambio();
});

async function selectTag(
  tagSelect: HTMLElement,
  badge: unknown,
  name: unknown,
  code: unknown,
) {
  const dataCurrency = await fetchCurrency();

  dataCurrency.forEach((item) => {
    if (
      badge &&
      badge instanceof HTMLElement &&
      name &&
      name instanceof HTMLElement &&
      code &&
      code instanceof HTMLElement &&
      tagSelect instanceof HTMLSelectElement &&
      item.currency === tagSelect.value
    ) {
      badge.innerText = item.currency;
      name.innerText = item.currency;
      code.innerText = item.description;
    }
  });
}

interface CurrencyInfo {
  currency: string;
  description: string;
  icon: string;
}

async function fetchCurrency(): Promise<CurrencyInfo[]> {
  const response = await fetch("./src/currency.json");
  const data: CurrencyInfo[] = await response.json();

  return data;
}

async function fetchCambio() {
  const response = await fetch(
    `https://api.frankfurter.dev/v2/rate/${deValue}/${paraValue}`,
  );
  const data = await response.json();

  const dataCurrency = await fetchCurrency();
  const numberMultiplicator = multiplicator();
  if (numberMultiplicator) {
    handleCambio(data, dataCurrency, numberMultiplicator);
  }
}

function handleCambio(data: any, currency: any, multiplicator: number) {
  const cambio = new Cambio(data, currency, multiplicator);
  cambio.init();
}

function handleMercado() {
  const mercado = new Mercado();
  mercado.init()
}
handleMercado();
