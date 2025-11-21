// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  let string1 = array1.join("")
  let string2 = array2.join("")
  let a = parseInt(string1)
  let b = parseInt(string2)
  return a + b

}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  let string = String(value)
  return string == string.split('').reverse().join('');
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if (input === "" || input === null || input === undefined) {
    return "Required field"
  }
  else if (!Number(input)) {
    return "Must be a number besides 0"
  }
  else {
    return ""
  }
}
