function BinaryToDecimal (decimal) {
  // Your code here:
  let decimalValue = 0
  
  let cadena = decimal.split("");
 for (let i = 0; i < cadena.length; i++) {
    
    decimalValue = decimalValue + cadena[i] * Math.pow(2,parseInt((cadena.length-i)-1,10));
 }
 
  console.log(decimalValue);
  return decimalValue
}

module.exports = BinaryToDecimal

console.log(BinaryToDecimal("1101100"))