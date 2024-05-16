// Short circuit, programlama terimleri içinde sıkça kullanılan bir kavramdır ve genellikle mantık operatörleri (AND, OR) ve koşullu ifadelerle ilişkilendirilir. Short circuit, bir koşulun değerlendirmesinin bir noktada durdurulması veya atlanması anlamına gelir. Bu, bazı durumları hızlı bir şekilde belirlemeye ve gereksiz işlemleri önlemeye yardımcı olabilir.

// Short circuit özellikle `&&` (ve) ve `||` (veya) mantık operatörleri ile ilgilidir.

// 1. `&&` (ve) Operatörü:
//    - `&&` operatörü kullanıldığında, sol taraftaki ifade doğru (true) değilse, sağ taraftaki ifade değerlendirilmez ve sonuç hemen `false` olarak kabul edilir.

// AND Yapısı
// Yalnız bir tane 0 olması sonucu tamamanen 0 yapar

// Short circuit

const x=-5
const y=8

if (x>0 && y>0) {
    console.log("Her iki koşulda doğru");
}
else{
    console.log("En az bir koşul yanlış");
}

// AND mükemmeliyetçidir. Hepsi doğru olunca true değer döndürür. ilk false gördüğünde onu yazar,
// eğer hepsi true ise sonuncu olanı yazar.


console.log("12" && 5 && "Merhaba");
console.log("12" && 0 && "Merhaba");
console.log("12" && "0" && "Merhaba");
console.log("" && null && "Merhaba");
console.log("  " && "gokce" && "Merhaba"/5);



// false üreten değerler:
// 0, -0 , false , null,undefined ,""
/* -------------------------------------------------------------------------- */

// OR
// Mütevazidir: En az bir doğru yeterlidir. İlk gördüğü true değere sahip değeri yazar. 
// Hepsi false olduğunda false değer üretir. Bunlardan sonuncusu yazar

console.log("" || undefined || 1 || 0);
console.log("" || 0 || [] || "gokce");







let ad = "Sebastian"
let statu = "admin"

if (ad==="Sebastian" && statu==="admin") {
    console.log("Hoş geldin");

}else{
    console.log("Bu sisteme girememzsin");
}

// isLogin || (
//     <div>
//         <p>Kullanıcı Girişi</p>
//         <button>Giriş</button>
//     </div>

// )

for (let i=1 ; i<=5; i++){
    let a = '';
    for (let j=1; j<=i; j++){
        a= a + '*';
    }
    console.log(a);
    }