"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setNestedValue = void 0;
/**
 * Sets a nested key-value pair in an object.
 *
 * @param {T} obj - The object in which to set the key-value pair.
 * @param {(string | number)[]} keyPath - An array representing the path to the nested key.
 * @param {any} value - The value to set for the nested key.
 * @return {T} - The modified object with the nested key-value pair set.
 */
var setNestedValue = function (obj, keyPath, value) {
    var currentObj = obj;
    for (var i = 0; i < keyPath.length - 1; i++) {
        var key = keyPath[i];
        if (!(key in currentObj)) {
            currentObj[key] = {};
        }
        currentObj = currentObj[key];
    }
    currentObj[keyPath[keyPath.length - 1]] = value;
    return obj;
};
exports.setNestedValue = setNestedValue;
//# sourceMappingURL=recursive.js.map