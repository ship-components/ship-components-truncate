import Truncate from '../Truncate'
import truncateString from '../truncateString'

describe('truncateString', () => {
    it('should be a function', () => {
      expect(typeof truncateString).toBe('function')
    });
    
    it('should truncate string by the closest word', () => {
        [{
            input: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint' 
            + 'occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            expected: 'Lorem ipsum dolor sit amet, consectetur...',
            characterCount: 50
        }].forEach((test) => {
            expect(truncateString(test.input, test.characterCount)).toBe(test.expected)
        });
    });

    it('should not truncate string when input.length < ', () => {
        [{
            input: 'Lorem ipsum dolor sit amet,',
            expected: 'Lorem ipsum dolor sit amet,',
            characterCount: 50
        }].forEach((test) => {
            expect(truncateString(test.input, test.characterCount)).toBe(test.expected)
        });
    });

    it('should not truncate string when input.length < ', () => {
        [{
            input: 'Lorem ipsum dolor sit amet,',
            expected: 'Lorem ipsum dolor sit amet,',
            characterCount: 28
        }].forEach((test) => {
            var result = truncateString(test.input, test.characterCount);
            expect(result).toBe(test.expected);
            expect(result.length).toBeLessThan(test.characterCount)
        });
    });

    it('should not truncate string when input.length < ', () => {
        expect(() => {
            truncateString('asdf', 6)
        }).toThrow()
    });

    it('no character limit, just return text', () => {
        var someString = 'asdf'
        expect(truncateString(someString)).toBe(someString);
      });

});
