function curry (fn) {
  // Your code here:
   const args = [];
   const argsNum = fn.length;


   return function curried (arg){
      return args.push(arg) === argsNum ? fn(...args) : curried;
   };
}

module.exports = curry


const sumar = (a,b,c,d) => a + b - c * d;

const curriedDoSomething = curry(sumar);
const firstReturn = curriedDoSomething(1);
const secondReturn = firstReturn(2);
const thirdReturn = secondReturn(3);
const fourthReturn = thirdReturn(10);

console.log(fourthReturn);

