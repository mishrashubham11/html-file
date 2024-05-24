// find power of each array
const nums=[23, 82, 183, 274, 9, 24]

for(let i=0; i<nums.length; i++){
    console.log(nums[i]**2);
}



// 2nd method

for(let a of nums){
    console.log(a**2);
}

//anominous function
nums.forEach( (n) => {console.log(n);}) // print all the ele

nums.forEach( (n) => {console.log(n**2);}) // print all the eles square



//add square of all ele of nums in new array



