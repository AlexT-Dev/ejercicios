function subsetSum (nums, n) {
  // Your code here:
  var sumaDeValores = 0
  if (nums.includes(n)) return true
  const sorted = nums.sort((a, b) => a - b);
  for (let i = 0; i < sorted.length; i++) {
    sumaDeValores = sumaDeValores + sorted[i];
    if (sumaDeValores === n ) return true
    
  }
  
  return false;

}

module.exports = subsetSum

console.log(subsetSum( [1,10,5,3], 9 ));   //output: true <= 1 + 5 + 3
console.log(subsetSum( [1,10,5,3], 19 ));  // output:true <= add all 4
console.log(subsetSum( [1,10,5,3], 17 ));  // output:false
console.log(subsetSum( [1,10,5,3], 2 ));   //output:false
console.log(subsetSum( [1,10,5,3], 10 ));  // output:true <= 10 + 0 = 10