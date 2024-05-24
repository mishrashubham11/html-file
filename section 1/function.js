function add(a,b){
    c=a+b
    console.log(c);
}
add(5,10)
add(3,4)
add(8,7,)

//fuction key ward
const getAvg = function(m1,m2,m3){
    const avg = (m1+m2+m3)/3
    // console.log(avg);
    return avg;
}

const result= getAvg(45,67,89)
console.log(result);

//arrow functions
const factorial = (n)=>{
    let f=1
    for(i=2; i<=n;i++){
        f=f*i
    }
       return f
}
const ans= factorial(5)
 console.log(ans);