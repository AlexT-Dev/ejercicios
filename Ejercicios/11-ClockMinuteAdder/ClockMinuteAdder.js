function clockMinuteAdder (time, minutesToAdd) {
  // Your code here:
  if (time.length === 0 || minutesToAdd === 0) return  "No es hora o minutos a adicionar valido."
  let timeExpected = '';
  let hours = 0; 
  let minutes = 0; 
  
  //Se obtiene la cantidad de horas o minutos a sumar
  if (minutesToAdd >= 60) {
    hours = parseInt(minutesToAdd / 60)
    minutes = minutesToAdd % 60
  }
  //Suma la hora la(s) hora(s) y minuto(s) a time
  if (hours === 0 && minutes === 0) {  //Si ambos son 0 entonces sólo suma los minutos enviados
   
      minutes = parseInt(time.substring(3,5),10) + minutesToAdd ;
      timeExpected = time.substring(0,2) +":" + minutes.toString();
      return timeExpected
      
  } else {
    hours = parseInt(time.substring(0,2),10) + hours 
    minutes = parseInt(time.substring(3,5),10) + minutes.toString();

  }
  
  //Determina si son más de 12 horas
  if (hours > 12) {
    hours = hours - 12;
    timeExpected = "0"+ hours.toString() 
  }
    //return timeExpected = time[0] === '0' ? time.substring(1, 5) : time   // Se obtiene la hora sin el 0 inicial
    return timeExpected
  


}

module.exports = clockMinuteAdder

//console.log(clockMinuteAdder("",0));
const a = clockMinuteAdder('01:30', 30);
console.log(a);
