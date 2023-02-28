// Input: head = [1,2,2,1]
// Output: true

const check= function(array){
    if(array.length==0){
        return false
    }
    let left =0
    let right= array.length-1
    while(left<right){
        if(array[left]!==array[right]){
            return false
        }
        left++
        right--
    }
    return true
}

const result= check([1,2])
console.log(result)
