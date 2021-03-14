## Acceptance Criteria

#### Learning Objectives
- Explain what acceptance criteria are
- Explain the problem they help solve

#### Intro
We have this specification:

```
Write a program that you can run in your node repl that can find how many even numbers are in a list of numbers

# Acceptance Criteria
Input => Output
[1,2,3,4,5,6] => 3
[0,1,2] => 2
[1,3,5] => 0
```

What are **Acceptance Criteria**? They define success for those implementing and testing. They can be written in different ways, sometimes very specific and at other times vague.

You know you have completed the initial implementation once you've met the criteria. However, better implementations will sometimes mean defining more criteria, sometimes breaking them down into simpler steps, at other times adding your own steps to help drive development. If you're in doubt about whether your added acceptance criteria are valid, check with the owner of the requirements - in this case usually a coach!

We'll give you requirements and acceptance criteria for the most part, but it will be your job to clarify them or define and refine them from the information you're given.

The great thing about using or defining Acceptance Criteria is that you can quickly convert them into your first tests!

#### Test Framework

You're going to build a simple test framework to help you convert stories into tests.

Below is a type of Acceptance Criteria: it demonstrates what you should be able to do if you have written the required code. Notice that you don't _yet_ have a file named `test-framework.js` or defined a method `assertEquals`. This kind of Acceptance Criteria shows you explicitly what you need to do.

```sh
# from your project directory
> .load test-framework.js
=> true
> assertEquals(1, 1)
=> true
> assertEquals(1, 2)
=> false
```

## Instructions
- [ ] create a new directory for this project
- [ ] create a file for your test framework
- [ ] Write a method that returns a boolean from comparing two values
- [ ] use `node` to test whether the above three commands meet the acceptance criteria
- [ ] Remember to export the function using [CommonJS](https://nodejs.org/docs/latest/api/modules.html)'s `module.exports`



[back](../README.md) | [top](#learning-objectives) | [next](./a-simple-test-framework.md)
