const nums=[2,7,3,9,12,62]

const newNums = nums.map ((n) => {return n**2})  // all array ele taken

console.log(newNums);



const names = [ 'ramu', 'shamu' , 'kalua', 'shubham']

const newNames= names.map ((n) => {return n.length})  // shows all eles len

console.log(newNames);



const prices= ['₹234.762/-', '₹264.22/-', '₹90.1/-', '₹123.212/-']

const bbb= prices.map((n) =>{return parseInt(n.slice(1,-2))})  // removing rupee and slas sign by slicing and add parseint for converting parameters in int

console.log(bbb);



 const evenNums = nums.filter((n)=>{return n%2===0})
 console.log(evenNums);   // taking 1st array of this file // if we take map instead of filter its give true and false only




 const namess = names.filter((n)=>{ return n.length>5})
 console.log(namess);  // taking array of name


 const prices2 =[ 599, 220, 199, 350, 3200, 2830, 1980]
 const aaa= prices2.filter((n) => { return n>500 && n<3000}) // print ele btw 500 to 3000
 console.log(aaa);
 








