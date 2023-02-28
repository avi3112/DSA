//binary search

// Input: x = 4
// Output: 2
// Explanation: The square root of 4 is 2, so we return 2.


const sq = function(x){
    let squre=1
    let result=0
    while(squre*squre <= x){
        result=squre
        squre++

    }
    return result

 }

const result= sq(8)
console.log(result)





