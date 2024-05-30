const student={
    name: 'ramu',
    rollno:34567,
    email:'ram@123'
}
console.log(student);

console.log(student.name);  // if we print only name object

// if we want address in upper keys valuse
student.address='lucknow'
console.log(student);

//if we want to update keys valuse
student.rollno=2132
console.log(student);

//object fuction print keys and object values print keys values

console.log(Object.keys(student));
console.log(Object.values(student));



// whole object print method not only keys and values
const smartphone={
    brand:'samsung',
    model:'S23',
    price:78643,
    colors: ['black', 'grey' , 'white']
}
console.log(smartphone);
console.log(smartphone.colors[1]);  // if we want one color from color array use indecing


smartphone.colors.push('red'); // we want add color then push logic use
console.log(smartphone);



//
const smartphoneList=[
    { brand:'samsung',
    model:'S23',
    price:78643,
    colors: ['black', 'grey' , 'white']
   }
]

console.log(smartphoneList[0].price); //o shows the index of arrays and this array has only one element  this print only object then we use .price the we find the price element
// array pe indexing karenge to object milega

console.log(smartphoneList[0].colors[0]); // print 1st color 




const smartphoneLists=[
    { brand:'samsung',
    model:'S23',
    price:78643,
    colors: ['black', 'grey' , 'white']
   },
   { brand:'Mi',
    model:'Note3',
    price:78943,
    colors: ['black', 'vilet' , 'white']
   },
   { brand:'Oneolus',
    model:'12R',
    price:10333,
    colors: ['black', 'pink' , 'white']
   },
   { brand:'Nokia',
    model:'lumia',
    price:78933,
    colors: ['black', 'yellow' , 'pink']
   },
   { brand:'Apple',
    model:'17',
    price:13456,
    colors: ['black', 'orange' , 'white']
   },
   { brand:'samsung',
    model:'A23',
    price:786643,
    colors: ['black', 'grey' , 'white']
   }
]

console.log(smartphoneLists[3].price);  //print price of 4th element

//filter all smartphones with price lower than 30000
 budgetphones= smartphoneLists.filter ((phone) => {return phone.price<30000})
console.log(budgetphones);

// filter all smartphone with brand samsung
brands= smartphoneLists.filter ((phone) => {return phone.brand==='samsung'})
console.log(brands);

// filter all smartphones with color 'pink'

color= smartphoneLists.filter ((phone) => {return phone.colors.includes('pink')})
console.log(color);



// using map for brand 

const brand = smartphoneLists.map((phone) =>{return phone.brand });
console.log(brand);
console.log(new Set(brand));  // remove dublicate using set (samsung)
console.log(Array.from(new Set(brand)));  // making array 


// make a array of smartphone which shows prices

const prices= smartphoneLists.map((phone )=>{return phone.price})
console.log(prices);

// make a array of smartphones which show 10% of discount price
const pricess=smartphoneLists.map((phone)=>{return phone.price*0.9})
console.log(pricess);

const pri= smartphoneLists.map ((phone)=>{return phone.brand +' '+phone.model}) // price model and brand together with space btw them
console.log(pri);

