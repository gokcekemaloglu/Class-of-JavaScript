console.log("index.js'den selamlar");

//*named export-import

import {topla, calismaSaati, increase, decrease, myName} from "./myModules.js"

//* default export-import

// import ugurla from "./myModules.js";

console.log(topla(3,5));

console.log(calismaSaati);

console.log(increase(12));
console.log(decrease(12));

console.log(myName);

ugurla()
