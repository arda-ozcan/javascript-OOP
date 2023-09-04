function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
}

Soru.prototype.cevabiKontrolEt = function(cevap){
    return cevap === this.dogruCevap
}

let soru1 = new Soru("Hangisi javascript paket yönetim uygulamasıdır?",{ a: "Node.js",b: "Typescript",c: "Npm"}, "c");
let soru2 = new Soru("Hangisi .net paket yönetim uygulamasıdır?",{ a: "nuget",b: "Typescript",c: "Npm"}, "a" );

let sorular = [
    new Soru("1-Hangisi js paket yönetim uygulamasıdır?",{ a: "Node.js",b: "Typescript",c: "Npm"}, "c"),
    new Soru("2-Hangisi js paket yönetim uygulamasıdır?",{ a: "Node.js",b: "Typescript",c: "Npm"}, "c" ),
    new Soru("3-Hangisi js paket yönetim uygulamasıdır?",{ a: "Node.js",b: "Typescript",c: "Npm"}, "c" ),
    new Soru("4-Hangisi js paket yönetim uygulamasıdır?",{ a: "Node.js",b: "Typescript",c: "Npm"}, "c" )
]

function Quiz(sorular) {
    this.sorular = sorular;
    this.soruIndex = 0;
}

Quiz.prototype.soruGetir = function() {
    return this.sorular[this.soruIndex];
}

const quiz = new Quiz(sorular);
// console.log(quiz.soruGetir());
//2. soruyu getirmek için, manuel.
// quiz.soruIndex += 1;
// console.log(quiz.soruGetir());

document.querySelector(".btn-start").addEventListener("click", function() {
    if(quiz.sorular.length != quiz.soruIndex) { 
        console.log(quiz.soruGetir());
        quiz.soruIndex += 1;
    }
    else {
        console.log("Quiz Bitti!");
    }
})
