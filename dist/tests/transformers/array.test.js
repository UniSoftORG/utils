"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var transformers_1 = require("../../src/transformers");
describe('Array Transformer Module', function () {
    describe('arrayToObject', function () {
        it('converts an array to an object using a key extractor function', function () {
            var arr = [
                { id: '1', value: 'one' },
                { id: '2', value: 'two' },
            ];
            var keyExtractor = function (item) { return item.id; };
            var result = (0, transformers_1.arrayToObject)(arr, keyExtractor);
            expect(result).toEqual({
                '1': { id: '1', value: 'one' },
                '2': { id: '2', value: 'two' },
            });
        });
        describe('arrayToObject', function () {
            it('handles an empty array input', function () {
                var arr = [];
                var keyExtractor = function (item) { return item.id; };
                var result = (0, transformers_1.arrayToObject)(arr, keyExtractor);
                expect(result).toEqual({});
            });
            it('handles duplicate keys in the array input', function () {
                var arr = [
                    { id: '1', value: 'one' },
                    { id: '1', value: 'duplicate' },
                ];
                var keyExtractor = function (item) { return item.id; };
                var result = (0, transformers_1.arrayToObject)(arr, keyExtractor);
                expect(result).toEqual({
                    '1': { id: '1', value: 'duplicate' },
                });
            });
        });
    });
});
//# sourceMappingURL=array.test.js.map