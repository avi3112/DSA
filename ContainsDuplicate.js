// Input: nums = [1,2,3,1]
// Output: true

// Input: nums = [1,2,3,4]
// Output: false


var containsDuplicate = function(nums) {
    for(let i=0;i<nums.length;i++){
        for(let j=1;j<nums.length;j++){
            console.log(nums[i],nums[j])
        }
    }

}
const test= containsDuplicate([1,2,3,4])
console.log(test)




// understand this perfectly


var containsDuplicate = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (i == j) continue;
            if (nums[i] == nums[j]) return true;
        }
    }
    return false;
 };
 