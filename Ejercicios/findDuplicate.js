// Dado un array de N elementos (números enteros)
// en el cual, los elementos están en el rango de 1-(N-1)
// siempre vamos a tener AL MENOS UN número repetido

// N = 5;
// valores = (1 - 4)

// [1,2,3,4,3]

//

// 1 - No podemos en ningún momento modificar el arr original
// 2 - Debemos mantener constante la complejidad espacial
// 3 - La mejor complejidad temporal que podamos obtener

const findDuplicate = (arr) => {
  // filter * indexOf
  //
  //   for (let i = 0; i < arr.length; i++) {
  //     for (let j = i + 1; j < arr.length; j++) {
  //       if (arr[i] === arr[j]) return arr[i];
  //     }
  //   }
  //
  //   arr.sort((a, b) => a - b);
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] === arr[i + 1]) return arr[i];
  //   }
  //
  //   const n = arr.shift();
  //   for (const nArr of arr) if (nArr === n) return n;
  //   return findDuplicate(arr);

//           0  1  2  3  4
// const arr = [1, 3, 2, 4, 3];
// //                   🐢
// //                   🐢
// //                   🐇
//           0  1  2  3  4  5
//const arr = [1, 3, 2, 4, 5, 2];
//                🐢
//                🐢
//                🐇




const set = new Set(arr);

const duplicates = arr.filter(item => {
  
    if (set.has(item)) {
        set.delete(item);
    } else {
      console.log(item);
        return item;
    }
    
});
// 1 - Un apuntador rápido un apuntador lento
// Lento => 1 paso, Rápido => 2 pasos
// Cuando ambos se encuentran... aparece otro apuntador lento
// AMBOS APUNTADORES lentos se mueven de a un paso hasta encontrarse
// Ya estamos en el índice correspondiente

return duplicates

}


console.log(findDuplicate([1, 2, 3, 2, 4, 5, 5, 6]));
console.log(findDuplicate([1,3,5,2,6,4,6]));
// 
