const korhazBajmok =require('../database');


const paciensek=[ ...korhazBajmok.doktorok[0].paciensek, ...korhazBajmok.doktorok[1].paciensek];  

//console.log(paciensek[0]);

const paci=paciensek;
for(let i=0;i<7;i++){ 
if(paci[i].insurance && paci[i].kor >40){
    console.log("okaaay he/she have");
}
else{
    console.log("nooo he/she dont have");
}
}
// for(let i=0;i<paciensek.length;i++){
//  console.log(paciensek[i].nev);

// }










// let bla = new Set();

// for (let i = 0; i < korhazBajmok.doktorok.length; i++) {
//   for (let j = 0; j < korhazBajmok.doktorok[i].paciensek.length; j++) {
//     let paciens = korhazBajmok.doktorok[i].paciensek[j];
//     let hu = `${paciens.nev} - ${paciens.kor} éves - ${paciens.magassag} magas - ${paciens.suly} súly`;
//     bla.add(hu);
//   }
// }

// console.log(bla);