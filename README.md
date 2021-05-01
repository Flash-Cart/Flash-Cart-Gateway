# Flash Cart Gateway

## 👁 Visão Geral

O Flash Cart Gateway será o sistema Whitelabel que deverá ser implementado para comunicação entre o sistema Flash Cart e o sistema de gestão de estoque do mercado.

## 🏁 Começando

Para executar a aplicação base você deverá iniciar realizando um clone deste repositório em sua máquina.
Em seguida deverá ser realizada a instalação das dependências, dentro da pasta raíz do projeto deverá executar o comando `yarn`.
Para iniciar a aplicação base você deverá executar o comando `yarn start`.

### 📝 Aplicação base

Para facilitar o desenvolvimento foi criada uma aplicação base que está disponível neste repositório.

#### 🚀 Dependências

- [Yarn](https://yarnpkg.com)
- [ExpressJS](https://expressjs.com)

## ✅ Contrato

| Endpoint  | Método  | Parâmetros | Tipo     |
|-----------|---------|------------|----------|
| /products | GET     | ids        | [String] |
