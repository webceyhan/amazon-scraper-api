<!-- AUTOMATION BADGES -->

[![CodeQL](https://github.com/webceyhan/amazon-scraper-api/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/webceyhan/amazon-scraper-api/actions/workflows/codeql-analysis.yml)
[![Deploy to Heroku](https://github.com/webceyhan/amazon-scraper-api/actions/workflows/heroku.yml/badge.svg)](https://github.com/webceyhan/amazon-scraper-api/actions/workflows/heroku.yml)

<!-- LOGO (OPTIONAL) -->

<!-- ![Logo](./logo.png) -->

 <!-- HEADER ///////////////////////////////////////////////////////////// -->

# Amazon Ecommerce ScraperAPI

Learn how to Build and Deploy your own fully custom API with Node and Express from scratch.
In this tutorial, there is no need for a backend database as all the data was fetched from Amazon Ecommerce website via ScraperAPI.
Once you've learned that, you'll know how to put it on a platform called RapidAPI, set the pricing tiers, start selling, and finally, build a business around it.

[View Demo](https://webceyhan-amazon-scraper-api.herokuapp.com) |
[Report Issue](https://github.com/webceyhan/amazon-scraper-api/issues) |
[Request Feature](https://github.com/webceyhan/amazon-scraper-api/pulls) |
[@webceyhan](https://twitter.com/webceyhan)

<br>
<!-- REQUIREMENTS /////////////////////////////////////////////////////// -->

## Requirements

You need to install the [Node.js](https://nodejs.dev/)
and `npm` package manager first.

Create an account on [ScraperAPI](https://www.scraperapi.com/) to obtain your API key.

> Recommended IDE:
> [VSCode](https://code.visualstudio.com/)

<br>
<!-- INSTALLATION //////////////////////////////////////////////////////// -->

## Installation

1. Clone the repository.
    ```sh
    git clone https://github.com/webceyhan/amazon-scraper-api.git
    ```
2. Get inside the cloned project folder.
    ```sh
    cd amazon-scraper-api
    ```
3. Install NPM packages.
    ```sh
    npm install
    ```
4. Rename .env.sample to .env and fill in your API key.
    ```sh
    API_KEY=put your ScraperAPI key here!
    ```

<br>
<!-- USAGE /////////////////////////////////////////////////////////////// -->

## Usage

You can use following commands to do various task with the project.

```sh
npm start           # run application
npm run dev         # start development
```

> Take a look at the other scripts in [`package.json`](./package.json)

<br>
<!-- DEVELOPMENT ///////////////////////////////////////////////////////// -->

## Development

Start the development to watch changes while you code.

```sh
npm run dev
```

<br>
<!-- DEPLOYMENT ////////////////////////////////////////////////////////// -->

## Deployment (Heroku)

A GitHub Action will automatically deploy the project to Heroku on every push.

> See the details in [.github/workflows/heroku.yml](./.github/workflows/heroku.yml)

1. Create an [Heroku](https://www.heroku.com/home) account.

2. Install the `heroku-cli` as shown in the [guide](https://devcenter.heroku.com/articles/heroku-cli#install-the-heroku-cli).

3. Create a new Heroku app inside the project folder to bind it.

    ```sh
    heroku create
    ```

    > This will create a new application on Heroku server and bind it to your project by adding a remote `heroku` upstream to your git repository.

4. Set the following secrets on your GitHub repository:

    ```sh
    HEROKU_API_KEY
    HEROKU_APP_NAME
    HEROKU_EMAIL
    ```
<br>
<!-- REFERENCES ////////////////////////////////////////////////////////// -->

## References

-   [Node.js](https://nodejs.dev/)
-   [Express](https://expressjs.com/)
-   [ScraperAPI](https://www.scraperapi.com/)
-   [GitHub Actions](https://docs.github.com/en/actions)
    -   [Heroku](https://www.heroku.com)
    -   [heroku-deploy](https://github.com/akhileshns/heroku-deploy)
-   [Youtube Tutorial](https://www.youtube.com/watch?v=be9sHQ7xqo0&t=419s)
-   Published and Monitized on [RapidAPI](https://rapidapi.com/)
