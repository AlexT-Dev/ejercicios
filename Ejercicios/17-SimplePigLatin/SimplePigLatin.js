function pigIt(str){
    //Code here
    let newString = "";
    let letter = "";
  
    letter = str[0]             //Toma la primera letra
    
    for (let i = 1; i < str.length; i++) {
        if (str[i] != " ") {
           
           newString = newString + str[i] 
          
        } else {
            newString = newString + letter + "ay" + str[i]
            i++;
            letter = str[i];
            
        }
              

    }
    return newString = newString + letter + "ay"
    
  }

  module.exports = pigIt

  let a = pigIt('Oay emporatay oay oresmay !');
  console.log(a)