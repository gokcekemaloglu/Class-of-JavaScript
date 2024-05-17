// ^ And Operatörü

// & Truthy value with &&

// console.log(2 && 5); // sonuna kadar gider true olduğu için 5 gösterir

// console.log(Boolean(2 && 5)); 

// & Falsy value with &&
// console.log( 0 && 7) //0
// console.log( '0' && 7) // 7
// console.log(Boolean(0))


// & object / Array  with &&

// console.log({} && "Hello"); //Hello
// console.log([] && "Hello"); //Hello

// console.log(Boolean([])) //true
// console.log(Boolean({})) //true 


// & Falsy string with &&

// console.log('' && 'World') // ilk değer boş string döner
// console.log("" && 'World') //
// console.log(`` && 'World') //

// & Falsy null with &&

// console.log(null && 'Hello World') //null
// console.log(NaN && 'Hello World') //NaN
// console.log(null && NaN) //null 

//  ^ OR operatörü ||

// & Truthy value with ||

// console.log(2 || 5) //2

// & Falsy value with ||

// console.log(0 || 7) //7

// console.log(0 || '') //boş string döner

// & object / Array  with ||
// console.log({} || "Hello"); // {}
// console.log([] || "Hello"); // []

// & Falsy null with ||

// console.log(null || 1) //1
// console.log(null || NaN) //NaN 


// Soru 1 : 18 yaşından büyüklerin sigara kullanabileceği 18 yaşından küçüklerin sigara kullanamayacağını if else yapısı ile konsola yazdıran kodu yazınız. 

// let age= +prompt("lütfen yaşınızı girin")

// if (age>=18) {
//     console.log("sigara içebilirsiniz.");
// } else if (age<18){
//     console.log("yasınız sigara icmeye uygun değil");
// }else console.log("yanlış giriş yaptınız.");


//ternary


// let age= +prompt("lütfen yasınızı girin")

// age=age>=18 ? console.log("sigara içebilirsiniz.") : console.log("yasınız sigara icmeye uygun değil")


// hocanın çözüm alternatifleri

// let age = +prompt("Lütfen yasinizi giriniz");

// console.log(age >= 18 ? "Sigara kullanabilirsiniz" : "Sigara kullanamazsiniz");
// age >= 18
//   ? console.log("sigara kullanabilirsiniz")
//   : console.log("sigara kullanmazsiniz");

//   let response = (age >= 18) ? "sigara alabilir" : "sigara alamaz";
// console.log(response);


//*isNaN()

// let x = +prompt('Bir sayı giriniz :')
//   console.log(isNaN(x));

// Soru 2:// kullanıcının sayı girene kadar tekrar giriş yapmasını sağlayan while yapısını yazın.



// let number=+prompt ("bir sayı giriniz")

// while (isNaN(number)) {
//     number=+prompt("bir sayı giriniz")
// }
// console.log(number);

// do-while çözümü

// let number;
// do {
//     number=+prompt ("bir sayı giriniz")
// } while (isNaN(number));
// console.log(number);

//*örnek3 Kullanıcı adı ve parola kontrolü yap. Doğru ise ismiyle karşıla değilse tekrar girmesi için yönlendir. 3 kez yanlış giriş olursa çıkış yapsın


// let kullaniciAdi;
// let parola;
// let hak=3;
// while (hak>0) {
//     kullaniciAdi=prompt("kullanıcı adınızı giriniz")
//     parola=+prompt("parolanızı giriniz")

//     if (kullaniciAdi=="admin" && parola=="1234") {
//         alert(`Hoş geldiniz, ${kullaniciAdi}!`);
//         break;
//         } else {
//             hak--;
//             if (hak > 0) {
//               alert("Kullanıcı adı veya parola yanlış. Lütfen tekrar deneyin.");
//             } else {
//               alert("3 kez yanlış girdiniz.");
//             }
//         }
// }

// 2.çözüm: umuttan

// let username = "Ali";
// let password = 1234;
// let hak = 3;
// while (hak > 0) {
//   let usernameP = prompt("Kullanıcı adınızı giriniz:");
//   let passwordP = prompt("Parolanızı giriniz:");
//   if (usernameP == "Ali" && passwordP == 1234) {
//     console.log("Giriş başarılı!");
//     break;
//   } else {
   
//     hak--;
//      alert(
//        "Kullanıcı adı veya parola yanlış. Kalan hakkınız: " + hak 
//      );
//   }
// }
// if (hak == 0) {
//   console.log("Üç kez yanlış giriş yapıldı. Lütfen daha sonra tekrar deneyin.");
// }

// 3.çözüm: hocadan

// let user = "Mark";
// let password = "1234";

// let loginCount = 3;

