


/////////////////METROS//////////////
///////////////////////////////////////////////////////////////////////



///////////////////////////////////////////////////////////////////////////////////////////



/////////GIGAS/////////////////
/////////////////////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////////////


//////////DINERO////////////
////////////////////////////////////////////////////////////////////////////////////////7



///////////////////////////////////////////////////////////////////////////////////



// var resposta = prompt('que quieres convertir? (pon el numero) 1.- metros-kilometros, 2.- gigas-megas, 3.- euro-dollar');




// switch(resposta)
// {
//   case '1':
//   var metros = prompt('pon cuantos metros quieres pasar a kilometros')

//   function distancia(metros) {
//     kilometros = (parseInt(metros)/1000);
//     return kilometros;
//   }

//   dist=distancia(metros);
//   alert(metros + ' metros son ' + dist + ' kilometros');
//   break;


//   case '2':
//   var gigas = prompt('pon cuantos gigas quieres pasar a megas')

//   function tamaño(gigas) {
//     megas = (parseInt(gigas)*1024);
//     return megas;
//   }

//   dist=tamaño(gigas);
//   alert(gigas + ' gigas son ' + dist + ' megas');
//   break;

//   case '3':
//   var euros = prompt('pon cuantos euros quieres pasar a dollares')

//   function dinero(euros) {
//     dollar = (parseInt(euros)*0.87);
//     return dollar;
//   }

//   dist=dinero(euros);
//   alert(euros + ' euros son ' + dist + ' dollares');
//   break;
// }; 


function LengthConverter1(valNum1) {
  document.getElementById("metros").innerHTML=valNum1/1000;
}

function LengthConverter2(valNum2) {
  document.getElementById("megas").innerHTML=valNum2*1024;
}

function LengthConverter3(valNum3) {
  document.getElementById("dollar").innerHTML=valNum3*0.87;
}
