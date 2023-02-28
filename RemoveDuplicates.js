// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]

const removedupicate= function(nums){
    for(i=0;i<nums.length;i++){
        for(j=nums.length;j>=i+1;j--){
            if(nums[i]==nums[j]){
                nums.splice(i,1)
            }
        }
    }
    return nums
} 

const result= removedupicate([0,0,1,1,1,2,2,3,3,4])
console.log(result)