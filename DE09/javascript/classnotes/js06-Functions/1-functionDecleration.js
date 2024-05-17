// ? ==========================================================
// ?                    FONKSİYONLAR
// ? ==========================================================

// !-----------------------------------------------------------
// ! 1.YÖNTEM  : FUNCTION DECLARATION
// !-----------------------------------------------------------

//? Bir fonksiyon belirli bir görevi gerçekleştirmek için tasarlanmış,
//? yeniden kullanılabilir, (tek bir görev için tek fonksiyon olması daha iyidir)
//? test etmesi kolaydır

//! Fonksiyon tanımlama yöntemleri
// Function Declaration (Fonksiyon Bildirimi):
// Function Expression (Fonksiyon İfadesi):
// Arrow Function (Ok Fonksiyonları):
// Function Constructor (Fonksiyon Oluşturucusu):

//! * --------Function-Declaration----------------------------*/
// 1-Fonksiyonlar   function anahtar kelimesi ile tanımlanır
// 2-Function kelimesini ardından fonksiyonun ismi verilir.
// 3-Sonra da bir parantez açılıp kapatılır.
//? fonksiyonun çalışması için çağırmak gereklidir.Çağırılmadığında işleme alınmaz.Bu çağırma işlemine invoke yada call denir.


//! Function declaration yöntemi ile  fonksiyonun tanımlanması çağrılmasından önce veya sonra olabilir.

console.log("************ 1- FUNC DECLARATION *************");

// *örnek1
//? Fonksiyonun tanımlanması çağrılmasından önce

//yazdir();  //invoke yada call işlemi (fonksiyorun çağırma)

function yazdir(){
    console.log("ee daha daha nasılsınız?");
}

yazdir(); // yukarıda da olur aşağıda da

// *örnek2 parametreli fonksiyon

function adYazdir(a,b,c) {
    console.log(a,b,c);
}

adYazdir("ayse", "mustafa","ayca")
adYazdir("kemal", "fatih","umut","halil")

// *örnek3 parametreli, dönüş değerli (return)

function yasHesapla(isim,tarih) {
    console.log(`Benim adım ${isim} ve ben ${new Date().getFullYear()-tarih} yaşındayım.`);

    return new Date().getFullYear()-tarih
}

// alert (yasHesapla("Erkan",1989))

const gokce = yasHesapla("gökçe", 1988)
const rengin = yasHesapla("rengin", 2000)
const mehmet = yasHesapla("mehmet", 1990)

//yaş ortalamasını alınız

// alert((gokce + rengin + mehmet)/3)


// *örnek4  

//tek-çift sorgulaması

console.log( isEvenOdd(5) ) //call invoke
console.log( isEvenOdd(16) ) //call invoke
console.log( isEvenOdd(5210) ) //call invoke

function isEvenOdd (sayi) {
    
    //const sonuc= sayi%2 ==0 ?"çifttir" : "tektir"
    //return sonuc

    //veya

    return sayi%2 ==0 ?"çifttir" : "tektir" //return ile birlikte fonksiyonu çağırma işlemi yapabiliriz

}

// *örnek5  arguments keyword'üyle parametre karşılama


function sumAll() {
    
    // console.log(arguments);
    // console.log(arguments[0]);
    // console.log(arguments.length); //dizinin eleman sayısı
    let toplam=0

    for (let i = 0; i < arguments.length; i++) {

        toplam = toplam + arguments[i];
        
    }

    // console.log(toplam); // bu şekilde de toplamı gösterebiliriz
    return toplam
}

// alert ( sumAll(24,54,56,35,12,89,23,45,78,98) )




