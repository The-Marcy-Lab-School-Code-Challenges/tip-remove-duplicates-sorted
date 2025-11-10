/**
 * Test suite for the Two Sum problem
 *
 * Problem: Implement `twoSum(nums, target)` returning indices of two numbers
 * that add up to `target`. Each input has exactly one solution and the same
 * element cannot be used twice. Return indices in any order.
 */

const { twoSum } = require('./index.js');

describe('twoSum', () => {
  // Example test cases from README
  describe('Example test cases', () => {
    test('returns [0, 1] for nums=[2,7,11,15], target=9', () => {
      expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
    });

    test('returns [1, 2] for nums=[3,2,4], target=6', () => {
      expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
    });

    test('returns [0, 1] for nums=[3,3], target=6', () => {
      expect(twoSum([3, 3], 6)).toEqual([0, 1]);
    });
  });

  // Additional scenarios
  describe('Additional scenarios', () => {
    test('works with negatives and positives', () => {
      expect(twoSum([-1, -2, -3, -4, -5, 6], 1)).toEqual([4, 5]);
    });

    test('works with zeros', () => {
      expect(twoSum([0, 4, 3, 0], 0)).toEqual([0, 3]);
    });

    test('works when the unique pair appears later in array', () => {
      expect(twoSum([10, 20, 31, 40, 50, 60], 90)).toEqual([3, 4]);
    });
  });
});