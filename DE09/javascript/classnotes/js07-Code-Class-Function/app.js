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

console.log("*******************");

//!  Arrow

const topla2 = (a,b) => a+b;

console.log(topla2(3,5));

let isim = "ashley miller"

console.log(isim[8]);
console.log(isim.length);

console.log("*******************");

//! SORU1- Celsius değerini Fahrenheit değerine dönüştüren bir fonksiyon yazınız? (Celsius × 9/5) + 32 = Fahrenheit

const convert = (c) => (c * 9 / 5) + 32 ;

console.log(convert(23));

console.log("*******************");

// başka çözüm

const toFah=function(C){
    return (C*(9/5))+32;
}

console.log(toFah(50));

console.log("*******************");
// başka çözüm


function abc(celcius){
    return (celcius * 9/5) + 32;

}

console.log(abc(0));
console.log(abc(32));
console.log(abc(100));

console.log("*******************");

//! 2- Belirli bir string ifadenin tersini bulan fonksiyonu yazınız?




const string = "Hello world!"
function reverseString(str) {
    
    let newStr=""
    
    for (let i = str.length-1; i >= 0; i--) {
        
        newStr += str[i];
    }
    return newStr;
    
}

console.log(reverseString(string));



console.log("*******************");
// başka yol

const cevir = function (x) {
    let ceviri = " ";
    for (i = x.length - 1; i >= 0; i--) {
        ceviri += x[i];
    }
    return ceviri;
};

let sonuc = cevir("elma");
console.log(sonuc);

console.log("*******************");
// başka yol


// const String = "Rengin";
// const tersYaz = tersCevir(String)
// console.log(tersYaz)

//! 3- Belirli bir string ifadenin palindrome olup olmadığını bulan fonksiyonu yazınız?


const string1 = "ey edip adanada pide ye"

function isPalindrome(str) {
    
    let ters=""
    
    for (let i = str.length-1; i >= 0; i--) {
        
        ters += str[i];
    }
    return ters==str ? "palindromdur" : "palindrom değildir";

   // return ters==str //true

}

console.log(isPalindrome(string1));


console.log("*******************");

//başka yol

// let kelime = prompt("Lütfen bir kelime yaziniz");

// const polindrom = function (kelime) {
//   let ceviri = "";
//   for (i = kelime.length - 1; i >= 0; i--) {
//     ceviri += kelime[i];
//   }
//   return ceviri;
// };
// kelime == polindrom(kelime)
//   ? console.log(`${kelime} polindrom bir ifadedir`)
//   : console.log(`${kelime} polindrom bir ifade degildir`);

console.log("*******************");

//! 4- Bir sayıyı tersine çevirecek bir fonksiyon yazın.

//* 1.yol


const ters = (num) => {

    let numStr=num.toString()
    let reverse=""
    for (let i = numStr.length-1; i >= 0; i--) {
        reverse += numStr[i];
    }
    return parseInt(reverse)
}

console.log(ters(456));



console.log("*******************");

//* 2.yol
const ters2=(num)=>{

    let reverse=0

    while (num!=0) {

        reverse = reverse * 10

        reverse += num%10

        num=Math.trunc(num/10)
    }
    return reverse
}

console.log(ters2(1234));

console.log("*******************");

// başka yol

// let num = prompt("Lütfen bir sayi giriniz");

// const tersCevir = function (num) {
//   let ceviri = "";
//   for (i = num.length - 1; i >= 0; i--) {
//     ceviri += num[i];
//   }
//   return ceviri;
// };

// let result = tersCevir(num);
// console.log(result);


console.log("*******************");

//! 5- Belirli bir sayının pozitif tam bölenlerinin toplamını bulan fonksiyonu yazınız?

function bolenToplam(sayi1) {
    let toplam=0
    
    for (let i = 1; i <= sayi1; i++) {
        if (sayi1%i==0) {
            toplam += i
        } 
}
    return toplam
}

console.log(bolenToplam(240));



console.log("*******************");

//! 6- İlk 2 parametreyi çarpıp 3. parametre üssüne alan fonksiyonu yazınız?

function islem(a,b,c) {
   let  sonuc=(a*b)**c
    return sonuc
}

