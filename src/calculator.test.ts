import { add } from './calculator';

describe('String Calculator', () => {
    it('should return 0 for an empty string', () => {
        expect(add("")).toBe(0);
    });
});

it('should return the number when only one number is passed', () => {
    expect(add("5")).toBe(5);
});

it('should return the sum of two numbers', () => {
    expect(add("1,2")).toBe(3);
});
it('should handle any amount of numbers', () => {
    expect(add("1,2,3,4")).toBe(10);
});
it('should support newlines between numbers', () => {
    expect(add("1\n2,3")).toBe(6);
});
it('should support custom delimiter', () => {
    expect(add("//;\n1;2")).toBe(3);
});
it('should throw exception for negative numbers', () => {
    expect(() => add("1,-2,3,-5")).toThrow("negatives not allowed: -2, -5");
});
it('should ignore numbers greater than 1000', () => {
    expect(add("2,1001")).toBe(2);
});