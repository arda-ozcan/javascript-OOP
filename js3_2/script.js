// let soru = {
//     soruMetni: "Hangisi javascript paket yönetim uygulamasıdır?",
//     cevapSecenekleri:{
//         a: "Node.js",
//         b: "Typescript",
//         c: "Npm"
//     },
//     dogruCevap: "c",
//     cevabiKontrolEt: function(cevap) {
//         return cevap === this.dogruCevap;
//     }
// }
// let soru2 = {
//     soruMetni: "Hangisi .net paket yönetim uygulamasıdır?",
//     cevapSecenekleri:{
//         a: "nuget",
//         b: "Typescript",
//         c: "Npm"
//     },
//     dogruCevap: "a",
//     cevabiKontrolEt: function(cevap) {
//         return cevap === this.dogruCevap;
//     }
// }

function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
    this.cevabiKontrolEt = function(cevap){
        return cevap === this.dogruCevap
    }
}
let soru1 = new Soru("Hangisi javascript paket yönetim uygulamasıdır?",{ a: "Node.js",b: "Typescript",c: "Npm"}, "c");
let soru2 = new Soru("Hangisi .net paket yönetim uygulamasıdır?",{ a: "nuget",b: "Typescript",c: "Npm"}, "a" );

let sorular = [
    new Soru("Hangisi python paket yönetim uygulamasıdır?",{ a: "Node.js",b: "Typescript",c: "Npm"}, "c"),
    new Soru("Hangisi js paket yönetim uygulamasıdır?",{ a: "Node.js",b: "Typescript",c: "Npm"}, "c" ),
    new Soru("Hangisi java paket yönetim uygulamasıdır?",{ a: "Node.js",b: "Typescript",c: "Npm"}, "c" ),
    new Soru("Hangisi c paket yönetim uygulamasıdır?",{ a: "Node.js",b: "Typescript",c: "Npm"}, "c" )
]
console.log(soru1.soruMetni);
console.log(soru1.dogruCevap);

console.log(soru2.cevabiKontrolEt("a"));
console.log(soru2.soruMetni);
console.log(soru2.dogruCevap);

console.log(sorular[0].soruMetni);
for(let i of sorular) {
    console.log(i.soruMetni);
}
