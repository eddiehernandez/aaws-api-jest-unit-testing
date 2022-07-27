# aws-api-jest-unit-testing

This template demonstrates how to run Jest integration and unit tests on a simple Serverless Framework Typescript project with AWS API Gateway and Lambda.

## Setup

### Installing Jest
+ Type the following:

  ```bash
  npm i -D jest ts-jest @types/jest
  ```

+ Add to package.json scripts ```"test":"jest"```

+ Create a test folder in root

+ Create a Jest config file ```npx ts-jest config:init```

+ Add the following to Jest config file
  ```json
  /** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
  module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    roots: [
      "./tests/"
    ]
  };
  ```


### Creating Jest tests
+ Create test files in tests folder with test in filename.  

  For example:
  If you have ```src/handlers/mainHandler.ts``` then you should have a corresponding
  ```tests/handlers/mainHandler.test.ts```


### Running tests
Type: ``` npm test ```


