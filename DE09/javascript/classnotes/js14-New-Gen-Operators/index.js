console.log("**** NEW GEN OPERATORS *****")

//* =============================================
//*  DESTRUCTURING (OBJECT)
//* =============================================

const product = {
    id: "12345",
    brand: "Apple",
    type: "smart phone", //heap'te tutulur
    price: 3000,
  };
const product1 = {
    id: "12346",
    brand: "Samsung",
    type: "Mobile phone",
    price: 5000,
};
  
//? .notasyonu ile erişim mümkün
console.log(product.type);
let proPrice = product.price;
console.log(proPrice);
proPrice += 100;                    //stack'te tutulur
console.log(proPrice);
//   product.price = proPrice  // olsaydı o zaman 27. satır 3100 olurdu farklı değişkene atadığımız için
console.log(product.price);
// product.price = proPrice
// console.log(product.price)
  

console.log("*********************");

//? square bracket
console.log(product["brand"]);

//? DESTRUCTURING yöntemi
//? Değişken isimleri objedeki keylerle aynı olmalıdır

let { id, brand, type, price } = product  //destruct ederek şu isimlerle yeni bir değişken atıyormuşuz hibi oluyor geçici veriden kalıcı veriye alıyormusuz gibi oluyor. heap'ten stack'e alıyoruz

console.log("ID:",id);
console.log("brand:",brand);
console.log("type:",type);
console.log("price:",price);
// price += 500
// console.log(price);
// console.log(product.price);
// product.price = price
// console.log(product.price);
// console.log(typeof(price));

console.log("*********************");

//? Key'ler isimd eğişiklikler : ile yapılır
const {
    id: pro1Id,
    price: pro1Price,
    type: pro1type,
    brand: pro1Brand,
} = product1;

console.log(brand);
console.log(pro1Brand, pro1Id, pro1type, pro1Price);

console.log("*********************");

//? NESTED DESTR
const insanlar = {
  kisi1: {
    kimlikNo: "1234567890",
    adi: "Ahmet",
    soyadi: "Can",
    meslek: "Mimar",
    maas: 30000,
  },
  kisi2: {
    kimlikNo: "44234567890",
    adi: "Canan",
    soyadi: "Can",
    meslek: "Sosyal Gelişim Uzmanı",
    maas: 25000,
  },
};

console.log(insanlar.kisi2.meslek);
console.log(insanlar["kisi2"]["meslek"]);

console.log("*********************");

//? Level1 Destr

// const{kisi1, kisi2}=insanlar
// console.log(kisi1);

console.log("*********************");

//? Level2 Destr

// const {adi, kimlikNo,soyadi,meslek,maas} = kisi1
// console.log(adi, kimlikNo,soyadi,meslek,maas);

console.log("*********************");

//? iki seviyeli destr

const {
    kisi1: {adi,soyadi},
    kisi2:{ adi:kisi2Ad, soyadi:kisi2Soyad}
} = insanlar
console.log(kisi2Ad);

console.log("*********************");

//* Example
const team = [
    {
      name: "Josh",
      surname: "Barry",
      job: "developer",
      age: 30,
    },
    {
      name: "John",
      surname: "Barry",
      job: "tester",
      age: 45,
    },
    {
      name: "Hazel",
      surname: "Nut",
      job: "team lead",
      age: 40,
    },
];



console.log("*********************");

team.forEach((person)=>console.log(person))

console.log("*********************");

team.forEach((person)=>{
    console.log(("Name",person.name));
    console.log(("Surname",person.surname));
    console.log(("Job",person.job));
    console.log(("Age",person.age));
    console.log("*******************");
})

console.log("******************");

team.forEach((person) => {
  const { name, surname, job, age } = person;
  console.log("Name2", name);
  console.log("Surname2", surname);
  console.log("Job2", job);
  console.log("Age2", age);
  console.log("******************");
});
console.log("******************");

// Yolda destruct etme deniyor

team.forEach(({ name, age, surname, job }) => {
  console.log("Name3", name);
  console.log("Surname3", surname);
  console.log("Job3", job);
  console.log("Age3", age);
  console.log("******************");
});


console.log("*********************");

//!----  FUNCTIONLARDA DESTRUC. KULLANIMI ----

const objGoster = function () {
    return {
      name: "Hazel",
      surname: "Nut",
      job: "team lead",
      age: 40,
    };
};

// console.log(objGoster());

let { name, surname, job, age } = objGoster();

console.log(name);
console.log("Age", ++age);

console.log("******************");

//?Fonksiyon Parametresi

const data = {
  id: "123",
  desc: "This is top secret information",
  createdTime: "1980",
};

const printData = (data) => {
  console.log(`${data.id} - ${data.desc} - ${data.createdTime}`);
};

const printDataDestr = (data) => {
  const { id, desc, createdTime } = data;
  console.log(`${id} - ${desc} - ${createdTime}`);
};

const printDataAir = ({ id, desc, createdTime }) => {
  console.log(`${id} - ${desc} - ${createdTime}`);
};

printData(data)
printDataDestr(data)
printDataAir(data)

console.log("*********************");

//* =============================================
//*  DESTRUCTURING (ARRAY)
//* =============================================

