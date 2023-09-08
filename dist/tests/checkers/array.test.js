"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var checkers_1 = require("../../src/checkers");
describe('isAccessible function', function () {
    it('should return true for arrays', function () {
        expect((0, checkers_1.isAccessible)([1, 2, 3])).toBe(true);
    });
    it('should return true for objects', function () {
        expect((0, checkers_1.isAccessible)({ key: 'value' })).toBe(true);
    });
    it('should return false for null', function () {
        expect((0, checkers_1.isAccessible)(null)).toBe(false);
    });
    it('should return false for undefined', function () {
        expect((0, checkers_1.isAccessible)(undefined)).toBe(false);
    });
    it('should return false for primitives', function () {
        expect((0, checkers_1.isAccessible)(42)).toBe(false);
        expect((0, checkers_1.isAccessible)('string')).toBe(false);
        expect((0, checkers_1.isAccessible)(true)).toBe(false);
    });
});
describe('has function', function () {
    it('should return true if key exists', function () {
        expect((0, checkers_1.hasKey)({ key: 'value' }, 'key')).toBe(true);
    });
    it('should return false if key does not exist', function () {
        expect((0, checkers_1.hasKey)({ key: 'value' }, 'noKey')).toBe(false);
    });
    test('should return false for null or undefined object', function () {
        expect((0, checkers_1.hasKey)(null, 'key')).toBe(false);
        expect((0, checkers_1.hasKey)(undefined, 'key')).toBe(false);
    });
});
describe('hasAny function', function () {
    it('should return true if any key exists', function () {
        expect((0, checkers_1.hasAnyKey)({ key1: 'value1', key2: 'value2' }, ['key1', 'noKey'])).toBe(true);
    });
    it('should return false if no keys exist', function () {
        expect((0, checkers_1.hasAnyKey)({ key1: 'value1', key2: 'value2' }, ['noKey1', 'noKey2'])).toBe(false);
    });
    it('should return false for null or undefined object', function () {
        expect((0, checkers_1.hasAnyKey)(null, ['key'])).toBe(false);
        expect((0, checkers_1.hasAnyKey)(undefined, ['key'])).toBe(false);
    });
});
//# sourceMappingURL=array.test.js.map