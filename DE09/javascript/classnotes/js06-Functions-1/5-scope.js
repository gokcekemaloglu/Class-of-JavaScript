// ? ==========================================================
// ?                   FONKSİYONLAR-SCOPE
// ? ==========================================================
console.log("************ 5 - SCOPE *************");

//! global scope (gökteki yıldızlar gibi herkes görebilir)

let first=5
let second=12
let third=456

console.log(first,second,third);

const scopeFunction = () => {

    first = 8

    //let sayesinde yeni bir değişken oluşturuldu ve dışarıdan erişilemez
    let second=1234 //function scope (func içinde yaoılan func içinde kalır)
    console.log(second);

    let fourth=second + first //1234+8
    return fourth

}
console.log(scopeFunction()); //1242

console.log(first); // 8 içeride değiştirdiğimiz için tanımladı
console.log(second); // 12
// console.log(fourth); süslü içinde yapılduğı için süslü içinde kaldı


//******************************** */

//! global değişken

let number = 11

const fonk = () =>{

    let number=44 //!function scope

    number ++
   // console.log(number); //45
   return number
}
console.log(fonk()); //45
console.log(number); //11

// zorlamayla içerideki number'ı fonksiyon return'ü sayesinde globaldeki number değişkenine assign ettik
number=fonk() //global scope'taki number'ı function scope'taki function'a eşit hale getirdik

console.log(number);

//************************** */

//const number=7 //! Identifier 'number' has already been declared 

{ // süslünün önüne birşey yazmazsak if veya for olarak algılayacak
    number++ //46 yapacak dışarıda

    let x = 5
    let y = x + 15
    console.log(y); //20 //! block-scope

}
// console.log(y); // dışarda tanımlanmadığı için hata verir
console.log(number); //46

//? VAR

number2=100

var number2; //! hoisted (number2'ye sonradan type atadık ve hep var gibi oldu)

//console.log(number2); //100

var result="Hallo"

if (number2==100) {
    let result="Hi!" //!block-scope

    console.log(result);

    // var result="naber"// if ve for süslüleri için var güvensizdir, heryerden erişilebilir

}else{
    result="Salut" //!global-scope
    console.log(result);
}

console.log(result);




