/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
        if (!nums.length) {
                return
        }
    for (let i=0;i<nums.length;i++) {
            for (let j=i+1;j<nums.length;j++) {
                        if (nums[i] + nums[j] === target) {
                                return nums = [i,j]
                        }
        };
        };
};


let nums=[5,5,18,1]
let target=10

console.log(twoSum(nums,target))