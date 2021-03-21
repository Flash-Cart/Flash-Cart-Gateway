# Flash Cart Gateway

## Definição

O Flash Cart Gateway será o sistema Whitelabel que deverá ser implementado para comunicação entre o sistema Flash Cart e o sistema de gestão de estoque do mercado.

O sistema deverá ser implementado possuíndo a seguinte tabela de comunicação:

| Endpoint  | Método  | Parâmetros | Tipo     |
|-----------|---------|------------|----------|
| /products | GET     | ids        | [String] |
