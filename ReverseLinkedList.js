// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]


const list= function(array){
    let newarray= []
    for(i=array.length-1;i>=0;i--){
        newarray.push(array[i])
    }
    return newarray
}



const result= list([1,2,3,4,5])

console.log(result)