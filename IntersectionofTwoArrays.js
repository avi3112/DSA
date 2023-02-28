// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]
// Explanation: [9,4] is also accepted.

const interSection = function(nums1,nums2){
    let result=[]
    for(let i=0;i<nums1.length;i++){
        for(let j=0;j<nums2.length;j++){
            if(nums1[i]==nums2[j]){
                result.push(nums1[i])
            }
        }
    }return result
}

const result= interSection([4,9,5],[9,4,9,8,4])

console.log(result)