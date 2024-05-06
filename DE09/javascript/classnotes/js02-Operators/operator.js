
// * =======================================================
// *                 ARİTMETİK OPERATÖRLER
// * =======================================================


const kola=50;
const cips=30;
const dondurma=20;

console.log(kola+cips+dondurma);

let toplam=kola+cips+dondurma

console.log(toplam);

//!bir arttır

toplam++
toplam=toplam+1

console.log(toplam);

//!10 arttır

toplam=toplam+10

toplam+=10 //toplam=toplam+10 ikisi aynı şeyi anlatıyor
console.log(toplam);

//? + operatörü string concatination işlemi de yapar

const sayi1="3"
const sayi2=8

console.log(sayi1 + sayi2);
console.log(sayi1 - sayi2);


// ` backticks`  bunun içine ne yazarsan aynısını console'a yazdırır. (Template literals)

const ad="erkan"
const soyad="sevim"

console.log(ad + soyad); //erkansevim

console.log("adım soyadım" + " " + ad + " " + soyad);

console.log(`adım soyadım ${ad} ${soyad}`);

const dogumTarihi=1979

console.log(`${ad} ${soyad} ${dogumTarihi} doğumludur`);
console.log(`${ad} ${soyad} ${2024 - dogumTarihi} yaşındadır`);



//? Bazı fonksiyonlar

// Math.floor();  //* her zaman en yakın alt tamsayıya yuvarlar
// Math.ceil();  //* her zaman en yakın üst tam sayıya yuvarlar
// Math.trunc(); //* sayının tam kısmını alır.
// Math.round(); //* en yakın tam sayıya yuvarlar.

// Math.random(); //* 0 ve 1 arasında rasgele sayı üretir.

//toFixed(x)//*virgülden sonra x adet basamak bırak demek
const ab=1.3
console.log(Math.trunc(ab));
console.log(Math.floor(ab));
console.log(Math.ceil(ab));
console.log(Math.round(ab));
console.log("************");

const ba=-1.3
console.log(Math.trunc(ba));
console.log(Math.floor(ba));
console.log(Math.ceil(ba));
console.log(Math.round(ba));

document.write(Math.trunc(ba))

// RANDOM: rastgele
// rastgele sayı üretmek için kullanılır
// 0-1 arasında bir sayı üretir

console.log(Math.random());
console.log(Math.ceil(Math.random()*20));

const randomSayi=Math.random()
console.log(randomSayi);
console.log(randomSayi.toFixed(2));

console.log(Math.random().toFixed(4));

//*ARTTIRMA AZALTMA//

let a=5

console.log("ilk" , a++);//5
console.log("ikinci" , a);//6

let b=a++
console.log(b);//6
console.log(a);//7

let c=10
console.log("ilk" , ++c);//11
let d=++c
console.log(d);//12
console.log(c);//12

let e=33
console.log(--e);//32
console.log(e--);//32
console.log(e);//31

//! e'yi 5 arttır
// e=e+5 //31

console.log(e+=5);//36

//! e'yi 5 ile çarp

console.log(e*=5);//180

// console.log(number = number +i2) 
// console.log(number -= i2) 
// console.log(number *= i2) 
// console.log(number /= i2)
// console.log(number %= i2) 


//? ÇARPMA ve ÜS ALMA

const PI =3.14
const r=5

const alan=PI*r**2
console.log(alan);


// Math pow (power) bir sayının kuvvetini almak için kullanılır

console.log(PI*Math.pow(r,2));

//Math.sqrt : verilen değerin karekökünü verir

console.log(Math.sqrt(144));
console.log(144**(1/2));

//***************MOD ALMA **************/

const number=456

console.log("birler", number%10);//6
console.log("onlar", Math.trunc(number/10)%10);//5
console.log("yüzler", Math.trunc(number/100)%10);//4


// * =======================================================
// *                 KARŞILAŞTIRMA OPERATÖRLERİ
// * =======================================================

const sayi4=4;

