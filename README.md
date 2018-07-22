# github-interview-project

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

> Show the top 100 GitHub Projects, and their top contributor

## Tech Stack

| frontend          |             |
| ------------------|-------------|
| view library      | [react](https://reactjs.org/) |
| boilerplate       | [generator-refresh](https://github.com/au-re/generator-refresh)|
| documentation     | [storybook](https://github.com/storybooks/storybook)

## Extra Tools
Yeoman - http://yeoman.io/generators/

Used to get basic project scaffolding including storybook and test - it turned out I don't really like how this project does styling - but due to time constraints I worked with it.

Cryptr - https://www.npmjs.com/package/cryptr

Used for encryption of my oauth keys, because I would want to do that in real life. 
In this case, I want this to run on github pages - so the decryption key is in the app. 
In real life, I would want to store this in a DB and not have it be available to the whole world. 
I made a throwaway github account, because I needed to be authenticated to make bunches of calls.

Font-Awesome - https://www.npmjs.com/package/font-awesome

I like icons

Octokit/rest - https://github.com/octokit/rest.js

Wrapper for the github API. I would have used this in real life, so I'm also using it here. 
Reinventing the wheel is a waste of time.


## Note
Much of the following text comes from the original Yeoman readme. 
It is one of the reasons I like using a generator, as it makes things pretty/simple/happy. 
I had never used this generator before, so there was a tiny learning curve there, but it was an enjoyable challenge. 

## Requirements

You will need the following software installed on your machine:

- [node](https://nodejs.org/en/)

## Getting started

Navigate to the root of the project and install the dependencies:

```sh
cd github-interview-project
npm install
```

```sh
npm run start
```

OR

```sh
yarn start
```

## Scripts

A set of scripts are provided for you to test, build and analyze the project.

### Storybook

With storybook you can view the components you have created in isolation. To view them, simply run:

```sh
npm run storybook
```

To include a component to the storybook, simply add a `<componentName>.stories.js` file in your
component folder.

### Test

You can run all tests in the project with the following command:

```sh
npm run test
```

You can also generate a website with information on the code coverage with:

```sh
npm run test -- --coverage
```

This will generate a website in the folder `coverage`. You can launch it with any server of your
choice, for example [serve](https://www.npmjs.com/package/serve).

```sh
npm i -g serve && serve coverage
```

### Build

You can build a production ready version of the website by running:

```sh
npm run build
```

This will create a build folder with the minimized and transpiled JS.

### Dependency map

You can generate a map of all dependencies, this can be very useful when trying to identify a
library causing bloat to the application. After building your application you can generate a map,
by running:

```sh
npm run analyze
```

This will look into your `build` folder and open an interactive map of the dependencies in your
browser.

## License

[MIT](https://github.com/au-re/fresh-start/blob/master/LICENSE)
