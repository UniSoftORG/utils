"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var evaluators_1 = require("../../src/evaluators");
var setters_1 = require("../../src/setters");
var _utils_1 = require("@utils");
describe('evaluateReplacement function', function () {
    var values = {
        oldValue: 'old',
        newValue: 'new'
    };
    test('should return newValue if condition is All', function () {
        expect((0, evaluators_1.evaluateReplacement)(values, _utils_1.ValueReplacement.All)).toBe('new');
    });
    test('should add newValue after oldValue if condition is After', function () {
        expect((0, evaluators_1.evaluateReplacement)(values, _utils_1.ValueReplacement.After)).toBe((0, setters_1.addAfter)(values.oldValue, values.newValue));
    });
    test('should add newValue before oldValue if condition is Before', function () {
        expect((0, evaluators_1.evaluateReplacement)(values, _utils_1.ValueReplacement.Before)).toBe((0, setters_1.addBefore)(values.oldValue, values.newValue));
    });
    test('should add newValue after oldValue if condition is undefined', function () {
        expect((0, evaluators_1.evaluateReplacement)(values)).toBe((0, setters_1.addAfter)(values.oldValue, values.newValue));
    });
    test('should handle noSpaceBetween flag correctly', function () {
        expect((0, evaluators_1.evaluateReplacement)(values, _utils_1.ValueReplacement.After, true)).toBe((0, setters_1.addAfter)(values.oldValue, values.newValue, undefined, true));
        expect((0, evaluators_1.evaluateReplacement)(values, _utils_1.ValueReplacement.Before, true)).toBe((0, setters_1.addBefore)(values.oldValue, values.newValue, undefined, true));
        expect((0, evaluators_1.evaluateReplacement)(values, undefined, true)).toBe((0, setters_1.addAfter)(values.oldValue, values.newValue, undefined, true));
    });
});
//# sourceMappingURL=string.test.js.map