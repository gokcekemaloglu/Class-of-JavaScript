// S-1:Girilen not değerine karslllk gelen harfli notu bildiren programı yazınız. 
// 0-25 arasl not karsılığı FF olmalı,26-45 arası DD, 46-65 arası CC, 66- 75 arası BB, 76-90 arası BA, 91-100 arası AA olarak cevrilmelidir. 
// 100'den büyük veya O'dan küçük değerlerde hata mesajı verecektir.


// let grade= + prompt("Notunuzu aşağıdaki alana girin ve ardından 'Tamam'a basın")
// if(grade<=100 && grade>90){
//     console.log("AA")
// }
// else if(grade<=90 && grade>75){
//     console.log("BA")
// }
// else if(grade<=75 && grade>65){
//     console.log("BB")
// }
// else if(grade<=65 && grade>45){
//     console.log("CC")
// }
// else if(grade<=45 && grade>25){
//     console.log("DD")
// } 
// else if(grade<=25 && grade>=0){
//     console.log("FF")
// } else {alert("Hatalı not girdiniz. Girdiğiniz notu kontrol edin ve tekrar girin.")}



console.log("*******************");


// S-2: Girilen ay ismine karsılılk gelen sıra numarası veren programı switch-case yapısı kullanarak yazınız. 

// let ay= prompt("Aşağıdaki alana küçük harflerle bir ay ismi yazınız");

// switch (ay) {
//     case "ocak":
//         sonuc = 1
//         break;
//         case "şubat":
//         sonuc = 2
//         break;
//         case "mart":
//         sonuc = 3
//         break;
//         case "nisan":
//         sonuc = 4
//         break;
//         case "mayıs":
//         sonuc = 5
//         break;
//         case "haziran":
//         sonuc = 6
//         break;
//         case "temmuz":
//         sonuc = 7
//         break;
//         case "ağustos":
//         sonuc = 8
//         break;
//         case "eylül":
//         sonuc = 9
//         break;
//         case "ekim":
//         sonuc = 10
//         break;
//         case "kasım":
//         sonuc = 11
//         break;
//         case "aralık":
//         sonuc = 12
//         break;
            

//     default: alert("Yazdığınız ayın ismini doğru yazmış olduğunuzu kontrol ediniz.")
//         break;
// }
// console.log("Yazmiş olduğunuz ay yılın " + sonuc +". ayıdır.");


// S-3: Girilen farkll 3 tamsayının toplamını, çarpımını, en küçüğünü ve en büyüğünü yazdıran programı yazınız



// let x= +prompt("birinci sayıyı giriniz")
// let y= +prompt("ikinci sayıyı giriniz")
// let z= +prompt("üçüncü sayıyı giriniz")

// let toplamı
// let carpımı
// let en_kucuk
// let en_buyuk

// if (x<y && x<z) {
//     en_kucuk = x
// } else if (y<x && y<z) {
//     en_kucuk = y
// } else if (z<x && z<y) {
//     en_kucuk = z
// }
// if (x>y && x>z) {
//     en_buyuk = x
// } else if (y>x && y>z) {
//     en_buyuk = y
// } else if (z>x && z>y) {
//     en_buyuk = z
// }

// toplamı = Number(x) + Number(y) + Number(z)
// carpımı = Number(x) * Number(y) * Number(z)

// console.log("Girilen sayıların toplamı: " , toplamı);
// console.log("Girilen sayıların çarpımı: " , carpımı);

// console.log("Girilen sayıların en küçüğü: " , en_kucuk);
// console.log("Girilen sayıların en büyüğü: " , en_buyuk);


// S-4: GiriIen sayiların tek veya çift olduğunu bildiren programı tasarlayınız. (Ternary deyimi ile yapınız).

// let sayi= +prompt ("bir tamsayı giriniz")

// sayi%2==0 
//     ? console.log("even") 
//     : console.log("odd");


// const speed=150 

// speed>120 
//     ? console.log("speedy") 
//     : (speed>=90) 
//     ? console.log("normal") 
//     : console.log("slow");