console.log(sayi4 == 4);//eşit mi?
console.log(sayi4 === 4);//eşit mi?
console.log(sayi4 == "4");//true
console.log(sayi4 === "4");//false number olan 4 olduğu için false diyor

console.log(sayi4!=5);//true 5 e eşit değil mi

console.log(sayi4 != "4");//false hayır canım eşit demek

console.log(sayi4 > 4);//false
console.log(sayi4 >= 4);//true

/* ------------------------------------------------------- */
/*        MANTIKSAL ÖPERATÖRLER (logical operators)      */
/* ------------------------------------------------------- */

console.log("******************");

//?TRUE

console.log(Boolean(5));
console.log(Boolean(5.8));
console.log(Boolean(-5.8));
console.log(Boolean([1,2,5]));

//? 5 FALSY

console.log(Boolean(0));
console.log(Boolean(null));
console.log(Boolean(""));
console.log(Boolean(undefined));
console.log(Boolean(NaN)); //NaN:Not a number

const v1= false || 0 || 12.6 || false || null
console.log(v1);//12.6
console.log(Boolean(v1));//true

const v2= false || 0 || null || undefined || NaN
console.log(v2);//NaN
console.log(Boolean(v2));//false

const v3= 5 && 6 && true && 0 && ""
console.log(v3);//0
console.log(Boolean(v3));//false

const v4= 5 && 6 && true && -7
console.log(v4);//-7
console.log(Boolean(v4));//true
console.log(!v4);//false  v4'ün değili demek


console.log("***************");
/* ---------------------------------- */
/*           TİP DÖNÜŞÜMLERİ          */
/* ---------------------------------- */

const para=Number("1000") + Number("900")

console.log(para);

console.log(para+15);
console.log(Number(para)+15);

let aa = 10
let bb = '5'

console.log('Toplama', aa + bb) //105
console.log('Çıkarma', aa - bb) // 5
console.log('Çarpma', aa * bb) // 50
console.log('Bölme', aa / bb) //2

console.log(aa+ Number(bb));//15

console.log(typeof (bb));//string
console.log(typeof Number(bb));//number

console.log(bb**2);//25

//******* */
let ee="123.65"
console.log(parseInt(ee)); //tam kısmı alır number'a çevirir
console.log(parseFloat(ee)); //string i direk number'a çevirir
//******* */



const isim="ipek"

console.log(isim+15);
console.log(Number(isim)+15);

const sayi="1000"

console.log(sayi+15);
console.log(String(sayi),15);

// //* .toString() Metodu numberları stringe çevirir

let f=123.45

console.log(f.toString()); //bu satırda string e çevirir
console.log(f);

//* + ile Number a çevirebiliriz

console.log(+ee);
let i=+ee

console.log(typeof i);
console.log(typeof ee);

//* .toFixed() noktadan sonra kaç basamak alacağımızı belirtir, Sayıyı stringe çevirir

let z=0.345675678

console.log(typeof(z.toFixed(2))); 
console.log(typeof(+z.toFixed(2))); //+ string i number a çevirir

//* prompt komutu da toFixed gibi kullanılan sayıyı string yapar.

// const age= prompt("lütfen yaşınızı giriniz")
// console.log(age.keyCode==65); 
// console.log(typeof age); //string

// const age2= +prompt("lütfen yaşınızı giriniz") //önüne + koyunca string i number yaptı
// console.log(typeof age2); //number

//* Null Undefined NaN

console.log(typeof null); //object
let n=null

console.log(Boolean(n)); //false

console.log(null-5); //-5

console.log(null==undefined); //true
console.log(null===undefined); //false

console.log(Number("asdf")); //NaN
console.log(Number("1234")); //1234
console.log(null===null); //true

// !GENEL KÜLTÜR

console.log(Number("0x11"));//x=hexa 16 lık taban 11=1.16^0+1.16^1
console.log(Number("0b101")); // b=binary 2 lik taban 11=1.2^0+0.2^1+1.2^2
console.log(Number("0o11")); //o=octal 8 lik taban 11=1.8^0+1.8^1






