"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var recursive_1 = require("../..//src/creators/recursive");
describe('Recursive Creator Module', function () {
    describe('deepClone', function () {
        it('creates a deep clone of an object', function () {
            var originalObject = {
                prop1: 'value1',
                prop2: {
                    nestedProp: 'value2',
                },
            };
            var clonedObject = (0, recursive_1.deepClone)(originalObject);
            expect(clonedObject).toEqual(originalObject);
            expect(clonedObject).not.toBe(originalObject);
        });
    });
    describe('flatten', function () {
        it('flattens a nested array into a single-level array', function () {
            var nestedArray = [1, [2, [3, 4]], [5]];
            var flattenedArray = (0, recursive_1.flatten)(nestedArray);
            expect(flattenedArray).toEqual([1, 2, 3, 4, 5]);
        });
    });
});
//# sourceMappingURL=recursive.test.js.map