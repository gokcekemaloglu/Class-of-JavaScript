// * =======================================================
// *                     DÖNGÜLER
// * =======================================================

//************************ FOR ****************************

//? ornek1 ekrana 10 kere merhaba yazdırın


// for (let index = 1; index <= 10; index++) {
//     console.log("merhaba");
//     console.error("yanlış");
// }

//? ornek2 1den N e kadar olan sayılarıın toplamı

// const N= +prompt("lütfen bir sayı giriniz")
// let toplam=0

// for (let number = 1; number <= N; number++) {
//     toplam=toplam+number
    
// }
// console.log(toplam);

//? ornek3 Dışarıdan girilen sayının Asal olup olmadığını tespit ederek sonucu yazdıran programı yazınız.

// let sayi=51
// let primeNumber=true

// for (let i = 2; i < sayi; i++) {
//     if (sayi%i==0) {
//         primeNumber=false
//     }
// }

// console.log(primeNumber?"asaldır" :  "asal değildir");

//veya bu şekilde de olabilir ama yukarıdaki çözüm daha kullanışlı

// let sayi=51
// let primeNumber=false

// for (let i = 2; i < sayi; i++) {
//     if (sayi%i!=0) {
//         primeNumber=true
//     }
// }

// console.log(primeNumber?"asal değildir" :  "asaldır");

//? ornek4 0-100 Arasinda 7 adet rastgele tam sayi üreten kodu for döngüsü ile yaziniz.
//? for döngüsüyle yazınız

// for (let i = 1; i <=7; i++) {

//     let rastgele=Math.round(Math.random()*100)
//     console.log(rastgele);
    
// }

//****************** */ WHİLE*************


//*ORNEK1: while için 1-100  arasında bir sayı giriniz. aksi durumlarda error msj ı verip, tekrar sayı isteyiniz

// let number=+prompt("Lütfen 1 ile 100 arasında bir sayı giriniz")

// while(number<1 || number >100){
//     console.error("Lütfen istenilen aralıkta bir sayı giriniz.");
//     number=+prompt("Lütfen 1 ile 100 arasında bir sayı giriniz.")
// }

// console.log("tebrikler sayı 1 ile 100 arasındadır.");

//****************** */ DO-WHİLE*************


//*ORNEK1: do-while için 1-100  arasında bir sayı giriniz. aksi durumlarda alert verip, tekrar sayı isteyiniz

// let number1;

// do {
//     number1 = prompt("lütfen 1-100  arasında bir sayı giriniz.")
// } while (number1<1 || number1 >100); 

// console.log("tebrikler");

//! şarta bakmadan ilk etapta do nun içindeki istek yapılır, sonrasında while içi true old sürece do içindeki istek yapılmaya devam edilir

//? ORNEK: Kullanicidan  Vize ve Final notlarini isteyen ve
//? vize'nin %40 + final'in %60 alarak gecme notunu hesaplayan programi
//? yaziniz. Program her hesaplamadan sonra tekrar başkası için hesaplama yapilmak
//? istenip istenmedigini soracak cevap 'e' veya 'E' ise yeniden not
//? isteyecek ve islemleri tekrar edecektir.

// let devamMi;

// do {
//     vize= +prompt("Lütfen vize notunuzu girin.")
//     final= +prompt("Lütfen final notunuzu girin.")

//     let gecmeNotu=(vize*0.4)+(final*0.6)

//     console.log(gecmeNotu>50 ? "tebrikler" : "kaldınız");

//     devamMi=prompt("devam etmek istiyorsan e tuşuna bas")

// } while (devamMi.toLowerCase()=="e");

//? ORNEK3: klavyeden q karakteri girilene kadar sayı girişi isteyen bir programı döngü kullanarak yazınız.

// let sayi1;

// do{
//     sayi1=prompt("Lütfen bir tuşa basınız.")
// }while(sayi1!="q")

// console.log("çıktık!");

//!     GUESS NUMBER

//* Program 1 ile 20 arasında rasgele bir sayı tutacak ve kullanıcının bu sayıyı 5 kerede(hakta) bilmesini isteyecektir. Her yanlışta hakkını bir düşürecek ve ARTTIR/AZALT diyerek kullanıcıyı yönlendirecektir.Sonuç olarak kullanıcının hakkı 0 olursa "Üzgünüz bilemediniz" eğer 5 hak içinde bildi ise "Tebrikler  bildiniz" yazacaktır.

// const rastgele=Math.ceil(Math.random()*20)

// console.log(rastgele);


// let hak=5

// while (hak>0) {
// //let guess yerine const guess de diyebiliriz. her seferinde yenilnediği için
//     let guess=+prompt("bir sayı tahmin et ve bu kısma yaz.")

    
//     if(rastgele == guess){
//         console.log("tebrikler doğru tahmin ettiniz! 🤩👯‍♂️")

//         break;

//     }else if (rastgele > guess) {
//         console.log("ARTTIR 📈");
//         hak--
//         //hak=hak-1
//     } else {
//         console.log("AZALT 📉");
//         hak--
//         //hak=hak-1
//     }
    
// }

// if(hak == 0) {
//     console.log("üzgünüm 5 hakkınız doldu, bilemediniz.");
// }




