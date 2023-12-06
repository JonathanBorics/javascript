 const korhazBajmok =require('./database');


const paciensek=[ ...korhazBajmok.doktorok[0].paciensek,
 ...korhazBajmok.doktorok[1].paciensek,
 ...korhazBajmok.doktorok[2].paciensek
];  
const medicine=[];
const Brufen = "Brufen";
const Bensedin = "Bensedin";
const Glucophage = "Glucophage";
const Diclophen = "Diclophen";

for(let i=0;i<paciensek.length;i++){
    
    const gyogyszerlista =[];
    const nev = paciensek[i].nev;
    const magassag = paciensek[i].magassag;
    const suly = paciensek[i].suly;
    const kor = paciensek[i].kor;
    const id  = paciensek[i].id;
    const insurance = paciensek[i].insurance;  
    
    let pacienssulya = Number.parseInt(suly);
    let paciensmagassag = Number.parseInt(magassag);
    let pacienskor = Number.parseInt(kor); 
  
    
      if (paciensmagassag > 175) {
        gyogyszerlista.push(Brufen);
      }
    
  if (pacienssulya < 70 && pacienskor < 30) {
    gyogyszerlista.push(Bensedin);
  }
  if (pacienssulya > 100 && insurance) {
    gyogyszerlista.push(Glucophage);
  }
  if (pacienskor > 60 && insurance) {
    gyogyszerlista.push(Diclophen);
  }
    
  medicine[nev] = gyogyszerlista.length > 0 ? gyogyszerlista : 0; 
    

}
console.log(medicine);  
