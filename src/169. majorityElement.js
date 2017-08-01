/**
 * @param {number[]} nums
 * @return {number}
 * Sort
 * Since major element is defined appears more than n/2 times, 
 * so after sort, the middle one is definitely the majority element.
 * Time O(nlogn)
 * 
 * Boyer-Moore Majority Vote Algorithm
 * Set the first one as major, and the count as 0. 
 * if next one equals to major, count increment;else decrement. 
 * when the count is equal to zero again, change current element as major and increment one.
 * Time O(n) Space O(1)
 */
var majorityElement = function(nums) {
	// return nums.sort()[parseInt(nums.length/2)];

	var major = nums[0],
		count = 0;
	for (var i = 0, len = nums.length; i < len; i++) {
		if (count === 0) {
			major = nums[i];
			count++;
		} else if (major === nums[i]) {
			count++;
		} else {
			count--;
		}
	}
	return major;

};