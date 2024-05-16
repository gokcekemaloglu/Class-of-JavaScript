

// * =======================================================
// *                   KARAR YAPILARI
// *                    CONDITIONALS
// * =======================================================

// //************************ IF-ELSE ***********************

//! Dort İslem Hesap Makinası
//!----------------------------------------------------------

//? Prompt fonskiyonu ile console ortamında kullanıcıdan veri almak mümkündür.
console.log("-------------------------------------");
console.log("==IF-ELSE IF== 4 Islem Hesap Makinesi");
console.log("-------------------------------------");

//!propmt a girilen değerler string olarak algılanır. sayı olsun istiyorsak önüne ya Number yazmalıyız ya da + koymalıyız

// const sayi1=+prompt("1. sayıyı giriniz")
// const islem=prompt("+,-.*,/ işlemlerinden birini giriniz")
// const sayi2=+prompt("2. sayıyı giriniz")

let sonuc;

// if (islem=="+"){
//    sonuc = sayi1 + sayi2;
// } else if (islem=="-"){
//     sonuc = sayi1 - sayi2;
// } else if(islem=="*"){
//     sonuc = sayi1 * sayi2;
// } else if(islem=="/"){
//     if (sayi2!=0) {
//             sonuc = sayi1 / sayi2
//     } else {
//         alert("payda sıfır olamaz")
//     }       
// } else {
//     alert("yanlış işlem girdiniz")
// }

// console.log(sonuc);

//********** */

if (sonuc!=0) {  //sonuç 0 dışında herhangi bir değerken
    console.log("tebrikler bir değer elde ettiniz");
}

//? kısa 1. yol

if (sonuc) {
    console.log("tebrikler bir değer elde ettiniz");
}

//? kısa 2. yol (short circuit)
sonuc && console.log("komik olma kuzen Larry");

//* ornek
const age=12
const gender="erkek"
const health=true

if (age>=20 && gender=="erkek" && health==true) {
    console.log("askerlik yapabilir");
}else {
    console.log("askerlik yapamaz");
}
//askerlik yapamaz

