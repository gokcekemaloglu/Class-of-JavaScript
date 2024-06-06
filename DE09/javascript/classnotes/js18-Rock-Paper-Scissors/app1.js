//& Seçim Selectors

let yourChoiceDiv=document.getElementById("your-choice")
const pcChoiceDiv = document.getElementById("pc-choice")

//& message
const messagePar = document.querySelector(".message")


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

//& Score 
const scoreCardSection = document.querySelector(".score-card")
const pcScoreSpan = document.getElementById("pc-score")
const yourScoreSpan = document.getElementById("your-score")
const domTopscore = document.getElementById("top-score")

//& Modal

const modalCardSection = document.querySelector(".modal-card")
const finalMessagePar = document.getElementById("final-message")
const playAgainButton = document.getElementById("play-again")

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
    calculateResult()
}

const calculateResult = () => {
    console.log(userSelection, pcRandom);
    if (userSelection === pcRandom) {
        draw()
    } else {
        if (userSelection === "rock") {
            pcRandom ==="paper" ? youLost() : youWin() //pc paper ise lose, değilse win
        } else if (userSelection === "scissor"){
            pcRandom ==="rock" ? youLost() : youWin() 
        } else if (userSelection === "paper") {
            pcRandom ==="scissor" ? youLost() : youWin()
        }
    }
    if (pcScoreSpan.textContent ==="10" || yourScoreSpan === "10") {
        openModal()
    }
}

const draw = () => {
    messagePar.textContent = "It's a draw"
    scoreCardSection.style.color = YELLOW
    messagePar.style.backgroundColor = YELLOW
}

const youLost = ()=> {
    // console.log("you lost"); // gerek yok
    messagePar.textContent = "You lost"
    scoreCardSection.style.color = RED
    messagePar.style.backgroundColor = RED
    pcScoreSpan.textContent++
}

const youWin = ()=> {
    // console.log("you win"); // gerek yok
    messagePar.textContent = "You win"
    scoreCardSection.style.color = GREEN
    messagePar.style.backgroundColor = GREEN
    yourScoreSpan.textContent++
}

const openModal = () => {

    console.log(modalCardSection.classList);
    
}




