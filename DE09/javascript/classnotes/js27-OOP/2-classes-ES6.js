//* ======================================================
//*             OOP - Classes (ES6)
//* ======================================================

//? Classlar,  objects oluşturmak için template (şablondur).
//? JS deki Classes,   prototypes üzerine kuruludur,  aynı zamanda ES5 syntax ından farklı bazı syntax and semantics e sahiptir .
//? Aslında  class keyword ü  ES6 da tanıtılmıştır, but is syntactical sugar (yalnızca dili kullanmanın bazı yönlerini daha kolay ve genel olarak daha keyifli hale getirmek için eklenen bir dil özelliği için kullanılan bir terimdir.), JavaScript  prototype-based dir.

class Book {
    constructor(a,b,c) {
        this.title=a;
        this.author=b;
        this.year=c
        this.ozetFunction = function (){
        return `${this.title} kitabını ${this.year} yılında ${this.yazar} yazmıştır.`
    }
    }

    //? bu alt süslüyle yazdıklarımız direk kalıbın prototype alanına gider (ES6 ile biz belirtmeden) ve her obje için çalışır. 


    yilHesapla(){
        return 2024 - this.year
    }
}
// classlar,  prototype-based  bir dilde,  prototype  nesnelerdir.  prototype  nesneleri,  nesnelerin  özelliklerini  ve   davranışlarını  tanımlayan  nesnelerdir.  Yani,  classlar,  nesnelerin  özelliklerini  ve   davranışlarını  tanımlayan  nesnelerdir.  AI yazdırdı

//? new keyword ü  Book Constructor ı parametrelerle çağırır.
//? Constructor, Book object in bir örneğini kalıbını oluşturur.
//? Constructor daki tüm variablelar ve functionlar, oluşturulan her  single örneğe (instance a çocuklara) eklenir

// Constructor,  instance a  çocuklara  eklenen  tüm  variablelar  ve  functionlar  için  bir  template  olarak  kullanılır.  Yani,  instance a  çocuklara  eklenen  tüm  variablelar  ve   functionlar  için  bir  template  olarak  kullanılır.  AI yazdırdı


const book1 = new Book("Safahat","M.Akif Ersoy",1910)
const book2 = new Book("Nutuk","M. Kemal Atatürk",1927)

console.log(book1);
console.log(book1.year);
console.log(book1.ozetFunction());
console.log(book1.yilHesapla());
console.log(book2);

//? INHERITANCE

//* Book object kalıbından Dergi object'ine kalıp getirir

class Dergi extends Book {
    constructor(title,author,year,d) {
        super(title,author,year) //atadan gelecekleri bunun içine yaz demek
        this.month = d
    }
}

const dergi1 = new Dergi("Kaşağı","Ömer Seyfettin",1900,"Aralık")

console.log(dergi1);
console.log(dergi1.ozetFunction());
console.log(dergi1.yilHesapla());

const dergi2 = new Dergi("Aşk-ı Memnu","Halit Ziya Uşaklıgil","","Eylül")
console.log(dergi2);
//! extends edildiği zaman, atadan gelen her veriyi kullanmak zorundayız, en fazla value kısmını boş " " bırakabiliriz

//* ======================================================
//*          OOPS- Object Constructor (ES5)
//* ======================================================

//*Object Constructor
//* Javascript is a prototype-based language.
//* Tüm JavaScript nesneleri, bir prototipten (ilk örnek)özellikleri ve yöntemleri devralır (inherit)
//* Object prototipi, prototip miras zincirinin en üstündedir.(Hz. Adem)
//* For example, Date and Array objects,   Object prototype den devralır

//* Object Constructor
//! Book ismi büyük harfle,constructor olduğu biz tarafından anlaşılsın diye. anne karnında bebek var doğarsa değeri olur (üstte constructor anne karnındaki bebek, altta book1 oluşturmak=bebeğin doğması)
//!arrow function this keyword unu desteklemediği için burada function decleration yazımını tercih ettik








