
const GAMES_TO_PLAY = 10;



function start() {
  alert('Markmiðið er að svara eins mörgum af 10 dæmum rétt eins hratt og mögulegt er.');
  play();
  
}

/**
 * Spilar einn leik. Heldur utan um hvenær leikur byrjaði, hvenær endar og
 * fjölda réttra svara. Eftir leik eru birtar upplýsingar um niðurstöðu:
 *   Þú svaraðir X af 10 dæmum rétt á Y sekúndum
 *   Meðalrétt svör á sekúndu eru Z
 * Þar sem Y og Z hafa tvo aukastafi.
 *
 * Ef notandi ýtir á "Cancel" í leik eru skilaboðin "Hætt í leik." birt og engar
 * upplýsingar um niðurstöður.
 *
 */
function play() {
  let rsvör = 0;
  const start = new Date();
  for (i = 0; i < 10; i++) { 
    let svarid = ask();
    if(svarid===null){haetta();}
    else if(svarid){
      rsvör += 1;
    }
   
}
  
  const finish = new Date();
  
  if(rsvör != -1){
    alert(`Þú svaraðir ${(rsvör)} af 10 dæmum rétt á ${(finish-start)/1000} sekúndum\nMeðalrétt svör á sekúndu eru ${(((rsvör)/((finish-start)/1000))).toFixed(2)}`);
    spilaAnnan();
  }
  
  
}

/**
 * Spyr einnar spurningar og skilar upplýsingum um svar (mögulega með því að
 * nota true, false og null ef notandi hættir). Birtir notanda propmpt til að
 * svara í og túlkar svarið yfir í tölu.
 *
 * Mögulegar spurningar eru:
 * - `+` dæmi þar sem báðar tölur geta verið á bilinu `[1, 100]`
 * - `-` dæmi þar sem báðar tölur geta verið á bilinu `[1, 100]`
 * - `*` dæmi þar sem báðar tölur geta verið á bilinu `[1, 10]`
 * - `/` dæmi þar sem fyrri tala er á bilinu `[2, 10]` og seinni talan er fyrri
 *   talan sinnum tala á bilinu `[2, 10]` þ.a. svarið verði alltaf heiltala
 *
 * Sniðugt væri að færa það að búa til spurningu í nýtt fall sem ask() kallar í.
 */
function ask() {
  const operators2 = ['+', '-', '*', '/'];
  const whatNow = operators2[randomNumber(0, 3)];
  const rando = randomNumber(1,100);
  const rando1 = randomNumber(1,100);
  const rando2 = randomNumber(2,10);
  const rando3 = rando2*randomNumber(2,10);
  const rando4 = randomNumber(1,10);
  const rando5 = randomNumber(1,10);
  let rettsvar = 0;
  let svar = 1;
 
  switch(whatNow){
     case '+':
       rettsvar = rando + rando1;
       svar = prompt('Hvað er ' + rando + '+' + rando1);
       break;
     case '-':
       rettsvar = rando - rando1;
       svar = prompt('Hvað er ' + rando + '-' + rando1);
       break;
     case '*': 
       rettsvar = rando4*rando5;
       svar = prompt('Hvað er ' + rando4 + '*' + rando5);
       break;
     case '/':
       rettsvar = rando3/rando2;
       svar = prompt('Hvað er ' + rando3 + '/' + rando2);
       break;
     default:
      break;
     
  }
  if(svar === null){haetta();return null();}
  if(rettsvar === parseInt(svar))return true;
  else return false;
}

/**
 * Skilar tölu af handahófi á bilinu [min, max]
 */
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function spilaAnnan(){
  let doesAgree = confirm('Spila annan leik?');
  if(doesAgree){start();}
 
}
function haetta(){
  alert('Hætt í leik.');
  spilaAnnan();
}



// Byrjar leik
start();