//& Seçim Selectors

let yourChoiceDiv=document.getElementById("your-choice")
const pcChoiceDiv = document.getElementById("pc-choice")

//& Colors
const YELLOW = "#FFC538";
const RED = "#FB778B";
const GREEN = "#5AB7AC";

//& Variables
const userSelectImg = document.createElement("img")
const pcSelectImg = document.createElement("img")
let userSelection; // kullanıcının seçtiği
let pcRandom; // pc'nin rastgele ürettiği
let pcArr = [] // pc seçim dizisi

//! Selection

const selectionArticle = document.querySelector(".selection")

selectionArticle.addEventListener("click",(e)=>{
    // event içindeki target bizim için önemli js kendi oluşturduğu bir durum. hatta daha net olarak id seçiyoruz
    // console.log(e.target.id); // e dediğimiz event aslında
    userSelection = e.target.id
    // console.log(userSelection); //kontrol için yazdık
        
    if (userSelection) {
        userSelectImg.src =`./assets/${userSelection}.png`
        yourChoiceDiv.appendChild(userSelectImg)
    }
    createPCSelection()
}) 

const createPCSelection = () => {
    pcArr = ["rock", "paper", "scissor"]
    pcRandom = pcArr[Math.floor(Math.random() * 3)] //1. yöntem
    // pcRandom = pcArr[Math.trunc(Math.random() * 3)] //2. yöntem
    // console.log(pcRandom); //kontrol için yazdık
    pcSelectImg.src = `./assets/${pcRandom}.png`
    pcChoiceDiv.appendChild(pcSelectImg)
}





