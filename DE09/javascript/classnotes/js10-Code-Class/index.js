// let isimler = ["harvey", "ashley","tolga", "fatih", "gokce"]
// let bos = []


// console.log(typeof(isimler[0]));
// console.log(isimler.length);
// console.log(bos.length);
// console.log(Boolean(bos));

// bos.length ? console.log("veri geliyor") : console.log("veri gelmiyor."); 

// for, while, do while, forEach dizilerin elemanlarını yazmak için yöntemlerdir.

// for (let i = 0; i < isimler.length; i++) {
//     console.log(isimler[i]);
    
// }

// veya


// let sayac=0

// while (sayac < isimler.length) {
//     console.log(isimler[sayac]);
//     sayac ++
// }

// veya

// isimler.forEach(isim=>console.log(isim)) 


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

//! 4- Girilen bir cümledeki kelime sayısını bulan bir fonksiyon yazınız.

let sentence = "Girilen bir cümledeki kelime sayısını bulan bir fonksiyon yazınız"

function numOfWord(arr) {
    return arr.split(" ").length        
}
console.log(numOfWord(sentence));





console.log("*********************");


