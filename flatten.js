/*
 * Array.prototype.flat(): recursively flattens an array.
 */
function flatten(arr) {
    return arr.flat(Infinity); // Use Infinity to unfold a nested array of any depth
};

module.exports = flatten;