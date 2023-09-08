"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var checkers_1 = require("../../src/checkers");
describe('String utility functions', function () {
    describe('contains function', function () {
        it('should return true if the subject contains the search string', function () {
            expect((0, checkers_1.containsAny)('hello world', 'world')).toBe(true);
        });
        it('should return false if the subject does not contain the search string', function () {
            expect((0, checkers_1.containsAny)('hello world', 'moon')).toBe(false);
        });
        it('should return true if the subject contains any of the search strings in array', function () {
            expect((0, checkers_1.containsAny)('hello world', ['moon', 'world'])).toBe(true);
        });
        it('should return false if the subject contains none of the search strings in array', function () {
            expect((0, checkers_1.containsAny)('hello world', ['moon', 'mars'])).toBe(false);
        });
    });
    describe('containsAll function', function () {
        it('should return true if the subject contains all search strings', function () {
            expect((0, checkers_1.containsAll)('hello world moon', ['hello', 'world'])).toBe(true);
        });
        it('should return false if the subject does not contain all search strings', function () {
            expect((0, checkers_1.containsAll)('hello world', ['hello', 'moon'])).toBe(false);
        });
    });
    describe('isUrl function', function () {
        it('should return true for a valid URL', function () {
            expect((0, checkers_1.isUrl)('https://www.google.com')).toBe(true);
        });
        it('should return false for an invalid URL', function () {
            expect((0, checkers_1.isUrl)('not a url')).toBe(false);
        });
    });
    describe('isUuid function', function () {
        it('should return true for a valid UUID', function () {
            expect((0, checkers_1.isUuid)('550e8400-e29b-41d4-a716-446655440000')).toBe(true);
        });
        it('should return false for an invalid UUID', function () {
            expect((0, checkers_1.isUuid)('not a uuid')).toBe(false);
        });
    });
    describe('isUlid function', function () {
        it('should return true for a valid ULID', function () {
            expect((0, checkers_1.isUlid)('01F5ZG7W99T0RJATBGRX4K53SW')).toBe(true);
        });
        it('should return false for an invalid ULID', function () {
            expect((0, checkers_1.isUlid)('not a ulid')).toBe(false);
        });
    });
    describe('is function', function () {
        it('should return true if subject matches pattern', function () {
            expect((0, checkers_1.is)('hello', 'he..o')).toBe(true);
        });
        it('should return false if subject does not match pattern', function () {
            expect((0, checkers_1.is)('hello', 'wo..d')).toBe(false);
        });
    });
    describe('isAscii function', function () {
        it('should return true for ASCII characters', function () {
            expect((0, checkers_1.isAscii)('hello world')).toBe(true);
        });
        it('should return false for non-ASCII characters', function () {
            expect((0, checkers_1.isAscii)('hello 世界')).toBe(false);
        });
    });
    describe('isJson function', function () {
        it('should return true for a valid JSON string', function () {
            expect((0, checkers_1.isJson)('{"key": "value"}')).toBe(true);
        });
        it('should return false for an invalid JSON string', function () {
            expect((0, checkers_1.isJson)('not a json')).toBe(false);
        });
    });
});
//# sourceMappingURL=string.test.js.map