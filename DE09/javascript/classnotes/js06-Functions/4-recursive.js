// ? ====================================================
// ?              FONKSİYONLAR - RECURSIVE
// ? ====================================================

//* Kendi kendi çağıran fonksiyona recursive fonksiyon denilir.

//* Özellikle karmaşık hesaplamaların kodlamasını kolaylaştırmak için kullanılır.
//* Ancak, dikkatli kullanmak gerekir. Yoksa stack overflow hatası alınabilir.

//!Örneğin; sayma sayılarının ilk 6 teriminin toplamını bulunuz

const add=(n)=>{
    let toplam = 0
    for (let i = 1; i <= n; i++) {
        toplam = toplam + i
        
    }
    return toplam
}

console.log(add(6));

//*aynı soruyu recursive ile çözelim

const toplamlar=(n) => {

    if (n < 1){

        return n

    } else 

    return toplamlar (n-1) + n
    
}

console.log(toplamlar(6));

//*ORNEK: Girilen n. terimdeki Fibonacci sayısını yazdıran fonksiyonu recusive olarak kodlayınız.

console.log("***********4-RECURSION********");

//? FIBONACCI terimleri:   1, 1, 2, 3, 5, 8, 13, 21, 34 ...
//!fibonacci dizisindeki  n. terimi  bulma fonksiyonu

const FibonacciNumbers=(n)=> {
    if (n < 3) {
        return 1
    } else {
        return FibonacciNumbers(n-1) + FibonacciNumbers(n-2)
    }
    
};

console.log(FibonacciNumbers(6));




