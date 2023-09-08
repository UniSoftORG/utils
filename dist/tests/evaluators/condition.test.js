"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var evaluators_1 = require("../../src/evaluators");
describe('condition evaluators Module', function () {
    describe('evaluateCondition', function () {
        it('evaluates conditions based on the main object', function () {
            var mainObj = { value1: 5, value2: 10 };
            expect((0, evaluators_1.evaluateCondition)('value1 === value2', mainObj)).toBe(false);
            expect((0, evaluators_1.evaluateCondition)('value1 !== value2', mainObj)).toBe(true);
            expect((0, evaluators_1.evaluateCondition)('value1 < value2', mainObj)).toBe(true);
            expect((0, evaluators_1.evaluateCondition)('value1 <= value2', mainObj)).toBe(true);
            expect((0, evaluators_1.evaluateCondition)('value2 > value1', mainObj)).toBe(true);
            expect((0, evaluators_1.evaluateCondition)('value2 >= value1', mainObj)).toBe(true);
        });
    });
    describe('evaluateConditions', function () {
        it('evaluates conditions in the array and returns conditional classes', function () {
            var conditionsArray = [
                {
                    condition: 'value1 < value2',
                    value: 'class1'
                },
                {
                    condition: 'value1 > value2',
                    value: 'class2'
                }
            ];
            var mainObj = {
                value1: 5, value2: 10
            };
            var options = { mainObj: mainObj };
            var conditionalClasses = (0, evaluators_1.evaluateConditions)(conditionsArray, options);
            expect(conditionalClasses).toBe('class1');
        });
    });
});
//# sourceMappingURL=condition.test.js.map