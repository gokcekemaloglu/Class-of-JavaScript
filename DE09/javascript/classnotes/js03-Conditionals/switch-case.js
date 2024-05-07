//! ---------------------------------------------
//! ****************** SWITCH - CASE ***********
//! ---------------------------------------------

// Switch -case bloğu if-else gibi kullanılacak if-else alternatif bir yöntemdir.
// Burda bir şart durumunun karşılacağı birden fazla ihtimale göre ortaya çıkabilme ihtimali olan her duruma karşılık bir yapı verilir .
// Switch de önemli olan şey;  bir şartla karşılaştığı zaman onu uygular ve devam eder işte o noktada çıkmasını istiyoruz ve kod blogunu kırıp çıkmazsak sadece sonuncu değeri yazar
//! bu bloktan çıkması için break kelimesi ile switch alanından çıkmasını sağlarız

// switch ( değişken){

//     case durum1:
//         değişken durum1 e eşit oluğunda yapılacaklar  break
//     case durum2:
//         değişken durum2 e eşit oluğunda yapılacaklar break
//         .
//         . 
//         . 
//     case durumN:
//         değişken durumN e eşit oluğunda yapılacaklar  break
//     default:
//         yukarıdaki durumların hiçbiri gerçekleşmediğinde yapılacaklar
// }


console.log("-------------------------------------");
console.log(" ==SWİTCH-CASE== 4 Islem Hesap Makinesi ");
console.log("-------------------------------------");

// const sayi1 = +prompt("1. sayıyı giriniz");
// const islem = prompt("+,-,*,/ işlemlerinden birini giriniz");
// const sayi2 = +prompt("2. sayıyı giriniz");

// let sonuc

// switch (islem) {
//     case "+":
//     sonuc = sayi1 + sayi2
//         break;
//     case "-":
//     sonuc = sayi1 - sayi2
//         break;
//     case "*":
//     sonuc = sayi1 * sayi2
//         break;
//     case "/":

//     if (sayi2!=0) {
//         sonuc = sayi1 / sayi2
//     } else {alert("payda 0 olamaz")};
//     break;

//     default:
//         alert("yanlış işlem girdiniz");
//         break;
// }

// console.log(`${sayi1} ${islem} ${sayi2} = ${sonuc}`);

//***************KARIŞIK SORULAR */

//? ornek: maasınız asgari ücretten düşük ve eşitse maaşınıza %25 zam yapılsın, değilse maaşınıza %10 zam yapılsın. ternary ile 

// const asgariUcret=17000
// const maas= +prompt("maasınızı giriniz")

// const zamliMaas= maas <= asgariUcret ? maas*1.25 : maas*1.10
// console.log(zamliMaas);

//  maas > 30000
//    ? maas*1.10
//    : maas > 20000
//    ? maas*1.20
//    : maas*1.50;

// if (maas<30000 && maas>2000) {
//     mass*1.25
// }  bu ileride işlenecek

//?Ornek:10 aylık maasınız borcunuzdan 5000 ve üstü kadar fazlaysa kredi alabilirsiniz, aksi durumda alamazsınız

const Schuld= 30000
const Gehalt= 3000

console.log(Gehalt*10-Schuld>=5000 ? "kredi alabilir" : "kredi alamaz");

//? ORNEK2: console'dan (kullanıcıdan) 3 tamsayi alarak bunlarin en buyugunu yazdiriniz.

const n1 = 3
const n2 = 5
const n3 = 12

//? kosullarin logical operatorler yardimiyla birleştirilmesi

if (n1>n2 && n1>n3) {

    console.log("biggest", n1);

}else if (n2>n1 && n2>n3) {

    console.log("biigest", n2);

}else console.log("biggest", n3);

//*2.yöntem

const s1 = 300;
const s2 = 569;
const s3 = 158;

let biggest1=s1

if (s2 > biggest1) {
    biggest1=s2
    if (s3 > biggest1) {
        biggest1=s3
    }
}

console.log(biggest1);




