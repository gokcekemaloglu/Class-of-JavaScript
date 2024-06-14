//^ Selectors

const ekleBtn = document.getElementById("ekle-btn")
const gelirInput = document.getElementById("gelir-input")
const ekleFormu = document.getElementById("ekle-formu")

//^ Hesap Tablosu

const gelirinizTd = document.getElementById("geliriniz")
const giderinizTd = document.getElementById("gideriniz")
const kalanTd = document.getElementById("kalan")

//^ Variables

let gelirler = 0
let harcamaListesi = []

//^ Harcama Formu

const harcamaFormu = document.getElementById("harcama-formu")
const harcamaAlaniInput = document.getElementById("harcama-alani")
const tarihInput = document.getElementById("tarih")
const harcamaInput = document.getElementById("miktar")


//? Ekle Formu

ekleFormu.addEventListener("submit", (e) => {
    e.preventDefault() // reload'u önler
    gelirler = gelirler + Number(gelirInput.value)
    // console.log(gelirler);
    // gelirInput.value = ""
    ekleFormu.reset()
    localStorage.setItem("gelirler", gelirler)
    gelirinizTd.textContent = new Intl.NumberFormat().format(gelirler)

})

window.addEventListener("load", () => {
    gelirler = Number(localStorage.getItem("gelirler")) || 0
    gelirinizTd.textContent = new Intl.NumberFormat().format(gelirler)
    tarihInput.valueAsDate = new Date()

})


//* DOM

harcamaFormu.addEventListener("submit", (e) => {
    e.preventDefault() // reload'u önler
    // console.log(tarihInput.value);

    const yeniHarcama = {
        id: new Date().getTime(), //! sistem saatini milisaniye olarak verir
        tarih: new Date(tarihInput.value).toLocaleDateString(),
        miktar: harcamaInput.value,
        alan: harcamaAlaniInput.value,

    }
    // console.log(yeniHarcama);
    // console.log(yeniHarcama.tarih);
    harcamaListesi.push(yeniHarcama)
    console.log(harcamaListesi);
    harcamaFormu.reset()
    tarihInput.valueAsDate = new Date()
})



