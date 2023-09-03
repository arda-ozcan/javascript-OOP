// ----------PROTOTYPE---------

function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;

    console.log(this);
}
//Metot için Prototype kullanarak metotu birçok kez çağırmaktansa sadece bir kez çağırırız. Alandan tasarruf sağlanır.

Soru.prototype.cevabiKontrolEt = function(cevap){
    return cevap === this.dogruCevap
}

let soru1 = new Soru("Hangisi javascript paket yönetim uygulamasıdır?",{ a: "Node.js",b: "Typescript",c: "Npm"}, "c");
let soru2 = new Soru("Hangisi .net paket yönetim uygulamasıdır?",{ a: "nuget",b: "Typescript",c: "Npm"}, "a" );

let sorular = [
    new Soru("Hangisi python paket yönetim uygulamasıdır?",{ a: "Node.js",b: "Typescript",c: "Npm"}, "c"),
    new Soru("Hangisi js paket yönetim uygulamasıdır?",{ a: "Node.js",b: "Typescript",c: "Npm"}, "c" ),
    new Soru("Hangisi java paket yönetim uygulamasıdır?",{ a: "Node.js",b: "Typescript",c: "Npm"}, "c" ),
    new Soru("Hangisi c paket yönetim uygulamasıdır?",{ a: "Node.js",b: "Typescript",c: "Npm"}, "c" )
]

console.log({});
console.log(soru1.cevabiKontrolEt("c"));

