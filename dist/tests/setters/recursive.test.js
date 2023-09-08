"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var recursive_1 = require("../../src/setters/recursive");
describe('Recursive Setter Module', function () {
    describe('setNestedValue', function () {
        it('sets a nested key-value pair in an object', function () {
            var obj = {
                key1: {
                    key2: {
                        key3: 'value3',
                    },
                },
            };
            var keyPath = ['key1', 'key2', 'key3'];
            var value = 'new_value';
            var result = (0, recursive_1.setNestedValue)(obj, keyPath, value);
            expect(result).toEqual({
                key1: {
                    key2: {
                        key3: 'new_value',
                    },
                },
            });
        });
        it('handles nested key not found in the object', function () {
            var obj = {
                key1: {
                    key2: {
                        key3: 'value3',
                    },
                },
            };
            var keyPath = ['key1', 'key2', 'key4'];
            var value = 'new_value';
            var result = (0, recursive_1.setNestedValue)(obj, keyPath, value);
            expect(result).toEqual({
                key1: {
                    key2: {
                        key3: 'value3',
                        key4: 'new_value',
                    },
                },
            });
        });
    });
});
//# sourceMappingURL=recursive.test.js.map