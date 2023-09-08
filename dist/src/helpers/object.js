"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapArrayValues = exports.mapObjectValues = void 0;
/**
 * Maps the values of an object using a mapper function and returns a new object with the mapped values.
 *
 * @param {Record<string, T>} obj - The object whose values will be mapped.
 * @param {(value: T) => U} mapperFn - The function used to map the values.
 * @return {Record<string, U>} - A new object with the mapped values.
 */
function mapObjectValues(obj, mapperFn) {
    return Object.fromEntries(Object.entries(obj).map(function (_a) {
        var key = _a[0], value = _a[1];
        return [key, mapperFn(value)];
    }));
}
exports.mapObjectValues = mapObjectValues;
/**
 * Maps the values of an array using a mapper function.
 *
 * @param {T[]} values - The array whose values will be mapped.
 * @param {(value: T) => U} mapperFn - The function used to map the values.
 * @return {U[]} - An array containing the mapped values.
 */
function mapArrayValues(values, mapperFn) {
    return values.map(mapperFn);
}
exports.mapArrayValues = mapArrayValues;
//# sourceMappingURL=object.js.map