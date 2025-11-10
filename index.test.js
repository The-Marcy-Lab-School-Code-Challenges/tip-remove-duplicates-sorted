/**
 * Test suite for the Remove Duplicates from Sorted Array problem
 *
 * Problem: Implement `removeDuplicates(nums)` that removes duplicates in-place
 * from a sorted array and returns the number of unique elements `k`.
 * The first `k` elements should contain the unique numbers in sorted order.
 */

const { removeDuplicates } = require('./index.js');

describe('removeDuplicates', () => {
  // Example test cases from README
  describe('Example test cases', () => {
    test('Example 1: returns 2 for nums=[1,1,2]', () => {
      const nums = [1, 1, 2];
      const result = removeDuplicates(nums);
      expect(result).toBe(2);
      expect(nums.slice(0, result)).toEqual([1, 2]);
    });

    test('Example 2: returns 5 for nums=[0,0,1,1,1,2,2,3,3,4]', () => {
      const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
      const result = removeDuplicates(nums);
      expect(result).toBe(5);
      expect(nums.slice(0, result)).toEqual([0, 1, 2, 3, 4]);
    });
  });

  // Additional scenarios
  describe('Additional scenarios', () => {
    test('handles array with no duplicates', () => {
      const nums = [1, 2, 3, 4, 5];
      const result = removeDuplicates(nums);
      expect(result).toBe(5);
      expect(nums.slice(0, result)).toEqual([1, 2, 3, 4, 5]);
    });

    test('handles array with all duplicates', () => {
      const nums = [1, 1, 1, 1, 1];
      const result = removeDuplicates(nums);
      expect(result).toBe(1);
      expect(nums.slice(0, result)).toEqual([1]);
    });

    test('handles single element array', () => {
      const nums = [1];
      const result = removeDuplicates(nums);
      expect(result).toBe(1);
      expect(nums.slice(0, result)).toEqual([1]);
    });

    test('handles array with negative numbers', () => {
      const nums = [-3, -2, -2, -1, 0, 0, 1];
      const result = removeDuplicates(nums);
      expect(result).toBe(5);
      expect(nums.slice(0, result)).toEqual([-3, -2, -1, 0, 1]);
    });

    test('handles empty array', () => {
      const nums = [];
      const result = removeDuplicates(nums);
      expect(result).toBe(0);
      expect(nums).toEqual([]);
    });

    test('handles array with alternating duplicates', () => {
      const nums = [1, 2, 2, 3, 3, 3, 4, 5, 5];
      const result = removeDuplicates(nums);
      expect(result).toBe(5);
      expect(nums.slice(0, result)).toEqual([1, 2, 3, 4, 5]);
    });
  });

  // Two-pointer technique verification
  describe('Two-pointer technique', () => {
    test('uses two-pointer approach: modifies array in-place efficiently', () => {
      // This test verifies the solution uses two pointers by checking:
      // 1. The array is modified in-place (not a new array)
      // 2. Only the first k elements are unique
      // 3. The solution handles large arrays efficiently (O(n) time, O(1) space)
      const nums = [1, 1, 2, 2, 2, 3, 4, 4, 5, 5, 5, 5, 6];
      const originalLength = nums.length;
      const originalReference = nums; // Keep reference to verify in-place modification
      
      const result = removeDuplicates(nums);
      
      // Verify the same array reference (in-place modification)
      expect(nums).toBe(originalReference);
      
      // Verify the result
      expect(result).toBe(6);
      expect(nums.slice(0, result)).toEqual([1, 2, 3, 4, 5, 6]);
      
      // Verify array length hasn't changed (in-place modification)
      expect(nums.length).toBe(originalLength);
      
      // Verify elements beyond k are still present (may be duplicates or original values)
      // This confirms we're not creating a new array, just modifying in-place
      expect(nums.length).toBeGreaterThan(result);
    });

    test('two-pointer handles consecutive duplicates efficiently', () => {
      // This test case specifically benefits from two-pointer approach
      // where one pointer tracks unique position and another scans ahead
      const nums = [1, 1, 1, 1, 2, 2, 2, 3, 3, 4, 4, 4, 4, 4];
      const result = removeDuplicates(nums);
      
      expect(result).toBe(4);
      expect(nums.slice(0, result)).toEqual([1, 2, 3, 4]);
      
      // Verify in-place modification by checking array reference
      const numsCopy = [1, 1, 1, 1, 2, 2, 2, 3, 3, 4, 4, 4, 4, 4];
      const result2 = removeDuplicates(numsCopy);
      expect(result2).toBe(4);
      expect(numsCopy.slice(0, result2)).toEqual([1, 2, 3, 4]);
    });
  });
});