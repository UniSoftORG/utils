"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var transformers_1 = require("../../src/transformers");
describe('Object Transformer Module', function () {
    describe('merge', function () {
        it('merges two objects into a single object', function () {
            var obj1 = { key1: 'value1' };
            var obj2 = { key2: 'value2' };
            var merged = (0, transformers_1.deepMerge)(obj1, obj2);
            expect(merged).toEqual({ key1: 'value1', key2: 'value2' });
        });
        it('returns the second object when the first object is empty', function () {
            var obj1 = {};
            var obj2 = { key: 'value' };
            var merged = (0, transformers_1.deepMerge)(obj1, obj2);
            expect(merged).toEqual(obj2);
        });
        it('returns the first object when the second object is empty', function () {
            var obj1 = { key: 'value' };
            var obj2 = {};
            var merged = (0, transformers_1.deepMerge)(obj1, obj2);
            expect(merged).toEqual(obj1);
        });
        it('merges nested objects into a single object', function () {
            var obj1 = { key1: 'value1', nested: { key2: 'value2' } };
            var obj2 = { key3: 'value3', nested: { key4: 'value4' } };
            var merged = (0, transformers_1.deepMerge)(obj1, obj2);
            expect(merged).toEqual({ key1: 'value1', key3: 'value3', nested: { key2: 'value2', key4: 'value4' } });
        });
    });
    describe('objectToArray', function () {
        it('converts an object into an array of values', function () {
            var obj = { key1: 'value1', key2: 'value2', key3: 'value3' };
            var keys = ['key1', 'key3'];
            var result = (0, transformers_1.objectToArray)(obj, keys);
            expect(result).toEqual(['value1', 'value3']);
        });
        it('returns an empty array when keys are not found in the input object', function () {
            var obj = { key1: 'value1', key2: 'value2' };
            var keys = ['key3', 'key4'];
            var result = (0, transformers_1.objectToArray)(obj, keys);
            expect(result).toEqual([]);
        });
    });
    describe('excludeKeys', function () {
        it('excludes specified keys from an object', function () {
            var obj = { key1: 'value1', key2: 'value2', key3: 'value3' };
            var keysToExclude = ['key1', 'key3'];
            var result = (0, transformers_1.excludeKeys)(obj, keysToExclude);
            expect(result).toEqual({ key2: 'value2' });
        });
        it('handles an empty keysToExclude array', function () {
            var obj = { key1: 'value1', key2: 'value2', key3: 'value3' };
            var keysToExclude = [];
            var result = (0, transformers_1.excludeKeys)(obj, keysToExclude);
            expect(result).toEqual(obj);
        });
    });
});
//# sourceMappingURL=object.test.js.map