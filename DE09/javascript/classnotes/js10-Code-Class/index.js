

let isimler = ["harvey", "ashley","tolga", "fatih", "gokce"]
let bos = []


console.log(typeof(isimler[0]));
console.log(isimler.length);
console.log(bos.length);
console.log(Boolean(bos));

bos.length ? console.log("veri geliyor") : console.log("veri gelmiyor."); 
console.log("*********************");

// for, while, do while, forEach dizilerin elemanlarını yazmak için yöntemlerdir.

// for (let i = 0; i < isimler.length; i++) {
//     console.log(isimler[i]);
    
console.log("*********************");
// }

// veya


// let sayac=0

// while (sayac < isimler.length) {
//     console.log(isimler[sayac]);
//     sayac ++
// }

// veya

// isimler.forEach(isim=>console.log(isim)) 


console.log("*********************");

//! 1- Belirli bir string ifadenin içindeki sesli harfleri bulan fonksiyonu yazınız?

// let hello = "hello world"

// function findVowels (str) {
//     let vowels = "aeiouıüö";
//     let newStr = [];

//     for (let i = 0; i < str.length; i++) {

//         if (vowels.includes(str[i].toLowerCase())) {
//             newStr += str[i]
//         }
//     }
//     return newStr;
// }
// console.log(findVowels(hello))
// console.log(findVowels("bugün hava çok güzel"))


console.log("*********************");
// veya başka çözüm

// let str = "Uzun zaman once uzak bir ulkede"
// let sesliHarfler = str.match(/[aeiouAEIOU]/g) //? Halil
// console.log(sesliHarfler);

console.log("*********************");
//! 2- Belirli bir string ifadenin içindeki rakamları bulan fonksiyonu yazınız? AI yazdırdı
let str = "Uzun zaman once uzak bir ulkede 1234567890";
function findNumbers(str) {
    let numbers = str.match(/[0-9]/g);
    return numbers;
}
console.log(findNumbers(str));

console.log("*********************");

//! 2- Bir dizi içerisindeki en büyük sayıyı bulan bir fonksiyon yazınız.

let sayi=[1,4,8,3,6,7] //8

function greatestNumber(number) {
    let maxNumber = number[0];
    for (let i = 1; i < number.length; i++) {
        if (number[i] > maxNumber) {
            maxNumber = number[i];
        }
    }
    return maxNumber;
}
console.log(greatestNumber(sayi));

console.log("*********************");

// hocanın çözümü

let arr =[1,2,30,8,5,4,0]

let max = (sayilar) => {
    let max = sayilar[0]
    
    for (let i = 0; i < sayilar.length; i++) {
        if (sayilar[i]> max) {
            max = sayilar [i]
        }
        
    }
    return max
}
console.log(max(arr))

let sayisi = [1,2,5,6,9,70,7,15]

sayisi.sort ((a,b)=>a-b) //? Alternatif çözüm
console.log(sayisi[sayisi.length-1]);

console.log("*********************");

//! 3- Bir dizi içerisindeki sayıları toplayan bir fonksiyon yazınız.

let dizi1 = [1,2,4,3,5,6,7,8,9]

let sumOfArray = (sayilar) =>{
    let toplam =0
    for (let i = 0; i < sayilar.length; i++) {
        toplam += sayilar[i]
        
    }
    return toplam
}

console.log(sumOfArray(dizi1));

console.log("*********************");


//! 4- Bir dizideki sayıların ortalamasını bulan fonsiyonu yazınız. 

let numbers = [1,2,3,4,5,6,7]

function averageOfArrow(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
        
    }
    return sum/arr.length
}

console.log(averageOfArrow(numbers));


console.log("*********************");

//! 5- Girilen bir cümledeki kelime sayısını bulan bir fonksiyon yazınız.

let sentence = "Girilen bir cümledeki kelime sayısını bulan bir fonksiyon yazınız"

function numOfWord(arr) {
    return arr.split(" ").length        
}
console.log(numOfWord(sentence));


console.log("*********************");

//! 6- Bir cümleyi alın ve kelimeleri ters sırayla birleştirerek yeni bir cümle oluşturun.

let sentence1 = "Javascript harika bir dil"; // "dil bir harika Javascript"

//Cümleyi kelimelerine ayır
let word = sentence1.split(" ");

//kelimeleri ters sırayla birleştir
let reversedSentence = word.reverse().join(" ");
console.log(reversedSentence);

console.log("*********************");



function reverseOfArray(arr) {
    let words = arr.split(" ")
    let newStr=""
    for (let i = 1; i <= words.length; i++) {
        newStr += words[words.length-i] + " "
        
    }
    return newStr
    
}

console.log(reverseOfArray(sentence1));

console.log("*********************");

function reverseOfArray(arr) {
    let words = arr.split(" ")
    let newStr=""
    for (let i = 1; i <= arr.length; i++) {
        newStr += arr[arr.length-i]
        
    }
    return newStr
    
}

console.log(reverseOfArray(sentence1));

console.log("*********************");


//! 7- Soru: Bir isim listesi oluşturmak istiyorsunuz. İlk başta boş bir diziyle başlayın. Kullanıcıdan klavyeden  isimleri alarak listeye ekleyin. Kullanıcı 'q' tuşuna basana kadar isim eklemeye devam edin. Kullanıcı 'q' tuşuna bastığında en son eklediği ismi listeden çıkarın ve sonuçları konsola yazdırın.

