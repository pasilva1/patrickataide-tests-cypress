# Testes Automatizados com Cypress - Patrick Ataíde Portfolio

## Objetivo

Projeto de testes funcionais automatizados para o site [https://www.patrickataide.com.br/](https://www.patrickataide.com.br/) utilizando Cypress.

Este repositório faz parte de uma série de projetos de demonstração de ferramentas de teste (Cypress, Playwright, Selenium, Robot Framework e BDD com Cucumber).

## Tecnologias

- [Cypress](https://www.cypress.io/)
- JavaScript
- GitHub Actions (CI/CD)

## Plano de Testes

O plano de testes funcionais está disponível em `plano-testes.csv`.

Cenários cobertos:
- Carregamento da página
- Navegação
- Seção de Tecnologias
- Informações de contato
- Links de projetos
- Botão WhatsApp
- Seções Sobre e Formação
- Acessibilidade (skip link)

## Como executar localmente

### Pré-requisitos

- Node.js 18+
- npm

### Instalação

```bash
npm install
```

### Executar testes

```bash
npx cypress open   # Modo interativo
npx cypress run    # Modo headless
```

## Estrutura do Projeto

```
.
├── cypress/
│   └── e2e/
│       └── portfolio.cy.js
├── cypress.config.js
├── package.json
├── .github/
│   └── workflows/
│       └── cypress.yml
└── README.md
```

## CI/CD

Os testes são executados automaticamente via GitHub Actions em pushes e pull requests para a branch `main`.

## Autor

Patrick Ataíde - [patrickataide.com.br](https://www.patrickataide.com.br/)
