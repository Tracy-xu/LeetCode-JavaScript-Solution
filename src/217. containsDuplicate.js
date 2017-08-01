/**
 * https://leetcode.com/problems/contains-duplicate/
 * @param {number[]} nums
 * @return {boolean}
 * Time Complextity O(n)
 * if nums[i] was not in dict, set its value as 1, else +1.
 * beware of the order of ||. a||b will always equal to a if a is not 0/null/NaN.
 */
var containsDuplicate = function(nums) {
    var dict = {};
    for (var i = 0, len = nums.length; i < len; i++) {
        dict[nums[i]] = dict[nums[i]] + 1 || 1;
        if (dict[nums[i]] > 1) return true;
    }
    return false;
};
