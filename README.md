# 💱 Câmbio Fácil

Aplicação web desenvolvida para praticar e consolidar conceitos de
**TypeScript**, criando um conversor de moedas integrado a uma API de
cotações.

O **Câmbio Fácil** permite escolher uma moeda de origem, uma moeda de
destino e informar um valor para realizar a conversão. O projeto também
possui um **Radar do Mercado**, que apresenta cotações de moedas
selecionadas em relação ao Real Brasileiro.

## 🚀 Funcionalidades

-   Conversão entre diferentes moedas
-   Seleção de moeda de origem e destino
-   Entrada de valor para conversão em tempo real
-   Exibição das informações da moeda selecionada
-   Radar do Mercado com cotações de moedas selecionadas
-   Consulta de cotações através da API Frankfurter
-   Interface responsiva
-   Lista de moedas organizada através de arquivo JSON

## 🛠️ Tecnologias utilizadas

-   **HTML5**
-   **CSS3**
-   **Tailwind CSS**
-   **TypeScript**
-   **Frankfurter API**
-   **Git / GitHub**
-   **Vercel**

## 🔌 API

As cotações utilizadas pela aplicação são obtidas através da
**Frankfurter API**:

https://api.frankfurter.dev/

Exemplo de consulta:

``` text
https://api.frankfurter.dev/v2/rate/USD/BRL
```

## 📁 Estrutura do projeto

``` text
cambioFacil/
├── src/
│   ├── img/
│   ├── styles/
│   ├── cambio.ts
│   ├── mercado.ts
│   ├── main.ts
│   └── currency.json
├── dist/
├── index.html
├── package.json
├── tsconfig.json
└── README.md
```

## 🧠 Conceitos praticados

Este projeto foi desenvolvido principalmente como uma forma de colocar
em prática conceitos estudados durante o aprendizado de **TypeScript**.

-   Tipagem estática
-   Interfaces
-   Classes
-   Métodos e propriedades
-   Módulos ES
-   Manipulação do DOM
-   Type Guards
-   `async/await`
-   `Promise`
-   `fetch`
-   Consumo de APIs
-   Manipulação de JSON
-   `Promise.all()`
-   Eventos do DOM
-   Manipulação dinâmica de elementos HTML
-   Template strings

## ⚙️ Como executar o projeto

Clone o repositório:

``` bash
git clone https://github.com/veganico98/cambioFacil.git
```

Entre na pasta:

``` bash
cd cambioFacil
```

Instale as dependências:

``` bash
npm install
```

Compile o TypeScript:

``` bash
npm run build
```

Depois, abra o projeto através de um servidor local.

> Como o projeto utiliza módulos JavaScript e requisições `fetch`, é
> recomendado executá-lo através de um servidor local em vez de abrir o
> `index.html` diretamente pelo navegador.

## 🌐 Deploy

O projeto está preparado para deploy utilizando a **Vercel**.

Durante o desenvolvimento, o TypeScript é compilado para JavaScript e os
arquivos gerados ficam no diretório `dist`.

## 🎯 Objetivo

O Câmbio Fácil foi desenvolvido como um projeto de estudo para
consolidar conhecimentos de **TypeScript** através de uma aplicação
prática.

A ideia foi sair de exercícios isolados e aplicar os conceitos
aprendidos em uma aplicação que envolve **consumo de API, manipulação do
DOM, organização de código em classes e módulos e atualização dinâmica
da interface**.

------------------------------------------------------------------------

### 👨‍💻 Desenvolvido por Nicolas

Projeto desenvolvido durante os estudos de desenvolvimento web e
TypeScript.
