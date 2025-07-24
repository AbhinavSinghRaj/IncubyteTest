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