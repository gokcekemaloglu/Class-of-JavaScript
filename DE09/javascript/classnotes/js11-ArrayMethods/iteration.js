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

console.log("*************************");

//*********************************ORNEK******* */

//* p => prices dizisinin her bir elemanı
//* i => indis
//* prices=> prices dizisidir. farklı isim kullanılabilir
// herbir elemanını 2 ile çarp ve bütün dizi elemanlarını topla


const prices2=[110,250,50,90]

let toplam1=0

prices2.forEach((p,i,prices)=>{
    toplam1+=p
    console.log(`${i+1}. toplam ${toplam1}`);

    prices[i]=p*2

    //* şu şekilde diziyi kalıcı olarak değiştirmiş olduk
})

console.log(prices2);

console.log("**************************");


//* Örnek: Meyveler dizisindeki elemanların harf sayısı 3'ten büyük olan meyveleri büyük harfe çevir







console.log("**************************");


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

console.log("***********************");

//*örnek
//* fiyatlar dizisindeki ürün fiyatlarinın 250 TL altında olanlarına
//* %50 zam, diğerlerine de %20 zam yapılmak isteniyor. Ayrıca
//* zamli fiyatlar kalıcı olarak diziye işlenmek isteniyor fiyatlar[1]=eski fiyat*1.5 gibi
//* 1. ürünün zamlı fiyati 150 TL gibi
//* p => prices dizisinin her bir elemanı
//* i => indis
//* array=> fiyatlar dizisidir.

const fiyatlar = [100,300,50,90]

fiyatlar.map((p,i,array)=>{

    if (p<250) {
        array[i]=p*1.5 
    }else{
        array[i]=p*1.2
    }
})

console.log(fiyatlar);

console.log("***********************");


//?-------------- ÖRNEK -------------------
//? tlPrices dizisindeki rakamlarin Euro ve dolar
//? karsiliklarini hesaplatarak yeni dizilere kaydediniz
// toFixed(sayı) komutu virgüllü sayılarda kullanılır, aldığı sayı parametrei kadar virgülden sonra eleman bırakır
//! toFixed()= kullandığınız sayıları string e çevirir, tekrar number yapmak istersek, önlerine Number yazarız (ya da + koyarız)

const tlPrices = [100, 150, 200, 80, 50];
const dolar = 27.5;
const euro = 29.5;

const dolarPrices=tlPrices.map((para)=>+(para/dolar).toFixed(2))
console.log(dolarPrices);

const euroPrices=tlPrices.map((para)=>Number((para/euro).toFixed(2)))
console.log(euroPrices);



console.log("*******************************");



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


console.log("*******************************");









