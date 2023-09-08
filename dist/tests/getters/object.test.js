"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getters_1 = require("../../src/getters");
describe('Object Getters Module', function () {
    describe('getValue', function () {
        it('retrieves a value from an object based on a path', function () {
            var obj = { a: { b: { c: 10 } } };
            expect((0, getters_1.getValue)(obj, 'a.b.c')).toBe(10);
        });
    });
});
//# sourceMappingURL=object.test.js.map