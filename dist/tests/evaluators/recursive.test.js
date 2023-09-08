"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var evaluators_1 = require("../../src/evaluators");
describe('findMostFrequent function', function () {
    test('should return the most frequent number in an array of numbers', function () {
        expect((0, evaluators_1.findMostFrequent)([1, 2, 2, 3])).toBe(2);
    });
    test('should return the most frequent string in an array of strings', function () {
        expect((0, evaluators_1.findMostFrequent)(['apple', 'banana', 'apple'])).toBe('apple');
    });
    test('should handle mixed types and return the most frequent', function () {
        expect((0, evaluators_1.findMostFrequent)(['apple', 1, 'apple', 1, 1])).toBe(1);
    });
    test('should return undefined for an empty array', function () {
        expect((0, evaluators_1.findMostFrequent)([])).toBe(undefined);
    });
    test('should handle a single-item array', function () {
        expect((0, evaluators_1.findMostFrequent)([1])).toBe(1);
        expect((0, evaluators_1.findMostFrequent)(['apple'])).toBe('apple');
    });
    test('should return the first item when there is a tie for most frequent', function () {
        expect((0, evaluators_1.findMostFrequent)([1, 1, 2, 2])).toBe(1);
        expect((0, evaluators_1.findMostFrequent)(['apple', 'banana', 'apple', 'banana'])).toBe('apple');
    });
});
//# sourceMappingURL=recursive.test.js.map