//* ======================================================
//*                    (OOP)
//* Object Oriented Programming
//* ======================================================

//* Object Literals

const book1 = {
    title: "Karamazov Kardeşler",
    yazar: "Dostoyevski",
    year: 1980,
    ozetFunction: function (){
        return `${this.title} kitabını ${this.year} yılında ${this.yazar} yazmıştır.`
    }
}

console.log(book1.title);
console.log(book1.ozetFunction());

const book2 = {
    title: "Yaprak Dökümü",
    yazar: "Reşat Nuri Güntekin",
    year: 1980,
    ozetFunction: function (){
        return `${this.title} kitabını ${this.year} yılında ${this.yazar} yazmıştır.`
    }
}

console.log(book2.title);
console.log(book2.ozetFunction());
//? object literals yöntemi ile fazla sayıda yeni  Object ler oluşturmak oldukça zahmetlidir, ayrıca programcılık yaklaşımı açısından da çok tekrar içerdiği için uygun değildir
  // DRY (Don't Repeat Yourself) Prensibi için uygun değildir
//? SOLUTION:  Object Constructor kullan (ES5 and ES6)
