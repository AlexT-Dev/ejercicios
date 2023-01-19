function MaxValue (shares) {
  // Your code here:
  const orden = shares.sort((a, b) => a - b);
  console.log(orden);
  return "Esta ganancia la obtenemos comprando la acción cuando su valor es de " + orden[0]+ 
  " y vendiéndola cuando su valor es de "+orden[orden.length - 1];
   
}

module.exports = MaxValue


console.log(MaxValue([5,1,8,3,2,8,9,19])) 