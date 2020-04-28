// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe('sayHello', function() {
    it('should be a defined function', function() {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function() {
        expect(typeof sayHello()).toBe('string');
    });
    it('should return the string "Hello, Jane!" when executed', function() {
        expect(sayHello('Jane')).toBe('Hello, Jane!');
    });
    it('should return the string "Hello, Alex!" when executed', function() {
        expect(sayHello('Alex')).toBe('Hello, Alex!');
    });
    it('should return the string "Hello, Pat!" when executed', function() {
        expect(sayHello('Pat')).toBe('Hello, Pat!');
    });
    it('should return the string "Hello, World!" when executed', function() {
        expect(sayHello()).toBe('Hello, World!');
    });
    it('should return the string "Hello, World!" when executed', function () {
        expect(sayHello(true)).toBe('Hello, World!');
    });
    it('should return the string "Hello, World!", when executed', function() {
        expect(sayHello(false)).toBe('Hello, World!');
    });
});

describe('isFive', function() {
   it('should be a defined function', function () {
       expect(typeof isFive).toBe('function');
   });
   it('should be defined a boolean', function() {
       expect(typeof isFive()).toBe('boolean');
   });
   it('should return true if the number 5 is executed', function() {
       expect(isFive(5)).toBe(true);
   });
   it('should return false if the number 6 is executed', function() {
       expect(isFive(6)).toBe(false);
   });
   it('should return false if the string "Hello, World!" is executed', function() {
       expect(isFive('Hello, World!')).toBe(false);
   })
});

describe('isEven', function() {
    it('should be a defined function', function() {
        expect(typeof isEven).toBe('function');
    });
    it('should be defined a boolean', function() {
        expect(typeof isEven()).toBe('boolean');
    });
    it('returns true when executed with 2', function() {
        expect(isEven(2)).toBe(true);
    });
    it('returns true when executed with -4', function() {
        expect(isEven(-4)).toBe(true);
    });
    it('returns false when executed with 3', function() {
        expect(isEven(3)).toBe(false);
    });
    it('returns false when executed with "banana"', function() {
        expect(isEven('banana')).toBe(false);
    });
    it('returns true when executed with "8"', function () {
        expect(isEven('8')).toBe(true);
    });
    it('returns false when called with Infinity', function() {
        expect(isEven(Infinity)).toBe(false);
    });
    it('should return false when passed with boolean inputs', function() {
        expect(isVowel(true)).toBe(false);
        expect(isVowel(false)).toBe(false);
    });
});

describe('isVowel', function() {
    it('should be a defined function', function () {
        expect(typeof isVowel).toBe('function');
    });
    it('should be a boolean value', function() {
        expect(typeof isVowel()).toBe('boolean')
    });
    it('should return true when passed with "a"', function() {
        expect(isVowel('a')).toBe(true);
    });
    it('should return true when passed with "A"', function () {
        expect(isVowel('A')).toBe(true);
    });
    it('should return false when passed with "y"', function() {
        expect(isVowel('y')).toBe(false);
    });
    it('should return false when passed with 4', function() {
        expect(isVowel(4)).toBe(false);
    });
    it('should return false when passed with boolean inputs', function() {
       expect(isVowel(true)).toBe(false);
       expect(isVowel(false)).toBe(false);
    });
    it('should return false when passed with "banana"', function() {
        expect(isVowel('banana')).toBe(false);
    });
    it('should return false when passed with an no input', function() {
        expect(isVowel()).toBe(false);
    });
});

describe('add', function() {
    it('should be a defined function', function () {
        expect(typeof add).toBe('function');
    });
    it('should return 5 when inputs 2 and 3 are passed', function() {
       expect(add(2, 3)).toBe(5);
    });
});