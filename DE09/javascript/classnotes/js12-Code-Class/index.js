// Dizi Metodları
// pop(): Dizinin son elemanını siler
// shift(): Dizinin ilk elemanını siler
// push(): Dizinin sonuna eleman ekler
// unshift(): Dizinin başına eleman ekler
// reverse(): diziyi tersine çevirir
// splice(): (başlangıç indexi,kaç elemanın silineceği,eklenecek elemanlar(item1,item2,item3,...))
// sort(): sıralama yapar(stringlerde ifadelerde ascii kodlara göre alfabetik sıralama ) 
// sort((a,b)=> a-b )
// includes():içeriyor mu(true-false)
// indexOf():değerin kaçıncı indexte olduğunu gösteriyor
// join(" "):bir dizideki elemanları birleştierek stringe çeviriyor
// slice(): diziden bir parçayı almamaızı sağlar 
// concat(): iki diziyi birleştirir
// every: dizi içiindeki her elemean için bir callback fonksiyon çalıştırır.ve call fonksiyondaki şartı sağlıyosa true değer çevirir


// const numbers = [45,16,34,23]
// numbers.every((num)=>num > 18) //false

// some: dizi içiindeki her elemean için bir callback fonksiyon çalıştırır. ve  fonksiyondaki en az bir şartı sağlıyosa true değer çevirir

// const numbers = [45,16,34,23]
// numbers.some((num)=>num > 18) //true

/*-----------------------------------------*/

// map: bir dizi için bir callback fonksiton çalıştırır. vd her eleman için o fonksiyondan çıkan sonucu bir diziye aktarır.
// forEach: bir dizi için bir callback fonksiton çalıştırır. Geriye bir değer döndürmez
// filter: bir dizi için bir callback fonksiton çalıştırır. Verilen koşulu sağlayan bir değer döndürür
// reduce: dizidekii elemanları toplayarak tek bir değere döndürür

/*-----------------------------------------*/

//! 1.Bir dizideki elemanların ortalamasını bulan fonksiyon

const numbers=[34,56,56,87,90]

const toplam= numbers.reduce((a,b)=>a+b,0)

console.log(toplam/numbers.length);

console.log("****************");

//! 2.yol:

let sum=0

const average =() => {
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i]
        
    }
    return toplam
}

console.log(average()/numbers.length);

console.log("****************");

//! 3. yol:

function ortalamaBul(dizi) {
    let toplam1 = 0;
    dizi.forEach(sayi => {
        toplam1 += sayi;
    });
    const ortalama1 = toplam1 / dizi.length;
    return ortalama1;
}
const ortalama1 = ortalamaBul(numbers);
console.log(ortalama1);

console.log("****************");


//2- Girilen bir cümledeki kelime sayısını bulan fonksiyonu yazın

sentence="Merhaba Cohort     DE-09"

function countWords(newSentence) {
    //const sumOftheWordsCount = newSentence.split(" ").length
    //birden fazla boşluk içeriyorsa sumLetterdaki kod
    const sumLetter = newSentence.trim().split(/\s+/).length

    //return sumOftheWordsCount
    return sumLetter
}

console.log(countWords(sentence));

console.log("*****************");

//! 3- Size bir  cümle verildi. "Clarusway" kelimesini bulmanız ve şuna benzer bir cümle döndürmeniz gerekir:
//? Clarusway'i bulamıyorsanız, "I can't find Clarusway :(" yazın.
//? findClarusway("I am finding Clarusway !") ➞ "I found Clarusway at 4!"


test: "I like Clarusway"  // Output : I found at Clarusway at 3! 
test : "I like bootcamps " // Output  I can't find Clarusway :(

//!1. Yol

function findClarusway(sentence) {
    if (sentence.includes("Clarusway")) {
        return `I found at ${sentence.split(" ").indexOf("Clarusway")+1}`
    } else {
        return `I can't find Clarusway :(`
    }
}

const sentence1 = "I like Clarusway"

console.log(findClarusway(sentence1));

console.log("**************************");

//!2. yol


// function findClarusway(sentence) {
//     let words = sentence.split(" ");
//     let index = words.indexOf("Clarusway");
//     if (index === -1) {
//         return "I can't find Clarusway :("
//     } else {
//             return `I found Clarusway at ${index}!`
//     }
// }
// console.log(findClarusway("I am finding Clarusway !"));


console.log("*************************");


