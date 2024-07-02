console.log(("myModule'den selamlar"));

//*************************************/
//* ES-MODULES
//*************************************/
//? ES Modules, EcmaScript 2015 versiyonu ile gelmiştir.
//? Günümüzde birçok browser ES modül yapısını desteklemektedir.
//? JS kodlarının kolay ve performansli bir şekilde farklı dosyalara ayrilmasina ve gerektiginde birleştirmesine olanak saglamaktadir.
//? Bir degisken,dizi,obje, fonksiyon, class v.b "export" deyimi ile başka dosyalarinin kullanimina açilmabilir.
//? Kullanima acilanlar ise import deyimi ile istenilen dosyaya eklenebilir.

export const calismaSaati = 40 

//* named export

export function topla (s1,s2) {
    return s1 + s2
}

let counter = 5 
const increase = (miktar) => counter += miktar

const decrease = (miktar) => counter -= miktar

const myName = "Felix"

export {increase, decrease, myName}

//* default export (sayfanın tamamını export etmek için)
//? Bir sayfada 1 tane default export olabilir
//? Tüm yapı tek seferde export edilir

//^ 1.Yol
// function ugurla(){
//     console.log("görüşmek üzere JS")
// }

// export default ugurla;

//^ 2.Yol
export default function ugurla(){
    console.log("görüşmek üzere JS")
}
