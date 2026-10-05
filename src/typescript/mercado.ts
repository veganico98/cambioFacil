interface CambioInfo {
  date: string;
  base: string;
  quote: string;
  rate: number;
}

export default class Mercado {
  moedas = ["USD", "EUR", "GBP", "CAD"];

  async fetchCotacoes(): Promise<CambioInfo[]> {
    const cotacoes = await Promise.all(
      this.moedas.map(async (moeda) => {
        const response = await fetch(
          `https://api.frankfurter.dev/v2/rate/${moeda}/BRL`,
        );
        return (await response.json()) as CambioInfo;
      }),
    );
    return cotacoes;
  }

  async createMercadoCard() {
    const mercadoSection = document.getElementById("gridMercado");

    if (!(mercadoSection instanceof HTMLDivElement)) return;

    const cotacoes = await this.fetchCotacoes();

    cotacoes.forEach((cotacao) => {
      const card = document.createElement("div");

      card.classList.add(
        "flex",
        "items-center",
        "justify-between",
        "border",
        "border-gray-400/70",
        "rounded-xl",
        "px-4",
        "py-3",
      );

      card.innerHTML = `
        <div class="font-manrope">
          <h2 class="text-gray-600">
            ${cotacao.base} / ${cotacao.quote}
          </h2>

          <h1>
            R$ ${cotacao.rate.toFixed(2)}
          </h1>
        </div>
        <span class="text-gray-500 material-symbols-outlined">
            payments
        </span>
      `;

      mercadoSection.appendChild(card);
    });
  }

  init() {
    this.createMercadoCard();
  }
}
