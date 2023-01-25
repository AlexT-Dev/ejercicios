function DecimalToBynary (num) {
  // Your code here:
  
  let number = num;
  let binary = (number % 2).toString();
  for (; number > 1; ) {
      number = parseInt(number / 2);
      binary =  (number % 2) + (binary);
  }
  console.log(binary);
  return binary
  
}

module.exports = DecimalToBynary


console.log(DecimalToBynary(12))