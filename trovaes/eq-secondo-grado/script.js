
//RIFERIMENTO AL TAG HTML CON ID = BTN-CALCOLA
const btn =document.getElementById("btn-calcola");
//RIFERIMENTO AGLI INPUT TESTUALI 
const aInput=document.getElementById("a");
const bInput=document.getElementById("b");
const cInput=document.getElementById("c");
const solu1=document.getElementById("soluzione1");
const solu2=document.getElementById("soluzione2");

/*  btn.addEventListener("click",function(){
    //é DETTA FUNZIONE AUTONOMA

})*/


//SI PUO SCRIVERE ANCHE COSI:
  /* btn.addEventListener("click",()=>{

  }) */


 //O ANCHE COSI
 function calcolaSoluzioni() {
    //PRENDE DATI DA CONSOLE(LI PRENDE COME STRINGHE)
    console.log("a=", aInput.value);
    console.log("b=", aInput.value);
    console.log("c=", aInput.value);
    //TRASFORMAZIONE DA STRINGHE A FLOAT 
    let a=parseFloat(aInput.value);
    let b=parseFloat(bInput.value);
    let c=parseFloat(cInput.value);
//DIFFERENZA TRA CONST(1 VOLTA MESSO NON PUO CAMBIARE) E LET(PUO CAMBIARE SEMPRE)
    let  delta=b*b-4*(a*c);
    if(delta==0){
        solu1.textContent="soluzione 1 e 2: "+ -b/2*a;
        
    }
    else if (delta > 0){
        solu1.textContent="soluzione 1: "+ -b+Math.sqrt(delta)/2*a;
        solu2.textContent="soluzione 2: "+-b-Math.sqrt(delta)/2*a;
    }
    else{
        solu1.textContent="NON ESISTE VALORE REALE";
        solu2.textContent="NON ESISTE VALORE REALE";
    }
 }
 btn.addEventListener("click",calcolaSoluzioni);
