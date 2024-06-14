//^ Selectors

const ekleBtn = document.getElementById("ekle-btn")
const gelirInput = document.getElementById("gelir-input")
const ekleFormu = document.getElementById("ekle-formu")
const temizleBtn = document.getElementById("temizle-btn")

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

//^ Harcama  Tablosu

const harcamaBody = document.getElementById("harcama-body")


//? Ekle Formu  
//* Gelirlerialmamızı sağlar

ekleFormu.addEventListener("submit", (e) => {
    e.preventDefault() // reload'u önler
    gelirler = gelirler + Number(gelirInput.value)
    // console.log(gelirler);
    // gelirInput.value = ""
    ekleFormu.reset() // input alanlarını resetler
    localStorage.setItem("gelirler", gelirler) // local storage ' a kaydeder
    gelirinizTd.textContent = new Intl.NumberFormat().format(gelirler) // DOM'a yazar
    hesapla() // hesaplamayı yapar

})

//^ Sayfa ilk açıldığında varsa local storage verilerini almak ve ekrana yazdırmak için

window.addEventListener("load", () => {
    gelirler = Number(localStorage.getItem("gelirler")) || 0
    tarihInput.valueAsDate = new Date() 
    harcamaListesi = JSON.parse(localStorage.getItem("harcamalar")) || [] //Harcamaları DOM'a yazdırır
    harcamaListesi.forEach((harcama) => harcamaYaz(harcama)) //
    hesapla()

})

//^ Harcamaların girilmesi kısmı

harcamaFormu.addEventListener("submit", (e) => {
    e.preventDefault() // reload'u önler
    // console.log(tarihInput.value);
    
    const yeniHarcama = { // Girilen değerlerle bir harcama objesi oluşturur
        id: new Date().getTime(), //! sistem saatini milisaniye olarak verir
        tarih: new Date(tarihInput.value).toLocaleDateString(), //Tarihi 14.06.2024 şeklinde yazmak için
        miktar: harcamaInput.value,
        alan: harcamaAlaniInput.value,
        
    }
    // console.log(yeniHarcama);
    // console.log(yeniHarcama.tarih);
    harcamaListesi.push(yeniHarcama) // her yeni harcamayı listeye ekler
    console.log(harcamaListesi);
    harcamaFormu.reset() // Formdaki alanları siler
    tarihInput.valueAsDate = new Date() // sayfa açıldığında günün tarihini HTML'e yazar
    localStorage.setItem("harcamalar", JSON.stringify(harcamaListesi)) // harcama listesini local storage a yazar
    harcamaYaz(yeniHarcama)
    hesapla()
})

//* DOM'a yazma fonksiyonu

const harcamaYaz  = ({id, tarih, miktar, alan}) => {
    // const {id, tarih, miktar, alan} = yeniHarcama // data destruction
    // harcamaBody.innerHTML += `
    // <tr>
    //     <td>${tarih}</td>
    //     <td>${alan}</td>
    //     <td>@${miktar}</td>
    //     <td><i id=${id} class="fa-solid fa-trash-can text-danger"  type="button"></i></td>
    // </tr>    
    // `
    const tr = document.createElement("tr") // tr elementi oluşturur

    //tr nin içindeki td elemenlerini oluşturur
    const appendTd = (content) => {
        const td = document.createElement("td")
        td.textContent = content
        return td
    }

    //Çöp kutusunun içeriğini oluşturur
    const createLastTd = () => { // burası appendTd de oluşturulamıyor, çöp butonu çıkması için yapıyoruz, aşağıya gönderiyoruz
        const td = document.createElement("td")
        const i = document.createElement("i")
        i.id = id;
        i.className = "fa-solid fa-trash-can text-danger"
        i.type = "button"
        td.appendChild(i)
        return td
    }

    // oluşturulan 4 td'yi tr'ye ekler

    tr.append(
        appendTd(tarih),
        appendTd(alan),
        appendTd(miktar),
        createLastTd()  // burası çöp kutusunu yakalıyor
    )

    // harcamaBody.append(tr) // sona ekler
    harcamaBody.prepend(tr) // üste ekler

}

//^ DOM'daki gelir gider hesaplarını yapar ve sonuçları yazdırır

const hesapla = () => {
    const giderler = harcamaListesi.reduce((toplam, harcama) => toplam + Number(harcama.miktar),0)
    // console.log(giderler);
    gelirinizTd.textContent = new Intl.NumberFormat().format(gelirler) //1000 ayıraçları ve desimal işareti için kullanıcının bölgesel ayarlarını kullanmak için // bölgesel olarak yazdırıyor
    giderinizTd.textContent = new Intl.NumberFormat().format(giderler)
    kalanTd.textContent = gelirler - giderler
    // console.log(giderinizTd);

    const borclu = gelirler - giderler < 0  // ? "text-danger"  // borcu varsa kırmızı //ben yazdım
    console.log(borclu);

    kalanTd.classList.toggle("text-danger", borclu) //toggle; eğer bu özellik varsa ekler yoksa siler
    document.getElementById("kalanTh").classList.toggle("text-danger", borclu)

}

//^ Çöp butonuna tıklayınca ilgili satırı siler ve diğer gerekli işlemleri yapar

harcamaBody.addEventListener("click", (e) => {
    if(e.target.classList.contains("fa-trash-can")) {
        // console.log("clicked"); //çalışıyor mu diye kontrol etmek için
        
        // DOM'dan tr (ilgili satırı) siler
        e.target.parentElement.parentElement.remove() 

        // satrırın id'sini aldık
        const id = e.target.id 

        // ilgili satırı harcama listesinden kaldırdık
        harcamaListesi = harcamaListesi.filter((harcama) => harcama.id != id)  

        // yeni oluşan harcama listesini localstorage'de güncellemek
        localStorage.setItem("harcamalar", JSON.stringify(harcamaListesi))
        hesapla() // silinme işleminden sonra hesap kısmını güncelle
    }
})

//^ Bilgileri temizle butonu fonksiyonu

temizleBtn.addEventListener("click", () => {
    if (confirm("Tüm bilgileriilmek istediğinize emin misiniz?")) {
        harcamaListesi = [] // Harcama Listesini boşaltır
        gelirler = 0 // gelirler değişkenini sıfırlar
        harcamaBody.innerHTML = "" //DOM'daki veriyi siler
        // localStorage.clear() //! Localstorage'daki herşeyi siler
        localStorage.removeItem("gelirler") //! Localstorage'daki gelirleri siler
        localStorage.removeItem("harcamalar") //! Localstorage'daki harcamaları siler
        hesapla() // herşey silindikten sonra tekrar hesaplar ve sıfırlar (DOM'daki hesaplamayı yapmak için)
    }
})



