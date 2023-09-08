"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var filters_1 = require("../../src/filters");
describe('Filter Objects Module', function () {
    describe('filterObjectByKey', function () {
        it('filters the given object by the specified keys', function () {
            var obj = { key1: 'value1', key2: 'value2', key3: 'value3' };
            var keys = ['key1', 'key3'];
            var result = (0, filters_1.filterObjectByKey)(obj, keys);
            expect(result).toEqual({ key1: 'value1', key3: 'value3' });
        });
        it('handles empty keys array', function () {
            var obj = { key1: 'value1', key2: 'value2', key3: 'value3' };
            var keys = [];
            var result = (0, filters_1.filterObjectByKey)(obj, keys);
            expect(result).toEqual({});
        });
        it('filters the given object by the specified keys', function () {
            var obj = { key1: 'value1', key2: 'value2', key3: 'value3', key4: 'value4' };
            var keys = ['key1', 'key3', 'key2', 'key4'];
            var result = (0, filters_1.filterObjectByKey)(obj, keys);
            expect(result).toEqual({
                key1: 'value1',
                key3: 'value3',
                key2: 'value2',
                key4: 'value4'
            });
        });
    });
});
//# sourceMappingURL=object.test.js.map