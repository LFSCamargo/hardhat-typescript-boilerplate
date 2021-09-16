# Hardhat typescript boilerplate

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts.

## Local env setup

1. Install [Ganache](https://www.trufflesuite.com/ganache)
2. Setup a new project select an account from the accounts that are listed and copy a private key and the server url and place it on the env

    <img src="https://s9.gifyu.com/images/Ganache.md.gif" width="400px">

3. After that change the local env private key and api url
like this:
```
PRIVATE_KEY = a494e40ee032ead82210bebd8d0b50c432058a83f4e3b40bc441ab82116d6e90

API_URL = HTTP://127.0.0.1:7545
```

4. After compile the project running `yarn compile`

5. Afterwards run the tests `yarn test`

## Check other hardhat commands

```shell
npx hardhat accounts
npx hardhat balance --account private_key_here
npx hardhat compile
npx hardhat clean
npx hardhat test
```