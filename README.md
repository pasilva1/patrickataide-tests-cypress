# Testes Automatizados com Cypress + Cucumber/Gherkin - Patrick Ataíde Portfolio

## Objetivo

Projeto de testes funcionais automatizados (incluindo BDD com Gherkin) para o site [https://www.patrickataide.com.br/](https://www.patrickataide.com.br/) utilizando Cypress + cypress-cucumber-preprocessor.

## Tecnologias

- [Cypress](https://www.cypress.io/)
- [@badeball/cypress-cucumber-preprocessor](https://github.com/badeball/cypress-cucumber-preprocessor) (BDD/Gherkin)
- JavaScript
- GitHub Actions (CI/CD)

## Plano de Testes

O plano de testes funcionais está disponível em `plano-testes.csv`.
Arquivos Gherkin: `cypress/e2e/*.feature`

## Como executar localmente

```bash
npm install
npx cypress open   # ou npx cypress run
```

## CI/CD

Os testes (incluindo BDD) são executados automaticamente via GitHub Actions.

## Autor

Patrick Ataíde - [patrickataide.com.br](https://www.patrickataide.com.br/)
