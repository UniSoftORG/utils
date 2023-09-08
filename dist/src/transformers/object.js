"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.excludeKeys = exports.objectToArray = exports.deepMerge = void 0;
/**
 * Deep merge two objects
 *
 * @param {T} target - Target object.
 * @param sources
 * @return {T & U} - Merged object.
 */
var deepMerge = function (target) {
    var sources = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        sources[_i - 1] = arguments[_i];
    }
    return sources.reduce(function (target, source) {
        if (source == null)
            return target;
        Object.keys(source).forEach(function (key) {
            var targetValue = target[key];
            var sourceValue = source[key];
            if (Array.isArray(targetValue) && Array.isArray(sourceValue)) {
                target[key] = targetValue.concat(sourceValue);
            }
            else if (targetValue instanceof Date && sourceValue instanceof Date) {
                target[key] = new Date(Math.max(targetValue.getTime(), sourceValue.getTime()));
            }
            else if (typeof targetValue === "object" &&
                targetValue &&
                typeof sourceValue === "object" &&
                sourceValue) {
                target[key] = (0, exports.deepMerge)(__assign({}, targetValue), sourceValue);
            }
            else {
                target[key] = sourceValue;
            }
        });
        return target;
    }, target);
};
exports.deepMerge = deepMerge;
/**
 * Converts an object into an array of values.
 *
 * @param {Record<string, T>} obj - The object to convert into an array.
 * @param {string[]} [keys] - An optional array of keys to select specific values from the object.
 * @return {T[]} An array of values from the object.
 */
var objectToArray = function (obj, keys) {
    return keys
        ? keys.map(function (key) { return obj[key]; }).filter(function (val) { return val !== undefined; })
        : Object.values(obj);
};
exports.objectToArray = objectToArray;
/**
 * Exclude specified properties from an object.
 *
 * @param {T} obj - The object from which to exclude properties.
 * @param {K[]} keysToExclude - An array of keys to exclude.
 * @return {Omit<T, K>} - The object with the specified properties excluded.
 */
var excludeKeys = function (obj, keysToExclude) {
    return Object.fromEntries(Object.entries(obj).filter(function (_a) {
        var key = _a[0];
        return !keysToExclude.includes(key);
    }));
};
exports.excludeKeys = excludeKeys;
//# sourceMappingURL=object.js.map