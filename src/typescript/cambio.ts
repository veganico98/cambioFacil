interface CambioInfo {
  date: string;
  base: string;
  quote: string;
  rate: number;
}

interface CurrencyInfo {
  currency: string;
  description: string;
  icon: string;
}

export default class Cambio {
  data: CambioInfo;
  currency: CurrencyInfo[];
  multiplicator: number;

  constructor(
    data: CambioInfo,
    currency: CurrencyInfo[],
    multiplicator: number,
  ) {
    this.data = data;
    this.currency = currency;
    this.multiplicator = multiplicator;
  }

  conversion() {
    let icon = "";
    this.currency.forEach((item) => {
      if (item.currency === this.data.quote) {
        icon = item.icon;
      }
    });

    const spanConversion = document.getElementById("conversion");
    if (spanConversion && spanConversion instanceof HTMLSpanElement) {
      let convert = this.data.rate * this.multiplicator;
      spanConversion.innerText = `${icon} ${convert.toFixed(2)}`;
    } else {
      return;
    }
  }

  quoteTag() {
    const spanQuote = document.getElementById("quote");
    if (spanQuote && spanQuote instanceof HTMLSpanElement) {
      spanQuote.classList.remove("hidden");
      spanQuote.innerText = `${this.data.quote}`;
    } else {
      return;
    }
  }

  showComparison() {
    const comparison = document.getElementById("comparison");
    if(comparison && comparison instanceof HTMLParagraphElement){
      comparison.innerText = `1 ${this.data.base} = ${this.data.rate} ${this.data.quote}`
    }
  }

  show() {
    // console.log(this.data);
    // console.log(this.data.base);
  }

  init() {
    this.show();
    this.quoteTag();
    this.showComparison();
    this.conversion();
  }
}
