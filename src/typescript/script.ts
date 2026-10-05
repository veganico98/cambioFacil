import Cambio from "./cambio.js";
import Mercado from "./mercado.js";

const deSelect = document.getElementById("de-select");
const paraSelect = document.getElementById("para-select");
const inputValue = document.getElementById("inputValue");
const dataAtualizada = document.getElementById("dataAtualizada");
const dataAtualizadaFooter = document.getElementById("dataAtualizadaFooter");

function valueSelect(select: unknown) {
  if (select && select instanceof HTMLSelectElement) {
    return select.value;
  } else {
    return;
  }
}

let deValue = valueSelect(deSelect);
let paraValue = valueSelect(paraSelect);

function multiplicator() {
  if (inputValue instanceof HTMLInputElement) {
    return Number(inputValue.value);
  } else {
    return;
  }
}

inputValue?.addEventListener("input", () => {
  handleData();
});

inputValue?.addEventListener;

deSelect?.addEventListener("change", () => {
  deValue = valueSelect(deSelect);
  const badge = document.getElementById("de-badge");
  const code = document.getElementById("de-code");
  const name = document.getElementById("de-name");
  selectTag(deSelect, badge, code, name);
  handleData();
});

paraSelect?.addEventListener("change", () => {
  paraValue = valueSelect(paraSelect);
  const badge = document.getElementById("para-badge");
  const code = document.getElementById("para-code");
  const name = document.getElementById("para-name");
  selectTag(paraSelect, badge, code, name);
  handleData();
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
  return data;
}

async function handleData() {
  const data = await fetchCambio();
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
  mercado.init();
}
handleMercado();

async function currentsOptions(select: HTMLSelectElement) {
  const data = await fetchCurrency();

  data.forEach((item) => {
    const options = document.createElement("option");

    options.classList.add("text-black");
    options.value = item.currency;
    options.textContent = `${item.currency} — ${item.description}`;

    select.appendChild(options);
  });
}

async function date() {
  const data = await fetchCambio();
  const [ano, mes, dia] = data.date.split("-");
  const dataFormatada = `${dia}/${mes}/${ano}`;

  if (
    dataAtualizada &&
    dataAtualizada instanceof HTMLElement &&
    dataAtualizadaFooter &&
    dataAtualizadaFooter instanceof HTMLParagraphElement
  ) {
    dataAtualizada.innerText = dataFormatada;
    dataAtualizadaFooter.innerText = `Última atualização: hoje, ${dataFormatada} BRT`;
  }
}

async function options() {
  if (
    !(deSelect instanceof HTMLSelectElement) ||
    !(paraSelect instanceof HTMLSelectElement)
  ) {
    return;
  }

  await currentsOptions(deSelect);
  await currentsOptions(paraSelect);

  deValue = valueSelect(deSelect);
  paraValue = valueSelect(paraSelect);

  await date();
}

options();
