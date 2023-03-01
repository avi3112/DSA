// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
//leetcode 88

const towarray= function(num1,num2){
    let num3=[]

    for(let i=0;i<num1.length;i++){
        if(num1[i]>0 ){
            num3[i]=num1[i]
        }
    }
    for(let j=0;j<num2.length;j++){

       num3.push(num2[j])
    }

    return num3
    
}

const result= towarray([1,2,3,0,0,0],[2,5,6,7])
console.log(result)
