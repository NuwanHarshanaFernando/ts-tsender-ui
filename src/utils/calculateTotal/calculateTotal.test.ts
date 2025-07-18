// calculateTotal.test.ts
import { describe, expect, it } from 'vitest';
import { calculateTotal } from './calculateTotal'; 

describe('calculateTotal', () => {
  it('should return 0 for empty string', () => {
    expect(calculateTotal('')).toBe(0);
    expect(calculateTotal('   ')).toBe(0);
  });

  it('should handle newline-delimited numbers', () => {
    expect(calculateTotal('100\n200\n300')).toBe(600);
    expect(calculateTotal('100\n 200 \n 300 ')).toBe(600);
  });

  it('should handle comma-delimited numbers', () => {
    expect(calculateTotal('100,200,300')).toBe(600);
    expect(calculateTotal('100, 200, 300')).toBe(600);
    expect(calculateTotal('100 , 200 , 300 ')).toBe(600);
  });

  it('should handle mixed delimiters', () => {
    expect(calculateTotal('100\n200,300')).toBe(600);
    expect(calculateTotal('100, 200\n 300')).toBe(600);
    expect(calculateTotal('100\n200\n300,400,500')).toBe(1500);
  });

  it('should ignore empty lines and extra commas', () => {
    expect(calculateTotal('100\n\n200\n\n300')).toBe(600);
    expect(calculateTotal('100,,200,,300')).toBe(600);
    expect(calculateTotal('100,\n200,\n300')).toBe(600);
  });

  it('should filter out non-numeric values', () => {
    expect(calculateTotal('100,abc,200')).toBe(300);
    expect(calculateTotal('100\nfoo\n200')).toBe(300);
    expect(calculateTotal('100, 200, three hundred')).toBe(300);
  });

  it('should handle decimal numbers', () => {
    expect(calculateTotal('100.5\n200.25\n300.75')).toBe(601.5);
    expect(calculateTotal('100.5, 200.25, 300.75')).toBe(601.5);
  });

  it('should handle large numbers', () => {
    expect(calculateTotal('1000000\n2000000')).toBe(3000000);
    expect(calculateTotal('1e6,2e6')).toBe(3000000);
  });
});
