// Input: s = 
// Output: ["o","l","l","e","h"]
// Example 2:

// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]



const reverse= function(s){
    let news=[];
    for(let i= s.length-1;i>=0;i--){
        news.push(s[i])
    }
    return news

}

const result= reverse(["H","a","n","n","a","h"])
console.log(result)