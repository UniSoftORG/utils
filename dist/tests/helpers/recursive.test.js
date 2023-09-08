"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var recursive_1 = require("../../src/helpers/recursive");
describe('dataMapping Module', function () {
    describe('mapRecursive', function () {
        it('recursively maps over an array of nested objects', function () {
            var data = [
                { value: 1, children: [{ value: 2 }] },
                { value: 3 },
            ];
            var mappedData = (0, recursive_1.mapRecursive)(data, function (item) { return (__assign(__assign({}, item), { value: item.value * 2 })); });
            expect(mappedData).toEqual([
                { value: 2, children: [{ value: 4 }] },
                { value: 6 },
            ]);
        });
    });
    describe('mapRecursiveForLoop', function () {
        it('maps an array of objects using a for loop', function () {
            var data = [
                { value: 1, children: [{ value: 2 }] },
                { value: 3 },
            ];
            var mappedData = (0, recursive_1.forLoopRecursive)(data, function (item) { return (__assign(__assign({}, item), { value: item.value * 2 })); });
            expect(mappedData).toEqual([
                { value: 2, children: [{ value: 4 }] },
                { value: 6 },
            ]);
        });
    });
    describe('mapEachRecursive', function () {
        it('recursively maps each item in the given data array', function () {
            var data = [
                { value: 1, children: [{ value: 2 }] },
                { value: 3 },
            ];
            var mappedData = (0, recursive_1.forEachRecursive)(data, function (item) { return (__assign(__assign({}, item), { value: item.value * 2 })); });
            expect(mappedData).toEqual([
                { value: 2, children: [{ value: 4 }] },
                { value: 6 },
            ]);
        });
    });
    describe('forRecursive', function () {
        it('executes a callback function recursively on each item in an array of objects', function () {
            var data = [
                { value: 1, children: [{ value: 2 }] },
                { value: 3 },
            ];
            var count = 0;
            (0, recursive_1.forRecursive)(data, function (item) {
                count += item.value;
            });
            expect(count).toEqual(6);
        });
    });
});
//# sourceMappingURL=recursive.test.js.map