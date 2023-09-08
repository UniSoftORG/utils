"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var creators_1 = require("../../src/creators");
describe('Object Creator Module', function () {
    describe('createObjectFromMapOptions', function () {
        it('generates an object from an array of map options', function () {
            var mapOptions = [
                'key1',
                { key: 'key2', value: 'value2' },
                { key: 'key3', value: 'value3', beforeValue: 'before_', afterValue: '_after' },
            ];
            var result = (0, creators_1.createObjectFromMapOptions)(mapOptions);
            expect(result).toEqual({
                key1: 'key1',
                key2: 'value2',
                key3: 'before_value3_after',
            });
        });
        it('handles map options with missing values', function () {
            var mapOptions = [
                'key1',
                { key: 'key2', value: '' },
                { key: 'key3', value: '', beforeValue: 'before_', afterValue: '_after' },
            ];
            var result = (0, creators_1.createObjectFromMapOptions)(mapOptions);
            expect(result).toEqual({
                key1: 'key1',
                key2: '',
                key3: 'before__after',
            });
        });
    });
});
//# sourceMappingURL=object.test.js.map