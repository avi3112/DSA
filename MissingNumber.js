// Input: nums = [9,6,4,2,3,5,7,0,1]
// Output: 8
// Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.


const missing= function(nums){
    let n = nums.length
    let sum= (n*(n+1))/2

    for(let e of nums){
        sum-=e
    }
    return sum
}
const result= missing([1,0,3,2,5])
console.log(result)