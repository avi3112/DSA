// Input: s = "anagram", t = "nagaram"
// Output: true


// Input: s = "rat", t = "car"
// Output: falses


const check = function (str1,str2){
    if(str1.length !== str2.length){
        return false
    }
    let count={}
    for(let i of str1){
        count[i]= (count[i] || 0) + 1
        console.log(count)
    }
    for(let j of str2){
        if(!count[j]){
            return false
        }
        count[j]-=1
    }
    return true
}


const result= check("hello","lloee")
console.log(result)

