// Input: s = "III"
// Output: 3
// Explanation: III = 3

// logic is if IV >> we will 5-1 and in this VI 5+1

const romanToInt= function(s){
    const myMap={
        'I':1,
        'V':5,
        'X':10,
        'L':50,
        'C':100,
        'D':500,
        'M':1000,
    }
    
    let result =0;
    for(let i =0;i<s.length;i++){
        const curr= myMap[s[i]]
        const next= myMap[s[i+1]]
        if(curr<next){
            result+= next-curr;
            i++

        }else{
            result+=curr
        }
    }
    return result
    
}


const output= romanToInt("IX")
console.log(output)