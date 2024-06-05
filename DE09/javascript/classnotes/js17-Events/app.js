let buton1 = document.getElementById("myButton")
let sonuc = document.getElementById("result")

// console.log(buton1);
// console.log(sonuc);

//! Callback yazım çeşitleri

//? 1. Yol:

// buton1.addEventListener("click",function konsol(){
//     console.log("buton1 clicked");
// })

//? 2. Yol: (Fonksiyon ismi opsiyonel)

// buton1.addEventListener("click",function konsol(){
//     console.log("buton1 clicked");
//     sonuc.innerText += "Buton 1 clicked" ;
     // sonuc.textContent += "Buton 1 clicked" ; // yukarıdaki ile ikisi aynı şeyi yapıyor
// })

// buton1.addEventListener("dblclick",function konsol(){
    
//     sonuc.textContent = "Buton 1 double clicked" ;
//     console.log("buton1 double clicked");
    
// })

//? 3. Yol: dışardan arrow / named(decleration) fonksiyon çağırma

// const clicked2 = () => {sonuc.textContent = "Button 1 clicked"}

// buton1.addEventListener("click",clicked2) //çağırma parantezleri olmadan yazılacak, eğer yazarsak parantezi otomatik olarak çağırıp çalıştıracak. biz tıklanınca istiyoruz

//? 4. Yol dışarıdan fonksiyon çağırarak

buton1.addEventListener("click",clicked)

function clicked () {
    sonuc.textContent = "Buton 1 clicked function called from outside"
}







