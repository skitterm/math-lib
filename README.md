# math-lib

A set of reusable arithmetic functions. All functions handle numbers in decimal, binary, octal, and hexidecimal formats, returning the result in decimal form.

## Basic Usage

### Setup

1. Clone this repository
1. Import the desired function

```javascript
import { add } from "directory-where-this-project-is-added/";

const sum = add(1, 2);
```

## Tests

Unit tests were created leveraging Eric Elliot's [`riteway`](https://github.com/ericelliott/riteway) test environment. To run the tests, run `npm run test`. Alternatively, run `npm run watch` to have the tests run each time a change to the JavaScript files occurs.

## Reusability Measures

The functions each verify that a valid number (argument with JavaScript `number` type) is passed for each argument. They also handle a wide variety of number formats -- decimal, binary, octal, and hexidecimal.
