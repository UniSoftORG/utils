"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var evaluators_1 = require("../../src/evaluators");
describe('doesKeyExist function', function () {
    it('should return true if key exists', function () {
        expect((0, evaluators_1.doesKeyExist)({ key: 'value' }, 'key')).toBe(true);
    });
    it('should return false if key does not exist', function () {
        expect((0, evaluators_1.doesKeyExist)({ key: 'value' }, 'noKey')).toBe(false);
    });
});
describe('isAssoc function', function () {
    it('should return false for arrays', function () {
        expect((0, evaluators_1.isAssoc)([1, 2, 3])).toBe(false);
    });
    it('should return true for plain objects', function () {
        expect((0, evaluators_1.isAssoc)({ key: 'value' })).toBe(true);
    });
    it('should return false for null', function () {
        expect((0, evaluators_1.isAssoc)(null)).toBe(false);
    });
    it('should return false for other object types', function () {
        expect((0, evaluators_1.isAssoc)(new Date())).toBe(false);
        expect((0, evaluators_1.isAssoc)(new Set())).toBe(false);
    });
});
describe('isList function', function () {
    test('should return true for an array with integer indices', function () {
        expect((0, evaluators_1.isArray)([1, 2, 3])).toBe(true);
    });
    test('should return true for an empty array', function () {
        expect((0, evaluators_1.isArray)([])).toBe(true);
    });
    test('should return false for non-arrays', function () {
        expect((0, evaluators_1.isArray)('string')).toBe(false);
        expect((0, evaluators_1.isArray)(42)).toBe(false);
        expect((0, evaluators_1.isArray)(true)).toBe(false);
    });
});
//# sourceMappingURL=array.test.js.map