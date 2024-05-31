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
  
let { name, surname, job, age } = objGoster();


console.log("*********************");


//* =============================================
//*  DESTRUCTURING (ARRAY)
//* =============================================



console.log("*********************");
//* ==============================================
//*  REST (...)
//* =============================================



console.log("*********************");
//* =============================================
//*  SPREAD (...)
//* =============================================

console.log("*********************");









console.log("*********************");

