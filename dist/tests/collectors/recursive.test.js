"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var globals_1 = require("@jest/globals");
var recursive_1 = require("../../src/collectors/recursive");
(0, globals_1.describe)('dataCollection Module', function () {
    (0, globals_1.describe)('collectKeysRecursively', function () {
        (0, globals_1.it)('collects keys recursively from an object', function () {
            var data = {
                key: 'value1',
                children: [
                    { key: 'value2', children: [{ key: 'value3' }] },
                    { key: 'value4' },
                ],
                collectKeys: ['key']
            };
            var keys = (0, recursive_1.recursiveKeyCollection)(data, 'collectKeys');
            (0, globals_1.expect)(keys).toEqual(['key']);
        });
        (0, globals_1.it)('collects keys recursively from an object', function () {
            var data = {
                key: 'value1',
                children: [
                    { key: 'value2', children: [{ key: 'value3' }] },
                    { key: 'value4' },
                ],
            };
            var keys = (0, recursive_1.recursiveKeyCollection)(data, ['key']);
            (0, globals_1.expect)(keys).toEqual(['key']);
        });
    });
});
//# sourceMappingURL=recursive.test.js.map