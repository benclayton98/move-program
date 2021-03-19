# Codify Expected Behaviour

#### Intro

You have something like the below perhaps. For more detail see [here](./_examples/a-simple-test-framework)

```js
// test-framework.js
const assertEquals = (val1, val2) => val1 === val2;

module.exports = assertEquals;
```
```js
// spec/evenNumberCounter.spec.js
const assertEquals = require('../test-framework.js')

// --------------------------------------------------
console.log("Testing that [1,2,3,4,5,6] => 3")
// 1. Setup
let input = [1,2,3,4,5,6]
let expectedOutput = 3

// 2. Execute
let actualOutput = countEvenNumbers(input)

// 3. Verify
let result = assertEquals(actualOutput, expectedOutput)
console.log(result)

// plus the other two tests in a similar format
```

Currently in order to run this spec, you have to run the file using `node`:
```sh
$ node spec/evenNumberCounter.spec.js
```

**Try** it yourself - this should throw an error because we **haven't written any source code** yet.

```sh
ReferenceError: countEvenNumbers is not defined
```

---
**NB:** Make sure you're seeing this error before continuing.

---

This will get tedious quickly the more spec files we add, so test frameworks have a file that runs all the specs - a spec runner.

#### Spec Runners

Spec runners need 3 things you might imagine: **test framework**, **test code**, and **source code**. Usually you'll require the source code files in each spec you write - the examples in the directory use this approach.

#### Instructions

- [ ] In your project directory **create a file** that we'll use to run our specs called `specRunner.js`.
- [ ] In this file `require()` any `.spec.js` files
- [ ] In your spec file make sure you `require()` your test framework. Now also `require()` your countEvenNumbers module that you haven't created yet in `countEvenNumbers.js`.
- [ ] `node specRunner.js` to use your `specRunner.js` to run all your tests  - you should see an error that it can't load the file (because you haven't created your source code file)
- [ ] **Only Now** should you create the source code file, write source code -your program logic-, export your module, and use your `specRunner.js` to run your tests!

#### Further Work


Write **methods** and use **callbacks** to clean up your code!

There are lots of way to extend this framework. The options below are only possibilities - if you have ideas go explore them. Extend it as much as you want - add useful failure messages, colour output!

Discuss and share them with your coach and cohort!

How might you get this to work?
```js
test.it("returns 3", function() {
  // 1. Setup
  input = [1,2,3,4,5,6];
  expectedOutput = 3;

  // 2. Execute
  actualOutput = countEvenNumbers(input);

  // 3. Verify
  return test.assertEquals(actualOutput, expectedOutput);
})
```

How might you get this to work? How lovely and readable is this?!

```js
test.it("returns 3", function() {
  // Setup, Execute, Verify
  test.expect(countEvenNumbers([1,2,3,4,5,6])).toEqual(3);
})
```

###### Even further work

* How can you move your test helper code into its own repo?

* How can you allow your next project to access your test library repo?

* How can you write tests for your test library? (!)

* What API should your test library have?

* How will you publish your library? NPM?

[back](./a-simple-test-framework.md) | [top](#learning-objectives) | [next](./practice-makes-perfect.md)
