// Input: n=10
// ["call","call","call"]
// Output: [10,11,12]

/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    return function() {
        return n++;
    };
};