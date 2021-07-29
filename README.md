<h1 align="center">
    <a href="https://devriseweek.sevencoders.com.br/" target="_blank">
      <img alt="Logo Star Wars Wiki" title="#sevenapps" src=".github/StarWarsWikiLogo.png" width="250px" />
    </a>
</h1>
<h1 align="center">
    <a href="https://devriseweek.sevencoders.com.br/" target="_blank">
      <img alt="Logo DevRise Week" title="#sevenapps" src=".github/DevRiseWeekLogo.png" width="250px" />
    </a>
</h1>

<h4 align="center">
  🚀 Star Wars Wiki - Challenge
</h4>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/WallysonGalvao/devriseweek-starwarswiki">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/WallysonGalvao/devriseweek-starwarswiki">

  <a href="https://github.com/WallysonGalvao/devriseweek-starwarswiki/commits/main">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/WallysonGalvao/devriseweek-starwarswiki">
  </a>

  <a href="https://github.com/WallysonGalvao/devriseweek-starwarswiki/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/WallysonGalvao/devriseweek-starwarswiki">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
</p>

<p align="center">
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-desafio">Desafio</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-funcionalidades">Funcionalidades</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-executando">Executando</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>
<br>

## 💻 Projeto

Esse projeto foi desenvolvido em duas partes, a primeira durante a DevRise Week promovida pela [SevenApps](http://sevenapps.tech/). A segunda parte foi desenvolvida como parte de um desafio feito no Discord pelo @GabrielRangel. Trata-se de uma Wikipédia para o universo de Star Wars.

- [Discord](https://discord.gg/hMxfCF4Hvk)
- [Instagram](https://www.instagram.com/sevenapps.br/)

## :pencil: Desafio

<h1 align="center">
    <a href="https://devriseweek.sevencoders.com.br/" target="_blank">
      <img alt="Logo Star Wars Wiki" title="#sevenapps" src=".github/challenge.png" width="500px" />
    </a>
</h1>

Desafio pra quem acompanhou ou tá acompanhando agora as aulas da DevRiseWeek! É simples: quero ver vocês com o aplicativo pronto e, ainda, trazendo alguma melhoria ou nova usabilidade.

A proposta é ver vocês colocando a mão na massa entre hoje e sexta-feira agora (dia 30) até 23h...

Vocês devem encaminhar tudo pra mim (Gabriel) no privado aqui no Discord. Além disso, postar o resultado do seu app no LinkedIn e/ou Instagram e me marcar.

Na segunda-feira vamos divulgar o ganhador.

O primeiro lugar ganha um acesso vitalício ao AppCoders.

Qualquer dúvida sobre o desafio deve ser discutida no canal #DesafioDevRise e é lá que vamos divulgar os ganhadores.

Tá esperando o que? Bora lá codar de verdade e ainda concorrer a um acesso vitalício e gratuito ao AppCoders?

Que a força esteja com vocês.:evillightsaber:

Linkedin Gabriel: https://www.linkedin.com/in/gabrielrangelavila/

Instagram Gabriel:
https://www.instagram.com/gabriel.rangel7/

## :iphone: Funcionalidades

Foram desenvolvidas/implementadas as seguintes funcionalodades para compor o desafio:

**1 - Home Screen:** adicionado seções para planetas, espécies, naves e veículos do universo de Star Wars, toda a parte de requisição a API foi desenvolvida, porém não existe endpoint para retornar as requisições, aguardando a DevRise Week Beckend :sunglasses:

**2 - Detail Screen:**

- 2.1 - adicionado um botão para compartilhamento, o usuário pode compartilhar filmes ou personagens com outras aplicações como Whatsapp, Twitter e etc.
- 2.2 - adicionado uma seção para informar as plataformas que possuem o filme disponível para assistir, a requisição é feita via axios na RapidAPI.

**3 - Theme Screen:** adicionado uma tela para escolha do tema da aplicação, essa tela tem disponível alguns símbolos do universo Star Wars, cada símbolo possuí uma cor que ao ser escolhia muda a cor de alguns detalhes da aplicação como a cor do ícone e texto do menu, esse gerenciamento é feito via Zustand e AsyncStorage.

**4 - Splash Screen:** aqui foi adicionado uma animação com Lottie, tanto na SplashScreen como o carregamento da imagem da Home são feitas via arquivos json do Lottie, a cor da imagem é escolhida via tema da aplicação, ou seja, de acordo com o tema selecionado a cor no json também é mudado, tudo feito de forma dinâmica.

## 🎨 Layout

<h1 align="center">
      <img alt="Logo Star Wars Wiki" title="#sevenapps" src=".github/mockup1.png" width="400px" />
      <img alt="Logo Star Wars Wiki" title="#sevenapps" src=".github/mockup2.png" width="400px" />
</h1>

Você pode encontrar o layout nesse link do [Figma](https://www.figma.com/file/FcJqDIFJpy43Zik4QhoJ39/DevRiseWeek---StarWars?node-id=31%3A27)

## :rocket: Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Typescript](https://www.typescriptlang.org/)
- [Styled-components](https://styled-components.com/)
- [Lottie](https://lottiefiles.com/)
- [Zustand](https://github.com/pmndrs/zustand)

\* Para mais detalhes, veja o **[package.json](./package.json)**

## :notebook: Executando

### Opcional

Esse projeto possui integração com a RapidAPI, para que funcione é preciso criar na raiz do projeto um arquivo .env (você pode copiar o arquivo .env.example e renomear), feito isso é preciso preencher a chave XRAPIDAPIKEY com sua key da RapiAPI.

Nesse link você encontra como conseguir a key: [RapidAPI KEY](https://docs.rapidapi.com/docs/keys).

```bash
# Clone este repositório
$ git clone https://github.com/WallysonGalvao/devriseweek-starwarswiki.git
# Acesse a pasta do projeto no seu terminal/cmd
$ cd devriseweek-starwarswiki
# Instale as dependências
$ yarn install
# Instale as dependências no ios
$ cd ios & pod install
# Execute a aplicação
$ yarn android ou yarn ios
```

---

Feito com horas em frente ao :computer: por [Wallyson Galvão](https://www.linkedin.com/in/wallyson-galvao/)
