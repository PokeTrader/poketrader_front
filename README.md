# PokeTrader (Frontend)

Frontend para o simulador de trocas de Pokémons. O sistema avalia possíveis trocas entre treinadores, informando se a mesma é justa ou não, a partir do valor de `base experience` de cada Pokémon existente na troca. Os dados de uma simulação podem ser armazenados no sistema, permitindo visualização posterior.

## Acessando o projeto

A aplicação está disponível em [https://felipe-poketrader.herokuapp.com/]() e pode ser acessada tanto pelo computador quanto pelo celular.

## Instalação

É necessário ter o Node.js instalado.

O arquivo `.env.sample` demonstra as variáveis de ambiente do projeto. O mesmo pode servir de base para a criação do `.env.local`, que é ignorado pelo Git e deve conter os valores reais.

- Para instalar as dependências do projeto, executar `npm install`.
- Para rodar o projeto, executar `npm run serve`.
- Para rodar os testes do projeto, executar `npm run test:unit`.
