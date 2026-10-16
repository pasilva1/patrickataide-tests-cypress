# language: pt
Funcionalidade: Portfolio Patrick Ataíde - Cypress BDD
  Como usuário
  Quero validar as funcionalidades do site
  Para garantir a qualidade

  @smoke
  Cenário: FT-001 Carregamento da página inicial
    Dado que acesso o site
    Então o título da página deve conter "Patrick Ataíde"

  Cenário: FT-003 Seção de Tecnologias
    Dado que acesso o site
    Então deve exibir as tecnologias "Playwright" e "Cypress"

  Cenário: FT-004 Informações de contato
    Dado que acesso o site
    Então o e-mail "patrickataide.ti@gmail.com" deve estar visível
