//* ===================================================
//*                 Checkout Page Solution
//*  map filter, dest,spread ===================================================
//!table da kullanılacak değişkenler
const shipping = 15.0;
const tax = 0.18;

let sepettekiler = []

fetch("./sepettekiler.json").then((a)=>a.json()).then((a)=>console.log(a))
