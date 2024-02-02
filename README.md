Esse projeto é um boilerplate para aplicações [Next.js](https://nextjs.org/) criado com [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Muito do que foi adicionado aqui leva em consideração experiências particulares e gostos, mas não deixando de levar em consideração vantagens e desvantagens.

## Começando
Para simplificar decidi seguir com o npm, então para iniciar o projeto, basta executar os seguintes comandos.

Instalar as dependências:

```bash
npm i
```

Iniciar o projeto em modo de desenvolvimento:
```bash
npm run dev
```

Acessar [http://localhost:3000](http://localhost:3000) 

*Obs: Talvez para um projeto final eu fizesse a troca do npm por algum outro gerenciador de pacotes.*

## Next.js

Um dos frameworks front-end/react mais completos e populares até o momento(2024), está em constante desenvolvimento, com ele é possível desenvolver diversos tipos de aplicações e com diferentes necessidades.

Particularmente apenas não iniciaria um projeto utilizando Next.js caso as definições do projeto fossem muito simples e necessitassem apenas de um projeto SPA ou estático.

Ainda estou estudando o Next 14, talvez as escolhas das outras tecnologias feitas até o momento não sejam as melhores para trabalhar se trabalhar com ele.

## TypeScript
O projeto faz uso do [TypeScript](https://www.typescriptlang.org/), que basicamente nos permite trabalhar com tipagens no [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript). Facilita muito a manutenção de um projeto, o seu desenvolvimento e a leitura de código.

## Eslint, Prettier e EditorConfig
Ferramentas auxiliares para a qualidade e padronização de código. 

- [Eslint](https://eslint.org/): Permite identificarmos problemas no código a nível da linguagem. 

- [Prettier](https://prettier.io/): Ajuda a padronizar a formatação do código, coisas como espaçamentos e aspas. 

- [EditorConfig](https://editorconfig.org/): Semelhante ao Prettier, ajuda a padronizar a formatação pra diferentes tipos de editores de código, já inicializando os arquivos na formatação correta.

*Obs: Ainda está faltando algumas configurações do eslint no projeto.*

## Styled-components (!)
[styled-components](https://styled-components.com/) uma biblioteca que adota o conceito de CSS-in-JS, gosto dela por ser simples, muito conhecida, e deixar o código mais limpo do que outras abordagens.

Necessário seguir as [configurações para o Next.js](https://nextjs.org/docs/app/building-your-application/styling/css-in-js#styled-components), dessa forma irá funcionar corretamente com os componentes montados do lado do servidor.

*Obs: Talvez essa não seja uma das melhores alternativas para trabalhar com o Next.js, atualmente é necessário adicionar a todos os arquivos de estilo 'use client', ainda irei estudar o assunto e fazer uma possível troca.*

## Jest
O [Jest](https://jestjs.io/pt-BR/) é dos frameworks de teste mais conhecidos, excelente para os testes unitários, junto da lib [react-testing-library](https://testing-library.com/docs/react-testing-library/intro/) que facilita os testes de componentes react.

Ideal aplicar os testes unitários nas partes que compõem as features mais importantes da aplicação como prioridade, mas se possível ir aplicando ao que estiver sendo desenvolvido, o que acaba ajudando no próprio desenvolvimento.

## API
Para lidar com API's, optei pela lib [react-query](https://tanstack.com/query/v3/), dada sua popularidade e fácil uso. Faz o cache de requisições, diminuindo o seu número ao evitar que uma mesma requisição seja feita de novo, além de facilitar o acesso a esse cache.

Seu uso seria em conjunto com a [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) que está funcionando bem em conjunto com o Next.js.

*Obs: Por motivos de ainda não ter estudado melhor o [Graphql](https://graphql.org/), optei por seguir esse projeto em Rest, porém seria a escolha ao lidar com um projeto que envolva muitos dados, o Graphql irá dar ao projeto uma boa flexibilidade a novas features e necessidades que venham a ter.*

## Gerenciador de estado
É possível que um gerenciador de estado nem seja necessário, por conta disso não irei adicionar nenhum por enquanto.

Caso o projeto siga com Rest e o uso da lib reac-query, adicionaria provavelmente o jotai ao projeto pela sua simplicidade, mas caso alternasse para Graphql, a escolha ficaria pelo [Apollo](https://www.apollographql.com/) que ao mesmo tempo facilita o uso o Graphql.


# Em breve
Assim que possível pretendo adicionar as seguintes libs ao projeto.

- [use-debounce](https://www.npmjs.com/package/use-debounce): Evita que em um campo de busca por exemplo, todo o carácter digitado faça uma request, sendo executada apenas depois de alguns milissegundos que o usuário pare de digitar.

- [react-window](https://github.com/bvaughn/react-window): Ajuda na performance da aplicação ao renderizar inúmeros componentes em uma lista.

- [Cypress](https://www.cypress.io/): é uma ferramenta de testes que cobre muitos tipos de testes. Pretendo adicionar ele mais especificamente para os testes end-to-end, ajudando a cobrir cenários como um todo de forma mais próxima de como a aplicação seria usada por um usuário.

- [Mirage](https://miragejs.com/): nos ajuda a mockarmos as API's do projeto quando executado em modo de desenvolvimento, facilitando a codificação de novas features, não sendo necessário por exemplo que algum endpoint já tenha sido desenvolvido ou esteja em funcionamento para que a aplicação funcione. 
