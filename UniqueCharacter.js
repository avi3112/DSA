//387. First Unique Character in a String

// Example 1:

// Input: s = "leetcode"
// Output: 0 l
// Example 2:

// Input: s = "loveleetcode"
// Output: 2 v
// Example 3:

// Input: s = "aabb"
// Output: -1 //na

const UniChar= function(str){
    let smap= {}
    for(let i of str){
        smap[i]=(smap[i] || 0) +1
    }
    for(let j=0;j<str.length;j++){
        if(smap[str[j]]==1){
            return [j]
        }
    }
    return -1
}

const result= UniChar("aabb")
console.log(result)