//! 4-Bir öğe dizisini alan, tüm yinelenen öğeleri kaldıran ve eski diziyle aynı sırada yeni bir dizi döndüren bir fonksiyon oluşturan program
// removeDuplicated([1,0,1,0,1]) // Output [1,0]
// removeDuplicated(["the","small","cat","the","cat"]) // ouput["the","small","cat"]

//* 1.Yol:

// function removeDuplicated(array) {
//     let newArray = [];
// for (let i = 0; i < array.length; i++) {
//     if (!newArray.includes(array[i])) {
//         newArray.push(array[i]);
//     }
// }
// return newArray
// }

// console.log(removeDuplicated([1,0,1,0,1]));
// console.log(removeDuplicated(["the","small","cat","the","cat"]));

// console.log("*************************");

//*2. Yol:

function removeDuplicated(arr) {
    const duplicatedArray = []
    for (let i of arr) {
        if (!duplicatedArray.includes(i)) {
            duplicatedArray.push(i)
        }
        
    }
    return duplicatedArray
}

console.log(removeDuplicated([1,0,1,0,1]));
console.log(removeDuplicated(["the","small","cat","the","cat"]));


console.log("*************************");

//*3. Yol:

const arr = ["elma", "armut", "kayisi", "elma", "fener", "umut", "alex"];
const newArr = [];

const findSame = function (x) {
  for (let item of arr) {
    if (newArr.includes(item)) continue;
    newArr.push(item);
  }
  console.log(newArr);
};

findSame(arr);

console.log("*************************");

//! 5-Bir dizide ilk harfi A ile başlayan elemanları yeni bir diziye alan fonksiyon 

//* 1. Yol:

const words = ["Apple", "Banana", "Orange", "Avocado", "Grape", "Apricot"];

function nameA(array) {
    let newWords = [];
    for (let i = 0; i < array.length; i++) {
        
        if (words[i].startsWith("A")) {
            newWords.push(array[i])
        }        
    }
    return newWords
}

console.log(nameA(words));



console.log("*************************");

//* 2.Yol

const result = words.filter(word => word.startsWith('A'));
console.log(result);


console.log("*************************");

//* 3.Yol

let newArr1 = []
words.filter((a)=>{
    if(a.slice(0,1) == "A"){
        newArr1.push(a)
    }
})
console.log(newArr1);

console.log("*************************");

function filterWords(arr) {
    const newArr2=arr.filter((word)=> word[0]==="A")
    return newArr2
}

console.log(filterWords(words));

console.log("*************************");

//! 6-bir dizide verilen  maaşlara %10 zam yapılacak ama hala 20000 altında kalanlara ek ödeme planlanacak
// a- Kaç kişi zam olsa bile 20000 altında kalıyor

//* 1.yol


let salaries=[18000,13000,17000,24000,18500,21000,19300]

function asgari(maas) {
   const maasA = maas.map((a)=>(a*1.1).toFixed(2)).filter((a)=> a<20000)

    return maasA
}
 console.log(asgari(salaries));

console.log("*************************");

//* 2.yol

let belowunder20K = salaries.filter(salary => salary * 1.1 <20000).length

console.log(belowunder20K);



console.log("*************************");

// b- Maaşı zamlı halde 20000in altında kalanlara patronumuz belki bir güzellik yapar. 20000 altında kalanları 20000'e tamamlayabilir ama ne kadar bütçe ayırmalı

const butce= salaries.filter((b)=> b*1.1 < 20000).map((a)=>Math.round(20000-(a*1.1))).reduce((a,b)=>a+b)

console.log(butce);

console.log("*************************");

//* 2.Yol

let addBudget=salaries.map((salary)=>{
    let increased = salary * 1.1
    return increased < 20000 ? 20000-increased : 0
}).reduce((sum,payment)=> sum + payment ,0)

console.log(addBudget);

console.log("*************************");

// EXTRA QUESTIONS

//!1-Bu şekilde girilen stringi "altı,bir,iki,dört,beş,üç,yedi,sekiz,dokuz"
//! 612453789   bu hale dönüştüren program


console.log("*************************");
//!2-Bir dizi içindeki sayıları asal olanlarını filtreleyen bir  fonksiyonu oluşturun.(filter ile yapılması önerilen)

const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("*************************");
//!3-Bir diziyi tersine çeviren bir map fonksiyonu oluşturun. 
const originalArray = [1, 2, 3, 4, 5];

console.log("*************************");
//!4 -verilen sayıyı yazıya çeviren program





console.log("*************************");


    
