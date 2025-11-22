// Input: func = () => expect(5).toBe(5)
// Output: {value: "true"}

/**
 * @param {string} val
 * @return {Object}
 */

var expect = (val) => ({
  toBe: (other) => {
    if (val === other) return true;
    throw new Error("Not Equal");
  },
  notToBe: (other) => {
    if (val !== other) return true;
    throw new Error("Equal");
  }
});