console.log(islem(2,3,4));



console.log("*******************");

//! 6- 100-1000 e kadar olan sayılardan polindrom olanlarını belirten/yazan program


const reverseNumber = (num) => {

    let numStr=num.toString()
    let reverse=""
    for (let i = numStr.length-1; i >= 0; i--) {
        reverse += numStr[i];
    }

    return parseInt(reverse)==num ? `${num} sayısı polindromdur` : `${num} sayısı polindrom değildir`
}

for (let i = 100; i < 1000; i++) {
    
    // console.log(reverseNumber(i));
    
}

console.log("*******************");

//! 7-Yarıçapı verilen bir dairenin alan ve çevresini bulan program?

function circle(r) {
    let cevre= Math.PI*2*r
    let alan= Math.PI*r*r
    console.log(`${cevre} dairenin çevresidir ve ${alan} dairenin alanıdır`); 
}

circle(12)


console.log("*******************");

//? tellFortune adlı bir fonksiyon yazın:
//? 4 farklı parametre : jobTitle, geoLocation, partner, numKids.
//? falınızı ekrana şu şekilde verir: "Gelecekteki mesleğiniz *****'dir. ****'da yaşayacaksınız. **** ile evlenecek ve *** çocuk sahibi olacaksınız"

function tellFortune(j,g,p,k) {
    
    return (`Gelecekteki mesleğiniz ${j} dir. ${g}'da yaşayacaksınız. ${p} ile evlenecek ve ${k} çocuk sahibi olacaksınız"`);
}

console.log(tellFortune("boss","LA","Tim","4"));

console.log("*******************");

//başka yol

const tellFortune2 = function (jobTitle,geoLocation,partner,numKids) {

    let result = `Gelecekteki mesleğiniz ${jobTitle} dir. ${geoLocation}'da yaşayacaksınız. ${partner} ile evlenecek ve ${numKids} çocuk sahibi olacaksınız"`
    
    console.log(result("boss","LA","Tim","4"));
    
}


console.log("*******************");

//! 9- Write a function to calculate compound interest based on the principle amount
  // Function `compoundInt()` returns a final amount based on the compound interest formula provided principal amount, rate of interest per year, time on a yearly basis, and n as the number of times that interest is compounded per unit time.



  const compoundInt = function (principalAmount, intRate,time,n) {
    
    let result = principalAmount * Math.pow((1 + intRate / n), n * time);
    return result;
  }

  console.log(compoundInt(1000,0.2,1,4).toFixed(2));




console.log("*******************");

//başka yol

function compountInt(anaPara,faiz,sure,n){

    let r = faiz / 100;

    let a = anaPara ** ((1 + r) , (sure * n));

    return a;
}

console.log(compountInt(10,5,2,4).toFixed(2));


console.log("*******************");

//! 10- Mükemmel sayıyı bulan fonksiyonu yazınız.
  
  //? Bölen sayıları toplamı orjinal sayının 2 katına eşitse bu mükemmel sayıdır...(6,28,496)
  //? 6   = 1, 2, 3, 6 = 12  = 6*2
  //? 28  = 1, 2, 4, 7, 14, 28   = 56   = 28*2;


function pozBolTopl(num) {

    let toplam=0

    for (let i = 1; i <= num ; i++) {
        
        if (num%i == 0) {
            
            toplam += i;
        }
        
    }
    
    return toplam==num*2 ? `${num} mükemmel sayıdır` : `${num} mükemmel sayı değildir`;

}

console.log(pozBolTopl(6));
console.log(pozBolTopl(28));
console.log(pozBolTopl(42));
console.log(pozBolTopl(43));


console.log("*******************");

// başka çözüm

const muksayi = (sayi) => {
    let toplam = 0;
  
    for (let i = 1; i < sayi ; i++) {
      if (sayi % i == 0) {
        toplam += i;
      }
    }
    let sonuc=toplam==sayi ? "mükemmel sayıdır" : "mükemmel sayı değildir"

    console.log(sonuc);

}

muksayi(6)
muksayi(12)
muksayi(28)
muksayi(123)
muksayi(496)


console.log("*******************");






