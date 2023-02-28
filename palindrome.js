// 

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.


const check= function(str){
    let newstr= str.toLowerCase()
    // if(newstr.length==0){
    //     return false
    // }

    let left=0
    let right=newstr.length -1
    
    while(left<right){
        if(newstr[left]!==newstr[right]){
            return false
        }
        left ++
        right --
    }
    return true
}

const result= check("noon")
console.log(result)
