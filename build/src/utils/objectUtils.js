"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.keysExits = exports.getKeyByValue = void 0;
const lodash_1 = require("lodash");
const getKeyByValue = (object, value) => {
    return Object.keys(object).find(key => object[key].toLowerCase() === value.toLowerCase());
};
exports.getKeyByValue = getKeyByValue;
/**
 * Checks if an array of `keyLists` are existing and not empty string under `obj`
 * @param {array[string]} keyLists
 * @param {object}
 * @returns {boolean}
 *
 * @example
 *  const obj = { 'a': 'k1', 'b': 'k2', 'c': ''};
 *  keysExits(['a', 'b'], obj) // true
 *  keysExits(['a'], obj) // true
 *  keysExits(['a', 'c'], obj) // false
 */
exports.keysExits = lodash_1.curry((keyLists, obj) => lodash_1.isEmpty(lodash_1.difference(keyLists, lodash_1.keys(lodash_1.omitBy(obj, lodash_1.isEmpty)))));
//# sourceMappingURL=objectUtils.js.map