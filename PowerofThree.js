const power = function(n){
    let squre=1
    let result=0
    while(squre*squre*squre <= n){
        result=squre
        squre++

    }
    return result

 }

 const result= power(65)
 console.log(result)