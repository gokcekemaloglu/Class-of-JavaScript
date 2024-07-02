console.log("index.js'den selamlar");

//*named export-import
// import ugurla from "./myModules.js";

//? named export yapılmış değişkenleri import yaparken "as" aliası ile isim değiştirerek import edebiliriz
//? default exportlarda istediğimiz isimle import edebiliriz

import by,{
    topla, 
    calismaSaati, 
    increase as inc, //import ederken isim değiştirip increase'i inc olarak kullanalım diyebiliyoruz
    decrease as dec, 
    myName
}from "./myModules.js"  //destruct etmiş oluyoruz

//* default export-import

// import ugurla from "./myModules.js";

console.log(topla(3,5));
console.log(calismaSaati);

console.log(inc(12));
console.log(dec(12));
console.log(myName);
// ugurla()
by() // ugurla fonksiyonunun adını istediğimiz gibi değiştirerek kullanmış olduk
