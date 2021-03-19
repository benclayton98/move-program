# Coupling

> a loosely coupled system is one in which each of its components has, or makes use of, little or no knowledge of the definitions of other separate components.


### Learning Objectives
- Explain what coupling is
- Refactor code to go from tight coupling to loose coupling.

### To run tests

```sh
$ node specRunner.js
# or
$ npm test
```

### To lint code

```sh
# eg: linting src code
$ npx eslint src
```


### Intro

> An example of tight coupling occurs when a dependent class contains a pointer directly to a concrete class which provides the required behavior. The dependency cannot be substituted, or its "signature" changed, without requiring a change to the dependent class. Loose coupling occurs when the dependent class contains a pointer only to an interface, which can then be implemented by one or many concrete classes.

Consider the following example.

```js
class Wallet {
  constructor() {
    this.cashBalance = new Balance(100);
    this.cards = [];
  }

  take(amount) {
    this.cashBalance.subtract(amount);
    return this.cashBalance.total();
  }
}
// tightly coupled to current implementation of Balance class
```

```js
class Wallet {
  constructor(cashBalance) {
    this.cashBalance = cashBalance
    this.cards = []
  }
  // ...
}

let wallet1 = new Wallet(new Balance(10000))
let wallet2 = new Wallet(new Balance(500))
```

```js
class Wallet {
  constructor(cashBalance = new Balance(50)) {
    this.cashBalance = cashBalance
    this.cards = []
  }
  // ...
}

let wallet;
wallet = new Wallet()
// or
wallet = new Wallet(new Balance(10000))
```

## Instructions

- [ ] `npm install` the dependencies for this project
- [ ] Refactor the `move` program in `src/move.js` to reduce the coupling - the tests should pass once you've implemented it.
- [ ] Then consider how to decouple your tests from the classes used.

### Further work
 - [ ] Decouple the tests for the `Wallet` and `Balance` example - isolate the subject under test in the wallet spec.
