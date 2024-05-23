// ?=========================================================
// ?                 STRING METOTLARI
// ?=========================================================
console.log("****STRING METHODS******");

//!1-Klasik yöntemle tanımlanan String ilkel (primitive) dir
const str1 = "clarusway";
const str2 = "hello";
const str3 = "all the world";

console.log(str2 + str3, typeof (str2 + str3));

//!2- constructor ile tanımlanan String non-primitive (ilkel olmayan)

const str4 = new String("yeni bir String");
console.log(typeof str4);

//! Normalde primitive veri tiplerinin property veya metodu olmaz.
//! Ancak Javascript  otomatik olarak primitive String'leri String
//! object lerine dönüştürür. Bu sayede, String object lerine ait olan
//! fonksiyonlar veya özellikleri primitive string ile kullanmak
//! mümkün olur. Ayrıca 2 tür arasında çevrim yapmakta mümkündür.
//? Ek Açıklama için : https://javascript.info/primitives-methods


// *=========================================================
// *               concat() immutable=değiştirmez
// *=========================================================

const s1="clarusway"
const s2="hello"

console.log(s1.concat(s2));
console.log(s1);

const s3 = s1.concat(s2);
console.log(s3);

//! orjinal değerler değişmez, assign ile kalıcı hale getirebiliriz

// *=========================================================
// *   toLowerCase() toUpperCase() immutable=değiştirmez
// *=========================================================

const myName="Ipek Bilir"

console.log(myName.toLowerCase());
console.log(myName.toUpperCase());

console.log(myName.toLocaleUpperCase("tr"));

const esitMi=(a,b)=>a==b.toLocaleUpperCase("tr") ? "eşittir" :"eşit değildir"

 console.log(  esitMi("İSMET", "ismet"))

 //! toLocaleUpperCase("tr")= Türkçe büyüt demek  boş bırakınca  eng (ingilizce) karakterlere uygun büyütebiliriz

 // *=========================================================
// *   charAt()
// *=========================================================

const s4 = "primitive \n  veri tiplerinin \nproperty ya \nda methodu olmaz.";

console.log(s4);
console.log(`primitive 
veri tiplerinin
property ya 
da methodu olmaz.`);

console.log(s4.charAt(5));//t
console.log(s4.charAt(12));// " "
console.log(s4.charAt(s4.length-1));// .

// *=========================================================
// *   includes()- case sensitive (büyük küçük harfe duyarlı)
// *=========================================================

const kelime = "to be or not to be, that is The questions.";
const kelime2 = "to be or4 not to be, that is The questions.";

console.log(kelime.includes("to be"));//true
console.log(kelime.includes("TO BE"));//false
console.log(kelime.toUpperCase().includes("TO BE"));//true

console.log(kelime.includes(" "));//true
console.log(kelime.includes("to be",14));//false 14. index itibariyle to be yok

console.log(kelime2.includes(4) ? "evet rakam var": "rakam yok");

// *=========================================================
// *   search()  (REGEX)
// *=========================================================

const kelime3 = "to, be or not to be, 5 that is The questions.";

console.log(kelime3.search(/[A-Z]/));//index döndürür 31
console.log(kelime3.search(/[a-z]/));//
console.log(kelime3.search(/[0-9]/));//
console.log(kelime3.search(/[0-9a-zA-Z]/));//ilk bulduğu küçük harf o yüzden  0 döndürdü
console.log(kelime3.search(/[^0-9a-zA-Z]/));//2 (, ü dödürdü)

//cümledeki büyük harfi bul onu küçült
console.log(kelime3.charAt(kelime3.search(/[A-Z]/)).toLowerCase());




