//* ======================================================
//*                 NESNELER (OBJECTS)
//* ======================================================

//? Diziler (Arrays) sıralı bellek yapısıdır. Böylece, onlara indeksleyerek erişebiliriz.
//? Object leri daha karmaşık (yapılandırılmamış) bellek ihtiyaçları için kullanabiliriz

//?  herhangi bir veriye erişmek için Key-value (property-value) kullanılır

//! 3 farkli yontem ile Object olusturulabilir
//* ---------------------------------------------------------
//* 1-   Object (new) örneği oluşturalım
//* ---------------------------------------------------------

const car1=new Object({name:"BMW",engine:1.6, model:2000})
const car2=new Object({name:"merco",engine:2.0, model:2008})

console.log(car1);
console.log(car1.name);
console.log(car1.engine); //dot notation
console.log(car1["engine"]); // square bracket
//? Square bracket yonteminin en buyuk avantaji key degerini degisken olarak kullanabilmemizdir.

const car3=new Object({})
car3.name="volvo"
car3.motor=1.8
console.log(car3);

console.log("**************************");

//* ---------------------------------------------------------
//* 2-   Object Constructor (OOP ile ayrıntılı göreceğiz)
//* ---------------------------------------------------------

function Calisanlar(a,b,c){
    this.calisanID=a
    this.calisanName=b
    this.calisanMaas=c
}


//! eğer object constructor kullanacaksak this gerekli, arrow function da this kullanımı sağlıklı olmadığından burada decleration functionu kullandık

//! this keyword'u icinde bulundugu scope'daki objeyi refere eder

// console.log(this); //? Global scope da oldugumuzdan dolayi browser penceresinin en temel objesini yani window'u gosterir //hoca sil  dedi

const kisi1=new Calisanlar(101,"mehmet",8000)
const kisi2=new Calisanlar(102,"rengin",10000)

console.log(kisi1);
console.log(kisi2);
console.log(kisi2.calisanName);

console.log("**************************");


//* ---------------------------------------------------------
//* 3-   Object Literal (en çok kullanılan yol)
//* ---------------------------------------------------------

const person={
    name:"Johny",
    surname:"Deep",
    birth:1970,
    job:"actor",
    hasDriverLicense:true,
    languages:["ingilizce","almanca", "java","next.js"],
    children:{first:"sarah",second:"lucy"}
}

console.log(person);
console.log(person.name);
console.log(person.languages[1]); //almanca
console.log(person.children.first); //sarah

//? REWRITE(Overwriting)
person.birth+=5
console.log(person.birth); //1975

//? ADD NEW PROPERTY (yeni property eklemek)
person.location="America"
console.log(person);

console.log("**************************");


//* Örnek:
person.languages.map((a)=>a.toUpperCase()).forEach((a=>console.log(a)))

console.log("**************************");


//* ---------------------------------------------------------
//*    Objects teki Yöntemler
//* ---------------------------------------------------------

const mensch = {
    name: "Johny",
    surname: "Deep",
    birth: 1970,
    job: "actor",
    hasDriverLicense: true,
    yasHesapla:function(){
        return `${this.name} oyuncusu ${new Date().getFullYear()-this.birth} yaşındadır`
    },
    selamla:()=>"merhaba"
}

console.log("**************************");


//! Nesnenin içindeki değerleri kullanarak bir fonksiyon yazacaksak "this" keyword'ü kullanılmalı, arrow function this'i destelemediği için, ilk fonksiyonda, decleration yöntemini tercih ettik.

console.log(mensch);
console.log(mensch.yasHesapla());
console.log(mensch.selamla());

//************** */
console.log(Object.values(mensch)); //object'in value'larını bir diziye atar
console.log(Object.keys(mensch)); //object'in keys'lerini bir diziye atar

console.log("**************************");


// * ======================================================
// *                  OBJECT ITERATION
// * ======================================================
// key lerin belirli bir sırası (index) olmadığı için, diziye alırsak object araması daha tutarlı bir arama performansına sahip olacaktır. Ayrıca diziler arasında döngü yapmak, keys arasında döngü yapmaktan daha hızlıdır, bu nedenle tüm öğeler üzerinde işlem yapmayı planlıyorsanız, bunları bir diziye koymak akıllıca olabilir.

const people = [
    {
      name: "Mustafa",
      surname: "Gertrud",
      job: "developer",
      age: 30,
    },
    {
      name: "Rengin",
      surname: "Müller",
      job: "tester",
      age: 35,
    },
    {
      name: "Mehmet",
      surname: "Rosenberg",
      job: "team lead",
      age: 40,
    },
    {
      name: "Kemal",
      surname: "Gutenberg",
      job: "developer",
      age: 26,
    },
  
    {
      name: "Halil",
      surname: "Shaffer",
      job: "tester",
      age: 24,
    }]

    console.log(people);

console.log("**************************");


//* Örnek1: people dizisindeki job'ları tek satırlık bir işlemle göster

console.log(people[0].job);
//veya kısaca
people.forEach((a)=>console.log(a.job))

console.log("**************************");


//* Örnek2: Yaşları 1'er arttır ve sonucu yeni bir diziye aktar

const yaslar = people.map((kisi) => kisi.age+1);
const yaslar2 = people.map((kisi) => `${kisi.name} kişinin yaşı ${kisi.age+1}` );
console.log(yaslar);
console.log(yaslar2);
console.log(people[0].age);

console.log("**************************");


//* Ornek3 yasları 1 er arttır, sonucu dizide kalıcı değiştir

console.log( people.map((insan,i,array) => array[i].age = insan.age+1 ));  // veya array[i]+1 olarak da yazabiliriz

console.log(people[0].age);


console.log(people.map((insan) => insan.age += 1 ));

console.log(people[0].age);

console.log("**************************");


//* Ornek4 people (object li ) dizisinden yaşları değişmiş olarak job olmadan yeni bir object li dizi oluşturalım.Key'leri de farklı olsun

const yeniPeople = people.map((human)=>({
    isim: human.name,
    soyad: human.surname,
    yas: human.age+1
}))

console.log(yeniPeople);
console.log(people);

console.log("**************************");


  //* Ornek5 her elemanın name ini büyük harfli yaz, yaslarını 2 kat yap, job larının önüne senior kelimesi ekleyelim ve bunları yeni bir diziye atalım

  const yeniPeople2 = people.map((person)=>({
    name: person.name.toUpperCase(),
    age:person.age*2,
    surname: person.surname,
    job: "senior " + person.job
  }))

console.log(yeniPeople2);
console.log(people);

console.log("**************************");

//* ornek6 people dizisine yeni object veri ekleyelim

people.push({name: "Ahmet", surname: "Kaya", age: 25, job: "Developer"})
console.log(people);

console.log("**************************");

 //* ornek7: Developer olanların adlarını ve yaşlarını yeni bir object olarak saklayın (key'lerini de değiştirelim)

 const yeni=people.filter((kisi)=>kisi.job=="developer").map((a)=>({
    isim:a.name,
    yas:a.age
 }))

 console.log(yeni);
console.log("**************************");

//* Ornek8: ortalama yasi hesaplayiniz.

console.log(people.reduce((toplam,eleman)=>toplam+eleman.age,0)); 

console.log("**************************");





console.log("**************************");

