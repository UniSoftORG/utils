"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var globals_1 = require("@jest/globals");
var collectors_1 = require("../../src/collectors");
(0, globals_1.describe)('Object Collector Module', function () {
    (0, globals_1.describe)('efficientPluck', function () {
        (0, globals_1.it)('efficientPlucks keys from an object', function () {
            var obj = { key1: 'value1', key2: 'value2', key3: 'value3' };
            var keys = ['key1', 'key3'];
            var efficientPlucked = (0, collectors_1.efficientPluck)(obj, keys);
            (0, globals_1.expect)(efficientPlucked).toEqual({ key1: 'value1', key3: 'value3' });
        });
        (0, globals_1.it)('efficientPlucks properties from an object', function () {
            var obj = { key1: 'value1', key2: 'value2', key3: 'value3', key4: 'value4' };
            var keys = ['key1', 'key2'];
            var efficientPlucked = (0, collectors_1.efficientPluck)(obj, keys);
            (0, globals_1.expect)(efficientPlucked).toEqual({ key1: 'value1', key2: 'value2' });
        });
    });
});
//# sourceMappingURL=object.test.js.map