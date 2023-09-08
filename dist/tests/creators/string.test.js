"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var creators_1 = require("../../src/creators");
describe('password function', function () {
    it('should return a string of the specified length', function () {
        expect((0, creators_1.generateRandomPassword)(10).length).toBe(10);
        expect((0, creators_1.generateRandomPassword)(20).length).toBe(20);
    });
    it('should only contain valid characters', function () {
        var validChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        var generatedPassword = (0, creators_1.generateRandomPassword)(100);
        for (var _i = 0, generatedPassword_1 = generatedPassword; _i < generatedPassword_1.length; _i++) {
            var char = generatedPassword_1[_i];
            expect(validChars).toContain(char);
        }
    });
});
describe('generateRandomString function', function () {
    it('should return a string of the specified length', function () {
        expect((0, creators_1.generateRandomString)(10).length).toBe(10);
        expect((0, creators_1.generateRandomString)(20).length).toBe(20);
    });
    it('should only contain valid characters', function () {
        var validChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var generatedString = (0, creators_1.generateRandomString)(100);
        for (var _i = 0, generatedString_1 = generatedString; _i < generatedString_1.length; _i++) {
            var char = generatedString_1[_i];
            expect(validChars).toContain(char);
        }
    });
});
//# sourceMappingURL=string.test.js.map