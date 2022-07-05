# Getting Started 

## install dependencies
```bash
$ npm install
```
## start dev server
```bash
$ npm run start
```

## run all test
```bash
$ npm run test-all
```

# Project introduction
## Tech stack
- react
- typescript
- emotion.js as styling solution
- jest as test framework

## Tools
- prettier
- eslint
- husky + commit-lint

## Workflow brief introduction
- Listen on push and pull_request on main and release branch
  - run test and generate coverage report and upload to Codecov
- Listen on push event on release branch
  - deploy to github pages: https://luchenyang3842.github.io/airwallex-challenge/


## TODO
- Monitoring 
- e2e test