// const names = [];

// while (true) {
//   let name = prompt("Lütfen bir isim giriniz");
//   if (name === "q") {
//     names.pop();
//     break;
//   }
//   names.push(name);
// }
// console.log(names);

console.log("*********************");


//! 8- kullanıcının isim ve doğum tarihi değerlerini parametre olarak alan ve kullanıcın yaşını hesaplayan fonksiyonu function declaration ve arrow function ile yazınız

// hesapla("harvey", 2001) // output: "Harvey 23 yaşındadır"

// let ad = prompt("adınız")
// let yasınız = prompt("yasınız")

function hesapla(isim, tarih) {
  let yas = new Date().getFullYear() - tarih;
  return console.log(`${isim} ${yas} yaşındadır`);
}
hesapla("harvey", 2002);

const hesapla1 = (isim, tarih) => {
  let yas = new Date().getFullYear() - tarih;
  return console.log(`${isim} ${yas} yaşındadır`);
};

hesapla1("ashley", 2009);

console.log("*********************");


//! 9- isimler1 dizisin içerisindeki her ismi küçük harf olarak yeni bir diziye saklayınız.

const isimler1 = [
  "Ahmet",
  "mehmet",
  "ismet",
  "SAFFET",
  "Can",
  "Canan",
  "Cavidan",
];

const newa = [];

for (let i = 0; i < isimler1.length; i++) {
  const element = isimler1[i].toLowerCase();
  newa.push(element);
}

console.log(newa);

console.log("*********************");


//! 10- Bir sayının faktöriyelini hesaplayan bir fonksiyon yazınız.

function factorial(num) {
  let result = 1;

  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
}
console.log(factorial(3));

function factorial2(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial2(n - 1); //5*4*3*2*1
  }
}

console.log(factorial2(5));

console.log("*********************");


//! 11- kayıp sayıyı bulun?
const sal = [5, 2, 6, 1, 3, 7];
const findNumber = (arr) => {
  let total = ((arr.length + 1) * (arr.length + 2)) / 2;

  let arrTotal = sal.reduce((acc, curr, i) => {
    console.log("akümülatör", acc);
    console.log("Curr", curr);
    console.log("index", i);
    return acc + curr;
  });
  return total - arrTotal;
};
console.log("eksik sayı", findNumber(sal));

console.log("*********************");


// let dizi2 = [5,2,6,1,3,7];
// dizi2.sort((a,b)=>a-b)
// console.log(dizi2);

// for (let i = 0; i < dizi2.length; i++) {
//   //  [1, 2, 3, 5, 6, 7]
//   if(dizi2[i]!==dizi2[i+1]-1){
//     console.log(dizi2[i]+1);
//     break;
//   }
// }

console.log("*********************");


//! 12- let string="altı,bir,iki,dört,beş,üç,yedi,sekiz,dokuz"
//! 612453789   bu hale dönüştüren program

let string = "altı,bir,iki,dört,beş,üç,yedi,sekiz,dokuz";
let stringNumber = [];
const splitToNumber = (string) => {
  let newString = string.split(",");
  console.log(newString);
  for (let i = 0; i <= newString.length - 1; i++) {
    if (newString[i] === "bir") stringNumber.push(1);
    else if (newString[i] === "iki") stringNumber.push(2);
    else if (newString[i] === "üç") stringNumber.push(3);
    else if (newString[i] === "dört") stringNumber.push(4);
    else if (newString[i] === "beş") stringNumber.push(5);
    else if (newString[i] === "altı") stringNumber.push(6);
    else if (newString[i] === "yedi") stringNumber.push(7);
    else if (newString[i] === "sekiz") stringNumber.push(8);
    else stringNumber[i] = 9;
  }

  return stringNumber.join("");
};
console.log(splitToNumber(string));

console.log("*********************");


//! 13- Size bir dizi kelime verildi. "Nemo" kelimesini bulmanız ve şuna benzer bir dize döndürmeniz gerekir:
//? "[Nemo'yu bulduğunuz kelimenin sırası] 'nda Nemo'yu buldum!"

//? Nemo'yu bulamıyorsanız, "I can't find Nemo :(" yazın.

//? findNemo("I am finding Nemo !") ➞ "I found Nemo at 4!"

//? findNemo("Nemo is me") ➞ "I found Nemo at 1!"

//? findNemo("I Nemo am") ➞ "I found Nemo at 2!"

function findNemo(sentence) {
  if (sentence.includes("Nemo ")) {
    return "I found Nemo at " + (sentence.split(" ").indexOf("Nemo") + 1) + "!";
  } else {
    return "I can't find Nemo :(";
  }
}

console.log("*********************");


//! 14- Bir öğe dizisini alan, tüm yinelenen öğeleri kaldıran ve eski diziyle aynı sırada yeni bir dizi döndüren bir fonksiyon oluşturan program

// removeDups([1, 0, 1, 0]) ➞ [1, 0]

// removeDups(["The", "big", "cat"]) ➞ ["The", "big", "cat"]

// removeDups(["John", "Taylor", "John"]) ➞ ["John", "Taylor"]

function removeDups() {

  // Write your code here
  
  return dedupedArr;
}

console.log("*********************");


