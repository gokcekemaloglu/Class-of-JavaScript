// ? ==========================================================
// ?                    FONKSİYONLAR
// ? ==========================================================

// !-----------------------------------------------------------
// !3.YÖNTEM  : ARROW FUNCTIONS
// !-----------------------------------------------------------

console.log("****** 3- ARROW FUNCTIONS ******");

// //!Funct expression ve arrow func yontemlerinde
// //! Once fonks tanimlanmalidir sonra cagrilmalidir.
// //! Aksi takdirde hata alırsiniz.

//*Örnek1: 3ün katı olup olmadığını kontrol eden fonksiyon

const control = (sayi)=> sayi%3==0 ? "3'ün katıdır" : "3'ün katı değildir"

console.log(control(34));

//* Örnek2:Menu fonksiyon
// ! ok(arrow) fonksiyonunda birden fazla ifade varsa, fonksiyonda süslü parantez kullanmalıyız
//****************************

const menu = () => {
    console.log("===========================");
    console.log("     JAVASCRİPT DERSİ      ");
    console.log("===========================");
  };

menu()

//*Örnek3: silindirin hacmini hesapla (pi*r**2*h)

const hacimHesapla=(r,h)=> 
Math.PI*r*r*h

// const hacimHesapla = (r, h) => { return Math.PI * r * r * h}; //böyleymiş gibi hareket ediyoruz

console.log(hacimHesapla(3,5).toFixed(2)); 

//* ORNEK4: Girilen n. terimdeki  Fibonacci sayisını  yazdiran fonksiyonu dongu ile kodlayiniz. ve bu n sayısına kadar olan elemanları toplayınız
//? FIBONACCI terimleri:  1, 1, 2, 3, 5, 8, 13, 21, 34, ...

const fibonacciNumber = (n) => {
    let fiboSol=1
    let fiboSag=1
    let yeniFibo=0
    let toplam=2

    for (let i = 1; i < n-1; i++) {
        yeniFibo=fiboSol+fiboSag;
        fiboSol=fiboSag;
        fiboSag=yeniFibo;
        console.log(`${i+2}. sayısı ${yeniFibo}`);   
        toplam += yeniFibo   
    }
    console.log("buraya kadarki terimlerin toplamı: ", toplam);
    return yeniFibo;  //veya fiboSag da return edebiliriz ;)
}
console.log(fibonacciNumber(7));
// console.log(fibonacciNumber(8));
// console.log(fibonacciNumber(9));




