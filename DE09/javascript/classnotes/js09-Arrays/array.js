// ?=========================================================
// ?                DİZİLER (ARRAYS)
// ?=========================================================

//* Dizi Tanımlama
//* ---------------------------------------------------------


//! 1. yöntem (Array literal) tecih edilen yöntem


const yaslar=[30,29,45,27,12]
console.log(yaslar);

// yaslar=[1,2,3] //Assignment to constant variable

//! 2. yöntem (Array constracter)

const cars=new Array("BMW","Mercedes","Volvo")
console.log(cars);

const birth=1979

const isimler=["erkan", "ayca", "mustafa", 2024-birth,"kemal", true, yaslar]

console.log(isimler);

console.log(isimler[2]); //mustafa
console.log(isimler[6][1]); // yaslar dizisinin 29 una ulaştık

console.log(--isimler[6][1]); // 29-1=28
console.log(isimler[6][1]); // 28
isimler[5]=false
console.log(isimler[5]);


// ?=========================================================
// ?                DİZİYİ DEĞİŞTİREN METODLAR (MUTATOR)
// ?=========================================================

//*pop() dizinin son elemanını siler, yazdırırsak sildiği elemanı döndürür

const meyveler = ["Elma", "Erik", "Armut", "Muz", "Kivi"];

meyveler.pop() //kivi silindi

console.log(meyveler); // ["Elma", "Erik", "Armut", "Muz"]
console.log(meyveler.pop()); // Muz (sildiği elemanı gösterir)


//*shift() dizinin ilk elemanını siler, yazdırırsak sildiği elemanı döndürür

console.log(meyveler.shift()); //elmayı sildi
console.log(meyveler); //["Erik", "Armut"]


//*push() dizinin sonuna eleman ekler, yazdırırsak dizinin güncel eleman sayısını döndürür

console.log(meyveler.push("çilek", "Kavun", "karpuz"));

console.log(meyveler);


//*unshift() dizinin başına eleman ekler, yazdırırsak dizinin güncel eleman sayısını döndürür

meyveler.unshift("Ayva")

console.log(meyveler); //["Ayva", "Erik", "Armut", "çilek", "Kavun",


//*reverse() dizinin tamamını ters çevirir (sadece dizilerde çalışır)


meyveler.reverse();
console.log(meyveler); //["karpuz", "Kavun", "çilek", "Armut", "Erik","Ayva"]

console.log(meyveler[3].split("").reverse()); //['t', 'u', 'm', 'r', 'A']

console.log(meyveler);

//*splice() 1. parametre dizinin eleman ekleyeceğimiz index ini belirtir
//*2. parametre=0 ise belirttiğim index teki elemanı sağa ittir, artık orada yeni yazdığım olsun
//*2.parametre=1 ise belirttiğim index teki elemanı sil üstüne yaz

meyveler.splice(2,1,"Ananas") // 1 yazmak çileği sil ananas yaz demek, 1 yerine 0 yazarsak çilek kalır önüne ananas yazar

console.log(meyveler); //["karpuz", "Kavun", "Ananas", "Armut", "Erik","Ayva"]

meyveler.splice(3,0,"çilek") // 0 yazarsak Armut kalır önüne çilek yazar
console.log(meyveler); //["karpuz", "Kavun", "Ananas", "kiraz", "Armut", "Erik", "Ayva"]

meyveler.splice(4,1); // 4 indexli elemanı sadece siler
console.log(meyveler); 

//*sort(), string ifadelerde alfabetik sıralar(ASCII değerlerine göre)
//* sort metodu diziyi iterasyona uğratır ve parametre olarak aldığı arrow fonksiyonunu (a-b>0 önce b yi yaz gibi) dizinin her bir elemanına uygular. Bu sayade küçük sayılar ile büyük sayıları yer değişirerek sıralama işlemini gerçleştirir.

meyveler.sort()
console.log(meyveler);


const number = [3, 5, 1, 35, 10, 22, 55, 77, 231];

number.sort()  // gördüğü ilk rakama göre sıralıyor
console.log(number); // [1, 10, 22, 231, 3, 35, 5, 55, 77]


number.sort((a,b)=>a-b) // bu işlem yardımıyla küçükten büyüğe sıralıyor
console.log(number); // [1, 3, 5, 10, 22, 35, 55, 77, 231]

number.sort((a,b)=>b-a) // bu işlem yardımıyla büyükten küçüğe sıralıyor
console.log(number); // [231, 77, 55, 35, 22, 10, 5, 3, 1]





