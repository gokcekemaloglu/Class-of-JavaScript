//^ Selectors

const ekleBtn = document.getElementById("ekle-btn")
const gelirInput = document.getElementById("gelir-input")
const ekleFormu = document.getElementById("ekle-formu")
const todoList = document.getElementById("todo-list")

//^ Variables
let gelirler = 0


//? Ekle Formu

ekleBtn.addEventListener("submit", (e) => {
    e.preventDefault()
    gelirler = gelirler + Number(gelirInput.value)
    console.log(gelirler);
    // gelirInput.value = ""
    ekleFormu.reset()
})