// S-1:Girilen not değerine karsılık gelen harfli notu bildiren programı yazınız. 
// 0-25 arasl not karsılığı FF olmalı,26-45 arası DD, 46-65 arası CC, 66- 75 arası BB, 76-90 arası BA, 91-100 arası AA olarak cevrilmelidir. 
// 100'den büyük veya O'dan küçük değerlerde hata mesajı verecektir.


// let grade= + prompt("Lütfen sınav notunu girin")

// if (grade<=100 && grade >90) {
//     console.log("AA");
// } else if(grade<=90 && grade >75){
//     console.log("BA");
// }else if(grade<=75 && grade >65){
//     console.log("BB");
// }else if(grade<=65 && grade >45){
//     console.log("CC");
// }else if(grade<=45 && grade >25){
//     console.log("DD");
// }else if(grade<=25 && grade >=0){
//     console.log("FF");
// }else{
//     alert("Yanlış bir not girdiniz. Lütfen notunuzu tekrar giriniz. ");
// }



//S-2: Girilen ay ismine karsılılk gelen sıra numarası veren programı switch-case yapısı kullanarak yazınız. 

// let month= prompt("Bir ay giriniz");
// let number;

// switch (month) {
//     case "ocak":
//         console.log("1");
//         break;
//     case "subat":
//         console.log("2");
//         break;
//     case "mart":
//         console.log("3");
//         break;
//     case "nisan":
//         console.log("4");
//         break;
//     case "mayıs":
//         console.log("5");
//         break;
//     case "haziran":
//         console.log("6");
//         break;
//     case "temmuz":
//         console.log("7");
//         break;
//     case "ağustos":
//         console.log("8");
//         break;
//     case "eylül":
//         console.log("9");
//         break;
//     case "ekim":
//         console.log("10");
//         break;
//     case "kasım":
//         console.log("11");
//         break;
//     case "aralık":
//         console.log("12");
//         break;

//     default: alert("yanlış girdiniz")
//         break;
// }








// S-3: Girilen farkll 3 tamsayının toplamını, çarpımını, en küçüğünü ve en büyüğünü yazdıran programı yazınız


// let sayi1 = +prompt("birinci sayıyı yazınız");
// let sayi2 = +prompt("ikinci sayıyı yazınız");
// let sayi3 = +prompt("üçüncü sayıyı yazınız");
// let toplam=sayi1+sayi2+sayi3;
// let carpim=sayi1*sayi2*sayi3;
// let enkucuk;
// let enbuyuk;

// if (sayi1>sayi2 && sayi1>sayi3) {
//     console.log("en büyük sayı"+ sayi1);
// } else if(sayi2>sayi3 && sayi2>sayi1) {
//     console.log("en büyük sayı"+ sayi2);
// }else if(sayi3>sayi1 && sayi3>sayi2) {
//     console.log("en büyük sayı"+ sayi3);
// }else{
//     console.log("sayılardan ikisi veya üçü de eşit");
// }

// if (sayi1<sayi2 && sayi1<sayi3) {
//     console.log("en küçük sayı"+ sayi1);
// } else if(sayi2<sayi3 && sayi2<sayi1) {
//     console.log("en küçük sayı"+ sayi2);
// }else if(sayi3<sayi1 && sayi3<sayi2) {
//     console.log("en küçük sayı"+ sayi3);
// }else{
//     console.log("sayılardan ikisi veya üçü de eşit");
// }

// console.log("toplam=", toplam);
// console.log("çarpım=", carpim);




// S-4: GiriIen sayiların tek veya çift olduğunu bildiren programı tasarlayınız. (Ternary deyimi ile yapınız).

// let sayi=+prompt("bir sayı giriniz.")
// sayi%2==0 ? console.log("sayı çift") : console.log("sayı tek")




//S-5: Girilen dereceyi fahrenayta veya fahrenaytı dereceye çeviren program tasarlayınız. Çevirimin hangi birimden hangi birime olacağı program basinda sorulmalıdır.



