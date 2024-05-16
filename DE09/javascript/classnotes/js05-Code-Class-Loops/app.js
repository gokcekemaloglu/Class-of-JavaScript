// And Operatörü

// & Truthy value with &&

console.log(2 && 5); // sonuna kadar gider true olduğu için 5 gösterir

console.log(Boolean(2 && 5)); 

// & Falsy value with &&
console.log( 0 && 7) //0
console.log( '0' && 7) // 7
console.log(Boolean(0))


// & object / Array  with &&

console.log({} && "Hello"); //Hello
console.log([] && "Hello"); //Hello

console.log(Boolean([])) //true
console.log(Boolean({})) //true 


