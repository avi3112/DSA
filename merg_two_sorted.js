// Input: list1 = [1,2,4], list2 = [1,3,4]

// Output: [1,1,2,3,4,4]

// const merg= function(list1,list2){

//     let data=[]

//     for(let i=0;i<list1.length;i++){

//         data.push(list1[i])
//     }
//     for(let j=0;j<list2.length;j++){
//         data.push(list2[j])
        

//     }
//     return data.sort()
// }
// const result= merg([1,2,4],[1,3,4])
// console.log(result)


list1 = [1,2,4] 
list2 = [1,3,4]

const combineList = [...list1, ...list2] 
const finalArray = combineList.sort()
console.log(finalArray)
