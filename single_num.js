// Example 1:

// Input: nums = [2,2,1]
// Output: 1
// Example 2:

// Input: nums = [4,1,2,1,2]
// Output: 4


const single= function(aray){
    lmap= {}
    for(let item of aray){
        lmap[item]=( lmap[item] ||0 )+1
        
    }
    for(let j=0; j<aray.length;j++){
        if(lmap[aray[j]]==1){
            return aray[j]
        }
    }
    return false

}

const result= single([4,4,1,2,1,2])
console.log(result)