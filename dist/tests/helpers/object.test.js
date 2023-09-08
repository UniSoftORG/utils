"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = require("../../src/helpers");
describe('Object Helper Module', function () {
    describe('mapObjectValues', function () {
        it('maps the values of an object using a mapping function', function () {
            var obj = {
                prop1: 1,
                prop2: 2,
            };
            var mappedValues = (0, helpers_1.mapObjectValues)(obj, function (value) { return value * 2; });
            expect(mappedValues).toEqual({
                prop1: 2,
                prop2: 4,
            });
        });
    });
    describe('mapArrayValues', function () {
        it('maps the values of an object array using a mapping function', function () {
            var objArray = [
                { value: 1 },
                { value: 2 },
            ];
            var mappedValues = (0, helpers_1.mapArrayValues)(objArray, function (obj) { return obj.value * 2; });
            expect(mappedValues).toEqual([2, 4]);
        });
    });
});
//# sourceMappingURL=object.test.js.map