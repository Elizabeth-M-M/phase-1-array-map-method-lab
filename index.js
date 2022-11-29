const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  let newTutorials = tutorials.map(function (sentence) {
    sentence = sentence.split(" ");
    let newArr = []
    for (let item of sentence) {
      item = item.charAt(0).toUpperCase() + item.slice(1)
      newArr.push(item)
    }
    return newArr.join(' ')
  });
  return newTutorials
  
}



console.log(titleCased())


// words.toLowerCase();
// console.log(splitWords)


