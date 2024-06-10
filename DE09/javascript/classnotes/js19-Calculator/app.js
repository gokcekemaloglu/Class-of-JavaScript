//* Variables

const num = document.querySelectorAll(".num")
const operator = document.querySelectorAll(".operator")

const previous = document.querySelector(".previous-display")
const current = document.querySelector(".current-display")

const equal = document.querySelector(".equal")
const ac = document.querySelector(".ac")
const percent = document.querySelector(".percent")

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
    
    // ? kullanıcı 0 girerse, sonrasında 0 ve . dışında bir sayı girerse, ekranda sadece girilen yeni sayı (0 iptal olsun) gözüksün

    if (altEkranText === "0" && num !== "0" && num != ".") {
        
        altEkranText = num
        updateEkran()
        return
    }
    
    //? kullanıcı ilk başta 0 girer ardından tekrar 0 girerse, girilmesin, tek 0 dönsün
    
    if (altEkranText == "0" && num == "0") return
    
    
    //? kullanıcı herhangi biryerde . girmişken, tekrar nokta girmeye kalkarsa giremesin

    if (num === "." && altEkranText.includes(".")) return // istersek başına 0. ekle de diyebiliriz
    
    //? kullanıcı 10 haneden sonra girmesin

    // if (altEkranText.length >= 10) return

    //? kullanıcı 10dan fazla girerse exponential olarak bir gösterim yapsın
    // const deger = (altEkranText.length>=10) ? altEkranText.length.toExponential() : altEkranText 
   
    // altEkranText = deger
    
    //  const deger=(altekranText.length>10) ? altekranText="error" : altekranText
    // altekranText=deger

    
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
        //     {
        //     islem = op.textContent
        //     updateEkran()
        // }

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
    altEkranText = ""
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

percent.onclick = () => {
    altEkranText = altEkranText / 100
    updateEkran()
}






