//! Decleration

islem(10,13)


function islem (par1,par2,par3){
    console.log(par1);
    console.log(par2);
    // console.log(par3); //undefined

    return par1+par2+par3

}

let add = islem(3,4,5)
console.log(add);

//!  Expression

const topla1=function (a,b) {
    return a+b
}

console.log(topla1(3,5));
// console.log(typeof(topla1)); //function


//!  Arrow

const topla2 = (a,b) => a+b;

console.log(topla2(3,5));

let isim = "ashley miller"

console.log(isim[8]);
console.log(isim.length);




