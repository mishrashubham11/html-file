const myArr= [ 543, 'hello', true, console.log, [1,2,3]]
console.log(myArr)

// aray of movies

const movies= ['tere naam', 'animal', 'pk','RRR', '3idiot', 'deja vu', 'shaitan']
console.log(movies.length); //also work with string


// indexing

console.log(movies[4]); // also work with string
console.log(movies.at(3));
// the small bracut show its a function
movies[4]= 'the shaitan redemtion'
console.log(movies);
//  this add new thing at 4 index replace with dejavu

// negetive index
console.log(movies.at(-4));


 
// SLicing
console.log(movies.slice(1,4));
//  which we wnt from index then print just one more for that just like 4 is 3idiot but it gives rrr


const price='₹536.872'
console.log(price.slice(1)); // not print ₹ print all accept it

const prices='₹6668.758/-'
console.log(prices.slice(1,-2));



// adding new elements
movies.push('the dark knight')   // the push add ele at last
movies.unshift('the god')       //the unshift add movie at the first
console.log(movies);


//removing element from array
movies.pop()   //remove last ele
movies.shift()  //remove first ele
console.log(movies)



//alrounder functions

movies.splice(3,2, 'batman','superman')  // 3 indicates array and 2 indicates no. of ele  splice deleted with 3 and 4 index batman superman add at array in that position
console.log(movies);
// if we put o after index the it not del ele of that index and add name after that we given
movies.splice(3,0,'flash','thor')
console.log(movies);