// while (loginCount > 0) {
//   let userid = prompt("Kullanıcı adınızı girin:");
//   let userpw = prompt("Parolanızı girin:");

//   if (userid === user && userpw === password) {
//     alert(`Merhaba, ${userid}! Sayfamıza hoşgeldiniz.🎉🎉`);
//     break;
//   } else {
//     loginCount--;
//     if (loginCount > 0) {
//       alert(`Kullanıcı adı veya parola yanlış girdiniz. Kalan giriş hakkı: ${loginCount}`);
//     } else {
//       alert("Giriş hakkınız kalmadı.Güle güle..");
//     }
//   }
// } 



// ikinci deneme

// let user;
// let password;
// count=3

// while (count>0) {
//     user= prompt("user name")
//     password=+prompt("password")
//     if (password=="1234" && user=="gokce") {
//         alert(`"welcome" ${user}`)
//         break;
//     } else {
//         count--
//         if (count>0) {
//             alert(`please try again`)
//         } else {
//             alert(`Sorry you failed`)
//         }
//     }
// }





//piramid 
//*      #
//*     ###
//*    #####
//*   #######
//*  #########



// let satir=5

// for(let i = 1; i <= satir; i++ ){
//     let row=""
//     for(let b=1; b <= satir-i; b++){
//         row +=" "
//     }
//     for (let k=1; k<= 2*i-1 ; k++){
//         row += "#"
//     }
//     console.log(row);
// }





// let rows = 5;
// for (let i = 1; i <= rows; i++) {
//     let row = "";
//     for (let b = 1; b <= rows - i; b++) {
//         row += " ";
//     }
//     for (let k = 1; k <= 2 * i - 1; k++) {
//         row += "#";
//     }
//     console.log(row);
// }


// let size = 5;
// let output = "";
// for (let i = 0; i < size; i++) {
//   let row = "";
//   for (let s = 0; s < size - i - 1; s++) {
//     row += " ";
//   }
//   for (let j = 1; j <= 2 * i + 1; j++) {
//     output += "#";
//   }
//   console.log(row + output);
//   output = "";
// } 


    
//**örnek */
//     * 
//     * *  
//     * * * 
//     * * * *  
//     * * * * *



// let satir=5

// for (let i = 1; i <= satir; i++) {
//     row=""
//     for (let j = 1; j <=  i; j++) {
//         row += "*"
//     }
//     console.log(row);
// }







// let height = 5;
// for (let i = 0; i <= height; i++){
//     let row = '';
//     for(let j = 0; j < i; j++){
//         row = row + '* ';
//     }
//         console.log(row);
// }


//*örnek5 kullanıcıdan alınan 5 adet sayının ortalamasını konsola yazdırınız ?

// let number;
// let ortalama;
// let toplam = 0;
// for (let i = 1; i <= 5; i++) {
//   number = +prompt(`Lütfen ${i}. sayıyı giriniz:`);
//   toplam = toplam + number;
//   ortalama = toplam / 5;
// }
// console.log(toplam, ortalama);

//hocanın cevabı

// let toplam=0

// for (let i = 1; i <= 5; i++) {
//     let input = +prompt("lütfen bir sayı giriniz.")
//     toplam += input;
    
// }
// let ortalama = toplam / 5
// console.log("Girilen sayıların ortalaması:", ortalama);



//*örnek6 1000 ile 2000 arasındaki hem 3 hem 5 e bölünebilen sayıların adedini konsola yazdıran çözüm



//while

// let sayi = 1000
// let sayacc=0
// while (sayi <= 2000) {
//     if(sayi % 3 == 0 && sayi % 5 == 0) {
//         console.log(sayi);
//     sayacc++;

//     }
//     sayi++
// } 

// console.log(sayacc);

// for

// let toplam=0;
// for(i=1000; i>=1000 && i<=2000; i++){
//  if(i % 3 == 0 && i % 5 == 0){
//   toplam++
//  }
// }console.log(`toplam` , 67 );


//Armstrong numbers while solution

//!  verilen sayının tüm basamaklarının sayı değerlerinin basamak sayılarını kuvvet olarak alan sayıların toplamı kendisine eşitse bu bir armstrong sayıdır

// let num = +prompt("Enter a number:");
// let originalNumber = num;
// let sayac = 0;
// let sum = 0;



// while (originalNumber != 0) {
//   originalNumber = Math.floor(originalNumber / 10);
//   console.log(originalNumber);
//   sayac++;
// }

// originalNumber = num;

// while (originalNumber > 0) {
//   let sayi = originalNumber % 10;
//   sum += sayi ** sayac;
//   originalNumber = Math.floor(originalNumber / 10);
// }

// sum == num
//   ? console.log(num + " is an Armstrong number.")
//   : console.log(num + " is not an Armstrong number.");

