const countEvenNumbers = require('../src/countEvenNumbers.js');
const assertEquals = require('../test-framework.js');

let input, expectedOutput, actualOutput, result;
// --------------------------------------------------
console.log("Testing that [1,2,3,4,5,6] => 3");
// 1. Setup
input = [1,2,3,4,5,6];
expectedOutput = 3;

// 2. Execute
actualOutput = countEvenNumbers(input);

// 3. Verify
result = assertEquals(actualOutput, expectedOutput);
console.log(result);

// --------------------------------------------------
console.log("Testing that [0,1,2] => 2");
// 1. Setup
input = [0,1,2];
expectedOutput = 2;

// 2. Execute
actualOutput = countEvenNumbers(input);

// 3. Verify
result = assertEquals(actualOutput, expectedOutput);
console.log(result);

// --------------------------------------------------
console.log("Testing that [1,3,5] => 0");
// 1. Setup
input = [1,3,5];
expectedOutput = 0;

// 2. Execute
actualOutput = countEvenNumbers(input);

// 3. Verify
result = assertEquals(actualOutput, expectedOutput);
console.log(result);
