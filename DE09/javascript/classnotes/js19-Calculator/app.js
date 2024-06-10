//* Variables

const num = document.querySelectorAll(".num")
const operator = document.querySelectorAll(".operator")

const previous = document.querySelector(".previous-display")
const current = document.querySelector(".current-display")

const equal = document.querySelector(".equal")

let altEkranText = "" 
let ustEkranText = ""
let islem = ""


// 

num.forEach((number)=>{
    number.onclick = ()=> {
        console.log(number);
        // altEkranText = number.textContent
        // current.textContent = altEkranText
        // yukarıdaki işlem fonksiyonda yapılması için bu şekilde kullanıldı
        ekranaHazırlık(number.textContent)
    }
})

//! Functions (Ekrana Hazırlık İşlemleri)

const ekranaHazırlık = (num)=> {
    altEkranText += num
    updateEkran()
}




//! (Ekranda Gösterme İşlemleri)

const updateEkran = () => {
    current.textContent = altEkranText
    previous.textContent = ustEkranText
}

operator.forEach((op)=> {
    op.onclick = ()=> {
        islem = op.textContent
        ustEkranText = altEkranText + islem
        altEkranText = ""
        updateEkran()
    }
})



