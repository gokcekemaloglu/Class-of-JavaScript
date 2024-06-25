//www.themealdb.com//

let dizi = []

fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=").then((resp)=>resp.json()).then((veri)=>{
    dizi = veri
    showScreen(veri.meals)
})

//! Ekrana Bastırma

function showScreen(data){
    // console.log(data);

    const mealsDiv = document.querySelector(".food")
    mealsDiv.innerHTML = ""

    data.forEach((a)=>{

        mealsDiv.innerHTML += `
        <div class="col-md-3 m-3">
        <p>${a.strMeal} </p>
        <img width="200px" src="${a.strMealThumb}" />
        </div>
        
        `;
    })
}

//!arama inputuna yazdığım harfleri içeren yemekleri ekrana bastır (oninput=kullanıcı input elemanına her veri girişinde çalışmaktadır)

document.querySelector("input").oninput = (e) =>{
    // console.log(e.target.value);
    // document.querySelector("input").value
    // console.log(dizi);
    let veri =dizi.meals.filter((a)=>a.strMeal.toLowercase().includes(e.target.value.toLowercase()))
    showScreen(veri)
}

