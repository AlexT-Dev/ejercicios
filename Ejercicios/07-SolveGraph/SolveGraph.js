function SolveGraph (graph, start, end) {
  // Your code here:

  let startFound = 0;
  let endFound = 0;
  // start y end son los vertices
  const vertices = Object.keys(graph).map(key =>{  //Se obtienen las keys (campos)
    
    const keyValue = graph[key]  //Se obtienen los valores de cada campo
    if (startFound === 0) {
     if (key === start && keyValue.length === 1) startFound = 1;
    }
    if (endFound === 0) {
     if (key === end && keyValue.length === 1) endFound = 1;
    }
    
    
    
  });
  
    return startFound === 0 || endFound === 0 ? false : true
  
}

module.exports = SolveGraph

  let a = SolveGraph({
    a: ['c'],
    b: ['c'],
    c: ['s', 'r'],
    d: ['a'],
    s: ['a', 'c'],
    r: ['d'],
    z: ['z']
  }, 'a', 'd')

  console.log(a)