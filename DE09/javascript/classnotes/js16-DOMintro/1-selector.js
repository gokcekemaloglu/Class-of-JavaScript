//* ======================================================
//*                   GETELEMENTBYID()
//* ======================================================

//*example1 buton style

const buton = document.getElementById("btn");

buton.style.width = "200px";

buton.style.height = "80px";
buton.style.fontSize = "80px";
buton.style.backgroundColor = "red";

//*example2 paragraf style

const paragraf = document.getElementById("par").style;
paragraf.width = "300px";
paragraf.color = "red";
paragraf.background = "yellow";
paragraf.margin = "220px";

//* ======================================================
//*                   GETELEMENTSBYTAGNAME()
//* tag ismiyle çağırıyoruz.aynı tag den çok olacağı için index le hangisini seçtiğimizi belirtiyoruz (HTMLCollection- Array özellikleri gösterir)
//*================================================

const resim = document.getElementsByTagName("img");

console.log(resim); //HTMLCollection

resim[0].style.width = "300px";
resim[1].style.border = "5px solid blue";

//* ======================================================
//*                   GETELEMENTSBYCLASSNAME()
//* class ismiyle çağırıyoruz
//*======================================================
const baslik = document.getElementsByClassName("HBIR");
console.log(baslik);

//* HTMLCollection larda ARRAY İ değiştirmeyen metodları kullanabilirsiniz

for (let i = 0; i < baslik.length; i++) {
  baslik[i].style.color = "red";
  baslik[i].style.textAlign = "center";
}

baslik[0].innerHTML = "<a href='https://clarusway.com/'>DOM ÇOK GÜZEL</a>";

baslik[1].textContent = "HALLO";

//* sadece içerik değişecekse textContent tercih edilir, ama innerHTML de etiketi değiştirebildiği gibi, sadece içeriği de değiştirebilir


  //* ======================================================
//*                  QUERYSELECTOR,QUERYSELECTORALL
//*======================================================

document.querySelector("title").textContent="DOM MANUPULATION 💕"

document.querySelector("#badi").style.backgroundImage="linear-gradient(green,pink)"

document.querySelector(".HIKI").style.color="pink"

document.querySelector("p").style.fontSize="50px"

const parag = document.querySelectorAll("p")