const people = ["Ali", "Veli", "Harvey", "Ashley"]

console.log(people[0]);

let ali = people[0]

console.log(ali);

console.log("*********************");
//veya

const [kisi1, kisi2, , kisi4] = people
console.log(kisi1, kisi2,  kisi4);

console.log("*********************");
//* ==============================================
//*  REST (...)
//* =============================================

//? REST operatoru kullanici tarafindan girilen degerleri dizi
//? icerisine konumlandirir. Cesitli kullanim alanlari vardir.

//! 1- Bir dizi veya object'deki bazi degerlerden geri kalanlarini ayri dizi yada objelere kopyalanmasini saglayabilir.

//?ARRAY

const araclar = ["Kamyon", "Tır", "Kamyonet", "Motosiklet", "Minibüs", "Taxi"];

 const [arac1, ,arac2, arac3, ...binekAraclar] = araclar
 console.log(arac2, binekAraclar); // 

console.log("*********************");

//?Object

const person = {
  ad: "Hazel",
  soyad: "Nut",
  is: "team lead",
  yas: 40,
};

const {ad, soyad, ...geriKalan } = person

console.log(ad, geriKalan);

console.log("*********************");

//! 2- Bir fonksiyonun argumanlarini diziye cevirmek icin kullanilabilir.

const topla = (a,b, ...kalan) => a + b
console.log(topla(1,5,7,9,3));

console.log("*********************");

const toplam = (sayılar) => {
  return sayılar
}
console.log(toplam(1,5,7,9,3));

const toplam1 = (...sayılar) => {
  return sayılar.reduce((a,b)=>a+b)
}

console.log("Toplam", toplam1(1,5,7,9,3));

//? REST (...) ile non-iterable olan sayilari iterable hale (diziye) cevirmiş olduk.

console.log("*********************");
//* =============================================
//*  SPREAD (...)
//* =============================================

//? Spread operatoru ise iterables olan bir elemani bireysel degerler haline getirir.

const ucanAraclar = ["helicopter", "drone", "ucak", "fuze"];
const karaAracları = ["araba", "bisiklet", "marti"];

const tasitlar = [ucanAraclar,karaAracları]
console.log(tasitlar)

console.log("*********************");

const flatTasitlar = [...ucanAraclar,...karaAracları]
console.log(flatTasitlar);

console.log("*********************");

//? Ornek

const cumle = "Uzun ince bir yoldayım"
const cumleDizisi = [...cumle]
console.log(cumleDizisi);

console.log("*********************");

//? Ornek

const numbers = [1, 3, 4, 5]

console.log(Math.max(1, 3, 4, 5)); // ikisi de aynı şey
console.log(Math.max(...numbers));
console.log(Math.max(...numbers, 91));

console.log("*********************");

//? nested

const sahislar = {
  sahis1: {
    name: "Can",
    surname: "Canan",
    dob: "1990",
    job: "developer",
    salary: "140000",
    drivingLicense: true,
  },
  sahis2: {
    name: "John",
    surname: "Sweet",
    dob: "1990",
    job: "tester",
    salary: "110000",
    drivingLicense: false,
  },
  sahis3: {
    name: "Steve",
    surname: "Job",
    dob: "2000",
    job: "developer",
    salary: "90000",
    drivingLicense: true,
  },
};

//? Javascript'de Objeler default olarak iterable degildir.
//? Ama for in ve for of donguleri ile itere edilebilirler.

//? Objelerin key ve value'larini okumak icin built-in metotlar vardir.
//? Bu mettotlar aslinda objelerin key ve/veya value'lari bir dizi olarak dondurur.


//! FOR - IN

// object'in indislerinde dönüyoruz

for(let s in sahislar) {
  // console.log(s); // sahis1, sahis2, sahis3
  // console.log(sahislar[s]);
  console.log(sahislar[s].salary);
}

console.log("*********************");

//? Kullanışlı Object metotları

//? Object.keys() => objenin key'lerini bir dizi olarak dondurur.
//? Object.values() => objenin value'larını bir dizi olarak dondurur.

console.log(Object.keys(sahislar)) //? objenin key'leri array olarak doner
console.log(Object.values(sahislar)) //? objenin value'larını array olarak doner
console.log(Object.values(sahislar.sahis2)) //? objenin value'larını array olarak doner
console.log(Object.entries(sahislar)) //? objenin key-value ciftini array olarak doner
console.log(Object.entries(sahislar.sahis1)) //? objenin key-value ciftini array olarak doner

console.log("*********************");

//! FOR - OF

// iterable demek dizinin içinnde dönmesi lazım demek
// for(let x of iterable ) {
// //*   code block to be executed
// }
//? for-of dongusu iterable objeler icin kullanilir.
//? for-of dongusu objenin key-value ciftini okumak icin kullanilir.
//? for-of dongusu objenin value'larını okumak icin kullanilir.

for (const key of Object.keys(sahislar)) {
  console.log(sahislar[key].salary);  //! square bracket
}

console.log("*********************");

for ( let v of Object.values(sahislar)){
  console.log(v);
  console.log(v.name);
}

console.log("*********************");

