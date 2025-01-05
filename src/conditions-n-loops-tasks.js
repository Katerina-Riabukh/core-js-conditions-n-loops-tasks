/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  if (number < 0) {
    return false;
  }
  return true;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  const x = a > b ? a : b;
  return x > c ? x : c;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * 
 * 
 * Vertical or Horizontal Check:

 * queen.x === king.x: This checks if they are on the same column.
 * queen.y === king.y: This checks if they are on the same row.
 * Diagonal Check:
 * 
 * Math.abs(queen.x - king.x) === Math.abs(queen.y - king.y): This checks if they are on the same diagonal.
 * Result:
 * 
 * If either condition is true, the queen can capture the king, so we return true. Otherwise, return false.
 */
function canQueenCaptureKing(queen, king) {
  const isVerticalOrHorizontal = queen.x === king.x || queen.y === king.y;
  const isDiagonal = Math.abs(queen.x - king.x) === Math.abs(queen.y - king.y);

  return isVerticalOrHorizontal || isDiagonal;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  const isValidTriangle =
    a > 0 && b > 0 && c > 0 && a + b > c && a + c > b && b + c > a;

  const hasEqualSides = a === b || b === c || a === c;

  return isValidTriangle && hasEqualSides;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 *
 * Mapping:
 * Define Roman numeral symbols (X, IX, V, IV, I) and their values (10, 9, 5, 4, 1).
 * Iterate through the mapping:
 * Check if the current number (currentNum) is greater than or equal to the Roman numeral's value.
 * If so, append the numeral to the result string and subtract its value from currentNum.
 * Return the result:
 * Once all the numeral values have been processed, result contains the Roman numeral representation.
 */
function convertToRomanNumerals(num) {
  const romanNumerals = [
    { value: 10, numeral: 'X' },
    { value: 9, numeral: 'IX' },
    { value: 5, numeral: 'V' },
    { value: 4, numeral: 'IV' },
    { value: 1, numeral: 'I' },
  ];

  let result = '';
  let currentNum = num;

  for (let i = 0; i < romanNumerals.length; i += 1) {
    while (currentNum >= romanNumerals[i].value) {
      result += romanNumerals[i].numeral;
      currentNum -= romanNumerals[i].value;
    }
  }

  return result;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let result = '';

  for (let i = 0; i < numberStr.length; i += 1) {
    const char = numberStr[i];

    switch (char) {
      case '0':
        result += result ? ' zero' : 'zero';
        break;
      case '1':
        result += result ? ' one' : 'one';
        break;
      case '2':
        result += result ? ' two' : 'two';
        break;
      case '3':
        result += result ? ' three' : 'three';
        break;
      case '4':
        result += result ? ' four' : 'four';
        break;
      case '5':
        result += result ? ' five' : 'five';
        break;
      case '6':
        result += result ? ' six' : 'six';
        break;
      case '7':
        result += result ? ' seven' : 'seven';
        break;
      case '8':
        result += result ? ' eight' : 'eight';
        break;
      case '9':
        result += result ? ' nine' : 'nine';
        break;
      case '-':
        result += result ? ' minus' : 'minus';
        break;
      case '.':
      case ',':
        result += result ? ' point' : 'point';
        break;
      default:
        throw new Error('Invalid character in input');
    }
  }

  return result;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 * 
 * Pointers Approach:

 * Use two pointers:
 * left starts at the beginning of the string.
 * right starts at the end of the string.
 * Compare the characters at these positions.
 * Match Check:
 * 
 * If str[left] is not equal to str[right], return false immediately because the string is not a palindrome.
 * Increment and Decrement Pointers:
 * 
 * After checking, increment left and decrement right to move towards the middle.
 * Complete the Loop:
 * 
 * If the pointers cross each other (left >= right) without finding a mismatch, the string is a palindrome.
 */
function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left += 1;
    right -= 1;
  }

  return true;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 't'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) return i;
  }
  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 * 
 * Base Case:

 * If num is a single-digit number (num < 10), directly compare it to digit.
 * Check the Last Digit:
 * 
 * Use num % 10 to extract the last digit and compare it with digit.
 * Recursive Step:
 * 
 * Remove the last digit by (num - num % 10) / 10 and call the function again.
 * Repeat Until the Base Case is Reached:
 * 
 * The recursion continues until there is only one digit left in the number.
 */
function isContainNumber(num, digit) {
  if (num < 10) return num === digit;

  if (num % 10 === digit) return true;

  return isContainNumber((num - (num % 10)) / 10, digit);
}
isContainNumber(123450, 5);

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 *
 * Initial Edge Case Check: If the array is empty, it directly returns -1.
 * Total Sum Calculation: We calculate the total sum of the array before starting to iterate.
 * Left and Right Sums Calculation: At each index i, the left sum is the sum of all elements before the index, and the right sum is the total sum minus the left sum and the current element arr[i].
 * Balance Check: If at any index, the left sum equals the right sum, that index is returned.
 * Final Check: If no such balance point is found after the loop, it returns -1.
 */
function getBalanceIndex(arr) {
  if (arr.length === 0) return -1;

  let totalSum = 0;
  for (let i = 0; i < arr.length; i += 1) {
    totalSum += arr[i];
  }

  let leftSum = 0;

  for (let i = 0; i < arr.length; i += 1) {
    const rightSum = totalSum - leftSum - arr[i];

    if (leftSum === rightSum) {
      return i;
    }

    leftSum += arr[i];
  }

  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(/* size */) {
  throw new Error('Not implemented');
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(/* matrix */) {
  throw new Error('Not implemented');
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(/* arr */) {
  throw new Error('Not implemented');
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(/* str, iterations */) {
  throw new Error('Not implemented');
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  const digits = [];
  let temp = number;
  while (temp > 0) {
    digits.push(temp % 10);
    temp = Math.floor(temp / 10);
  }
  digits.reverse();

  let i = digits.length - 2;
  while (i >= 0 && digits[i] >= digits[i + 1]) {
    i -= 1;
  }

  if (i < 0) {
    return number;
  }

  let j = digits.length - 1;
  while (j > i && digits[j] <= digits[i]) {
    j -= 1;
  }

  [digits[i], digits[j]] = [digits[j], digits[i]];

  for (let x = i + 1; x < digits.length - 1; x += 1) {
    for (let y = x + 1; y < digits.length; y += 1) {
      if (digits[x] > digits[y]) {
        [digits[x], digits[y]] = [digits[y], digits[x]];
      }
    }
  }

  let result = 0;
  for (let z = 0; z < digits.length; z += 1) {
    result = result * 10 + digits[z];
  }

  return result;
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
