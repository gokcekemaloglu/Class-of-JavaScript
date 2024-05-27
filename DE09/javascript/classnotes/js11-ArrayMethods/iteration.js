//! for loop=> Bir dizi üzerinde iteration yapmanın orjinal yollarından biridir.	
//? forEach=> Bir dizi üzerinde iteration yapmak için daha az kod içeren daha yeni bir yoldur.
//! for loop=>Performansta daha hızlıdır.	
//? forEach=> Performansta geleneksel döngüden daha yavaştır.
//! for loop=> Break ifadesi döngüden çıkmak için kullanılabilir.	
//? forEach=> Break ifadesi, geri arama işlevi nedeniyle kullanılamaz.



//* ======================================================
//*                   FOREACH METHOD
//! NOT: forEach metodu void bir metottur. (Yani herhangi bir değer döndürmez.log(forEach..)=undefined) terminal işlemdir, diziyi fonksiyon içinde yazdırır ve tüketir bitirir. Ve siz ekstra bir şey istemedikçe diziyi değiştirmez.

//*======================================================

//* Örnek1:

const prices1=[110,250,50,90]

prices1.forEach((osman)=> console.log(osman))

console.log(prices1); // orjinal diziyi bozmaz

let toplam=0

const terminal= prices1.forEach((a)=> console.log(toplam += a))

console.log(terminal); //undefined


//* ======================================================
//*                       MAP METHOD
//!map yapılan değişikliği bir diziye atıp, bunu döndürebilir,  foreach gibi tüketmez.
//* ======================================================

//*-------------- ÖRNEK -------------------
//* names dizisinin içindeki her ismi büyük harf olarak
//* yeni bir diziye saklayalım.


const names=["ayca","kemal","mustafa","ayse","fatih","halil","umut","gökçe","mehmet"]

const yeni= names.map((a)=>a.toUpperCase())

console.log(yeni);
console.log(names);

// names.map((a)=>a.toUpperCase()).forEach((a)=>console.log(a))

// console.log(names)

//! her elemanın sadece ilk harfini büyüttük
const yeni2=names.map((a)=>a.slice(0,1).toUpperCase()+a.slice(1))

console.log(yeni2);

//* ======================================================
//*                       FILTER METHOD
//* ======================================================
//* prices array"inde fiyatı 200 TL den az olanlari ayri
//* bir diziye saklayalim.

const prices=[200,500,100,180]

const ucuzlar= prices.filter((a)=> a<200)

console.log(ucuzlar);

prices.filter((a)=> a<200).forEach((b)=>console.log(b))

console.log(prices);

prices.filter((a)=> a<200).map((c)=>c*2).forEach((a)=>console.log(a))









