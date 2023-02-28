// Input: nums = [3,2,3]
// Output: 3


// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

var majorityElement = function(nums) {
    var obj = {};
    
    for(var i = 0; i < nums.length; i++){
        obj[nums[i]] = obj[nums[i]] + 1 || 1;


        if(obj[nums[i]] > nums.length / 2)  return nums[i];
    }

};

const result= majorityElement([2,2,1,1,1,2,2])
console.log(result)