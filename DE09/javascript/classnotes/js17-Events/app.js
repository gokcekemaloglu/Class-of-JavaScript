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
// yukarıda ya da aşağıda fonksiyon çağırmamız farketmiyor
// buton1.addEventListener("click",clicked)

// function clicked () {
//     sonuc.textContent = "Buton 1 clicked function called from outside"
// }

//? mouseover - mouseout eventleri

// let myImg = document.getElementById("myImage")
// // console.log(myImg);

// myImg.addEventListener("mouseover",()=>{
//     myImg.style.width = "300px"
//     console.log("image 300px oldu");
// })

// myImg.addEventListener("mouseout",()=>{
//     // myImg.style.width = "100px"
//     myImg.style.display = "none"
//     // console.log("image 100px oldu");
// })

// buton1.addEventListener("click",()=>{
//     myImg.style.display = "block"
// })

//? drop down menu

// let secim = document.getElementById("colors")

// secim.addEventListener("change",()=>{
//     //console.log("değişti");// deeğişikliği yakaladı mı kontrol amaçlı
//     let selectedColor = secim.value
//     // console.log(selectedColor); // geğişen rengi yakaladı
//     document.getElementById("selectedColorP").textContent = `Seçilen Renk : ${selectedColor}`
//     document.body.style.backgroundColor = selectedColor
// })

//? Random background color

//random renk
function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

const buton2 = document.getElementById("colorButton")

const colors = []
const colorL = document.getElementById("colorList")

buton2.addEventListener("click",()=>{
    let renk = getRandomColor()
    // console.log(renk);
    const colorObject = {color: renk}
    colors.push(colorObject)
    console.log(colors);
    document.body.style.backgroundColor = renk

    //yeni rengi ekrana listeleme
    const listItem = document.createElement("li")
    listItem.style.backgroundColor = renk
    listItem.textContent = renk
    listItem.addEventListener("click",()=>{
        document.body.style.backgroundColor = renk        
    })
    
    colorL.appendChild(listItem) // sona ekle
    // colorL.prepend(listItem) // öne ekle
})

//! Telefon Örneği

// let resim = document.querySelector(".resim")
// let ses1 = document.querySelector(".ses1")
// let ses2 = document.querySelector(".ses2")

// let ara = document.querySelector(".ara")
// let baglat = document.querySelector(".baglat")
// let konus = document.querySelector(".konus")
// let kapat = document.querySelector(".kapat")

// // Ara Butonu

// ara.addEventListener("click", ()=>{
//     ses2.play()
//     ses2.volume = 0.1
// })

// baglat.addEventListener("click", ()=>{
//     ses2.pause()
//     ses1.play()
//     ses1.volume = 0.1
//     resim.src = "./helpers/connect.jpg"
// })

// konus.addEventListener("click", ()=>{
//     ses1.pause()
//     resim.src = "./helpers/call.jpg"
// })

// kapat.addEventListener("click", ()=>{
//     ses1.pause()
//     ses2.pause()
//     resim.src = "./helpers/images.jpg"
// })

//! Input Örneği

// let alan = document.getElementById("username")
// let buton3 = document.getElementById("login")
// let user = document.getElementById("displayUsername")

// // alan.addEventListener("input",()=>{
// //     let username = alan.value
// //     user.textContent = `Girdiğiniz kullanıcı adı: ${username}`
// // })

// let usr = `Mark`

// buton3.addEventListener("click",()=>{
//     let username = alan.value

//     if (username === usr) {
//         user.textContent = `Girdiğiniz kullanıcı adı: ${username}`
//         alan.value=``
//     } else {
//         user.textContent = `Girdiğiniz kullanıcı adı yanlış, lütfen tekrar deneyin`
        
//     }
// })

const numbers = document.querySelectorAll('.number') //Array benzeri Nodelist döndürür

// console.log(numbers);

numbers.forEach((number, index)=>{
    number.addEventListener('click',()=>{
        if (number.textContent === 'X') {
            number.textContent = index + 1
        } else {
            number.textContent = 'X'
        }
    })
})

//* ödev Sayı tahmin oyunu yapın

