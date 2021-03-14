## A Simple Test Framework

#### Learning Objectives
- Explain what a test framework is
- Explain the responsibilities of the framework, test code, source code, and a test runner
- Implement a basic test framework

#### Intro

A test framework needs a few things.
- [ ] the framework (that does the asserting)
- [ ] test code (tests you write using the framework)
- [ ] source code (program behaviour you're codifying)
- [ ] test runner (a way to run the tests)

You probably implemented something like this:

```js
// test-framework.js
const assertEquals = (val1, val2) => val1 === val2;

module.exports = assertEquals;
```

You can now load this file to have access to our `#assertEquals()` method in order to test that two values are equal to each other. This gives us a simple way to write tests for the programs we want to write.

```
Write a program that you can run in node that can find how many numbers are even in a list of numbers

# Acceptance Criteria
Input => Output
[1,2,3,4,5,6] => 3
[0,1,2] => 2
[1,3,5] => 0
```

The next step to write a test for the program we need to implement, based on acceptance criteria. Read the below stages of setting up a test:

```js
// 1. Set up
let input = [1,2,3,4,5,6]
let expectedOutput = 3

// 2. Execute
let actualOutput = countEvenNumbers(input)

// 3. Verify
let result = assertEquals(actualOutput, expectedOutput)
console.log(result)
```

1. **IMAGINE:** This step is important and can be tricky when picking up the TDD mindset: we haven't yet written any source code, and yet we're _imagining what the method is going to look like._ We're saying to ourselves we are going to define a method called `countEvenNumbers` and when we call it with the argument `[1,2,3,4,5,6]` we want it to return `3`.

2. **ORGANISE:** There are [4 phases](https://thoughtbot.com/blog/four-phase-test) to tests. We won't worry about the 4th phase for now. Get into the habit of organising your tests into these phases - some stages may happen together.

What's the difference between specs and tests? You'll commonly see people refer to specs as tests and vice versa. The names are usually interchangeable. The main difference (arguably) is that specifications are tied to expected program behaviour. Tests are more general.


#### Instructions

- [ ] **NB:** don't write any source code yet
- [ ] _Again, do not implement the countEvenNumbers() function yet!_ This will be the **last** thing you do.
- [ ] create a directory to hold your **specs**. Conventionally you'll see this called `spec` or `test` depending on the language.
- [ ] in this directory create a file called `countEvenNumbers.spec.js`
- [ ] at the top of this file require your module that contains your test framework logic and store the export in an appropriately named variable.
- [ ] in this file write a **spec** for each of the three acceptance criteria, organising each test into the three stages of **Setup**, **Execute**, and **Verify**
- [ ] Add descriptive names for each test based on the acceptance criteria, and log the names to the console.

[back](./acceptance-criteria.md) | [top](#learning-objectives) | [next](./codify-expected-behaviour.md)
