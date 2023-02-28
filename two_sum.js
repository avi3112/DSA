// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// broute force


/*

first we can take loop over the array


*/


function twoSum(num,target){
    for(i=0;i<num.length;i++){
        for(j=1;j<num.length;j++){
            if(num[i]+num[j]===target){
                return [[i],[j]]
            }
        }
    }

}

const result= twoSum([3,3],6)
console.log(result)

//optimize approch need to implement



