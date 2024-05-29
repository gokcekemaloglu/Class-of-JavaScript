// ÖDEV1: fiyatlar dizisinde her bir fiyata %10 zam yapalm. NOT: FOREACH kullanllmall ve orjinal dizi deäi$irilmeli. 

const fiyatlar = [100, 250, 50, 89]; 

fiyatlar.map((a)=>a*1.1).forEach((a)=>console.log(Math.round(a)))



console.log("*****************");

// ÖDEV2: fiyatlar dizisindeki fiyatı 90'dan büyük olan değerleri konsola tek tek bastiriniz. 

fiyatlar.filter((a)=>a>90).forEach((a)=>console.log(a))

console.log("*****************");

// ÖDEV3: 
// fiyatlar dizisindeki fiyatl 110'dan küçük olan değerlere %10 artış yapın ve bu değerleri konsola tek tek bastırın. 

fiyatlar.filter((a)=>a<90).forEach((a)=>console.log((a*1.1).toFixed(2)))


console.log("*****************");

// ÖDEV4: 
// maaslar dizisinde 4000'den düsük olan maaslara %50 zam yapmak istiyoruz ve bunu ayri dizi olarak saklamak istiyoruz. 

const maaslar = [3000, 5000, 4000, 6000, 6500]; 

const asgari= maaslar.filter((a)=>a<4000).map((a)=>a*1.5)

console.log(asgari);

console.log("**********************");

// ÖDEV5: 
// Maasi 4000 'den büyük olanlara %25 zam yaparak sonuçlari konsolda yazdiralim. 

maaslar.filter((a)=>a>4000).forEach((a)=>console.log(a*1.25))



console.log("**********************");