function FindWordStartingWith (book, query) {
  // Your code here:
  let result = [];
  text = book.text.toLowerCase();
  for (let i = 0; i < text.length; i++) {
    if (text[i -1] === " " || i ===0 ){
      for (let j = 0; j < query.length; j++) {
        if (query[j] === text[i + j]){
          if (j === query.length -1 ) result.push(i);
        } else break;
        
      }
    }
  }
  return result
}

module.exports = FindWordStartingWith

const book = {
  id: 1,
  text: 'Erase una vez un libro de palabras que era un poco aburrido pero tenia mucho aunque algunas palabras locas'
}
console.log(FindWordStartingWith (book, 'de'))