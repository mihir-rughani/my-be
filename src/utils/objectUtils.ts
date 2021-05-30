import { curry, isEmpty, keys, difference, omitBy } from "lodash";


export const getKeyByValue = (object, value: string) => {
	return Object.keys(object).find(key => object[key].toLowerCase() === value.toLowerCase());
};
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
export const keysExits = curry((keyLists: string[], obj: object) =>
	isEmpty(difference(keyLists, keys(omitBy(obj, isEmpty))))
);
