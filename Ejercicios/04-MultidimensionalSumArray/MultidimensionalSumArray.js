function mdArraySum (arr) {
  // Your code here:
  var sumaElementos = 0;
  arr.forEach(element => {
    if (typeof element === 'object')
      sumaElementos += mdArraySum(element);
    else
    sumaElementos += element  
  });    
   return sumaElementos;
 }
  
 console.log(mdArraySum([ [2,4] , [1], [4,2,1] ]));
 console.log(mdArraySum([ 2, [3,4], 5, [-3, [6 , [ 4,5 ] ] ] ]));

module.exports = mdArraySum
