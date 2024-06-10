//* Variables

const num = document.querySelectorAll(".num")
const operator = document.querySelectorAll(".operator")

const previous = document.querySelector(".previous-display")
const current = document.querySelector(".current-display")

const equal = document.querySelector(".equal")
const ac = document.querySelector(".ac")

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
    if (islem) {
        previous.textContent = `${ustEkranText} ${islem}`
    }
    else{
        previous.textContent = ""
    }
}

operator.forEach((op)=> {
    op.onclick = ()=> {

        if (altEkranText === "") return

        if (altEkranText && ustEkranText) hesapla()

        islem = op.textContent
        ustEkranText = altEkranText
        altEkranText = ""
        updateEkran()
    }
})

equal.onclick=()=>{
    hesapla()
    updateEkran()
}

const hesapla = () => {
    switch (islem) {
        case "+":
            sonuc = Number(ustEkranText) + Number(altEkranText)
            break;
    
        case "-":
            sonuc = ustEkranText - altEkranText
            break;
    
        case "x":
            sonuc = ustEkranText * altEkranText
            break;
    
        case "÷":
            sonuc = ustEkranText / altEkranText
            break;
    
        default:
            break;
    }
    altEkranText = sonuc
    ustEkranText = ""
    islem=""
}

ac.onclick=()=>{
    islem = ""
    altEkranText = ""
    ustEkranText = ""
    updateEkran()
} 





