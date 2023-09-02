let soru = {
    soruMetni: "Hangisi javascript paket yönetim uygulamasıdır?",
    cevapSecenekleri:{
        a: "Node.js",
        b: "Typescript",
        c: "Npm"
    },
    dogruCevap: "c",
    cevabiKontrolEt: function(cevap) {
        return cevap === this.dogruCevap;
    }
}
let soru2 = {
    soruMetni: "Hangisi .net paket yönetim uygulamasıdır?",
    cevapSecenekleri:{
        a: "nuget",
        b: "Typescript",
        c: "Npm"
    },
    dogruCevap: "a",
    cevabiKontrolEt: function(cevap) {
        return cevap === this.dogruCevap;
    }
}
console.log(soru.soruMetni);
console.log(soru.cevabiKontrolEt("a"));
console.log(soru2.cevabiKontrolEt("a"));