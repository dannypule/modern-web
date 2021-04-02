# end-to-end tests

## Setup

Navigated to the `e2e` folder and install the NPM packages

```sh
yarn install
```

## Requirements

- App should be running locally and accessible at `http:localhost:3002`

## Running the tests locally

Open the Cypress UI:

```sh
npm run cypress:open
```

Click on any test to run it

## Running the tests in a CI environment

```sh
npm run cypress:run
```

## View the views

Visit `e2e/cypress/videos` to view videos of the tests
