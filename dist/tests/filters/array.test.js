"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var filters_1 = require("../../src/filters");
describe('Array and Object utilities', function () {
    describe('mapToKeys', function () {
        it('should map an array to an object', function () {
            expect((0, filters_1.mapToKeys)([1, 2], function (n) {
                var _a;
                return (_a = {}, _a[n] = n * 2, _a);
            })).toEqual({ 1: 2, 2: 4 });
        });
    });
    describe('filterByKeys', function () {
        it('should filter keys in an object', function () {
            expect((0, filters_1.filterByKeys)({ a: 1, b: 2, c: 3 }, ['a', 'c'])).toEqual({ a: 1, c: 3 });
        });
    });
    describe('omitByKeys', function () {
        it('should exclude keys in an object', function () {
            expect((0, filters_1.omitByKeys)({ a: 1, b: 2, c: 3 }, ['a', 'c'])).toEqual({ b: 2 });
        });
    });
    describe('removeValue', function () {
        it('should remove values from an array', function () {
            expect((0, filters_1.removeValue)([1, 2, 2, 3, 4], 2)).toEqual([1, 3, 4]);
        });
    });
    describe('random', function () {
        it('should throw error for an empty array', function () {
            expect(function () { return (0, filters_1.random)([]); }).toThrow('Array must not be empty.');
        });
        it('should return a random value', function () {
            expect([1, 2, 3]).toContain((0, filters_1.random)([1, 2, 3]));
        });
    });
    describe('shuffleArray', function () {
        it('should shuffle the array', function () {
            var arr = [1, 2, 3];
            var different = false;
            for (var i = 0; i < 100; i++) {
                if (JSON.stringify((0, filters_1.shuffleArray)(__spreadArray([], arr, true))) !== JSON.stringify(arr)) {
                    different = true;
                    break;
                }
            }
            expect(different).toBe(true);
        });
    });
    describe('sortArray', function () {
        it('should sort array in ascending order', function () {
            expect((0, filters_1.sortArray)([3, 2, 1])).toEqual([1, 2, 3]);
        });
    });
    describe('sortArrayDesc', function () {
        it('should sort array in descending order', function () {
            expect((0, filters_1.sortArrayDesc)([1, 2, 3])).toEqual([3, 2, 1]);
        });
    });
    describe('sortRecursiveAsc', function () {
        it('should recursively sort arrays and objects', function () {
            var arr = [2, 1, { b: 2, a: 1 }];
            expect((0, filters_1.sortRecursiveAsc)(arr)).toEqual([1, 2, { a: 1, b: 2 }]);
        });
    });
    describe('sortRecursiveDesc', function () {
        it('should recursively sort arrays in descending order', function () {
            var arr = [1, 2];
            var result = (0, filters_1.sortRecursiveDesc)(arr);
            expect(result).toEqual([2, 1]);
        });
        it('should recursively sort object keys in descending order', function () {
            var obj = { a: 1, b: 2 };
            var result = (0, filters_1.sortRecursiveDesc)(obj);
            expect(result).toEqual({ b: 2, a: 1 });
        });
    });
    describe('where', function () {
        it('should filter array based on a predicate function', function () {
            expect((0, filters_1.filterArray)([1, 2, 3, 4], function (x) { return x % 2 === 0; })).toEqual([2, 4]);
        });
    });
    describe('whereNotNull', function () {
        it('should remove null and undefined values', function () {
            expect((0, filters_1.filterNotNull)([null, 1, undefined, 2])).toEqual([1, 2]);
        });
    });
});
//# sourceMappingURL=array.test.js.map