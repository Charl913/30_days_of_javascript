/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    return function(x) {
        return functions.reduceRight((acc, fn) => fn(acc), x);
    }
};
/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */

/*
arr.reduceRight((accumulator, currentValue) => {
  // combine accumulator and currentValue somehow
  return newAccumulator;
}, initialValue);

    accumulator holds the result so far.

    currentValue is the current array element being processed.

    initialValue is the starting value for the accumulator.
*/