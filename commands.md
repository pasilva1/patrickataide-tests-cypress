# Comandos Essenciais - Cypress + Cucumber

## Instalação completa

```bash
npm install
```

## Rodar todos os testes

```bash
npx cypress run
```

## Rodar em modo interativo

```bash
npx cypress open
```

## Rodar somente um arquivo .feature

```bash
npx cypress run --spec "cypress/e2e/portfolio.feature"
```

## Rodar somente cenários com tag específica

```bash
npx cypress run --env tags="@smoke"
```

## Rodar somente um cenário (pelo nome)

```bash
npx cypress run --spec "cypress/e2e/portfolio.feature" --env grep="FT-001"
```

## Limpar cache / reinstalar

```bash
rm -rf node_modules package-lock.json
npm install
```
