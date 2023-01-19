function HasBalancedBrackets (string) {
  // Your code here:

  // Opción 1
  //  const openBrackets = ["(","[","{"];
  //  const closeBrackets = [")","]","}"];

  //  const opened = [];
   
  //  for (const bracket of string){
  //   if (openBrackets.includes(bracket)) opened.push(bracket);
  //   else {
  //     const brother = openBrackets[closeBrackets.indexOf(bracket)];
  //     if (opened.pop() !== brother) return false;
  //   }
  //  }
  //  return !opened.length;

   //Opción 2
   
   //Se hace un diccionario de con objeto
   const validBrackets = {
    "(":")",
    "[":"]",
    "{":"}"
   }

   const opened = [];
   for (const bracket of string){
      if (validBrackets[bracket]) opened.push(bracket);
      else if (validBrackets[opened.pop()] !== bracket) return false
     }
     return !opened.length;
  }




module.exports = HasBalancedBrackets

console.log(HasBalancedBrackets("[({})]"))
console.log(HasBalancedBrackets("{[(])}"))