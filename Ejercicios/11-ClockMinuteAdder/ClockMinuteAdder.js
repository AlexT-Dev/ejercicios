function clockMinuteAdder (time, minutesToAdd) {
  // Your code here:
  if (time.length === 0 || minutesToAdd === 0) return  "No es hora o minutos a adicionar valido."
  let timeExpected = '';
  let hours = 0; 
  let minutes = 0; 
  //Se obtienen las horas y los minutos

  minutes = parseInt(time.substring(3,5),10);   //Obtiene los minutos
  hours = parseInt(time.substring(0,2),10);    //Obtiene la hora
 
  if ((minutes + minutesToAdd) >= 60){
    hours = hours + parseInt((minutes + minutesToAdd) / 60);
    minutes = (minutesToAdd % 60) === minutes ? 0 : (minutesToAdd % 60) + minutes ;    //A minutesToAdd se restan 60, porque rebasan la hora y se suman los que trae la hora
    
  } else {
    minutes = minutes + minutesToAdd;
  }
 
    //Determina si son más de 12 horas y si minutos menor a 10
    hours = hours > 12 ? hours = hours - 12: hours;
         
    return timeExpected = (hours < 10) ? minutes < 10 ? "0" + hours.toString()+":"+"0"+minutes.toString():
    "0" + hours.toString()+":"+minutes.toString(): hours.toString()+":"+minutes.toString();
  

}

module.exports = clockMinuteAdder

//console.log(clockMinuteAdder("",0));
let a =clockMinuteAdder ('12:05', 200); ouput: '09:20'
console.log(a);
clockMinuteAdder ('09:00', 20); ouput: '09:20'

clockMinuteAdder ('01:30', 30); ouput: '02:00'

clockMinuteAdder ('12:05', 100); ouput: '01:45'
