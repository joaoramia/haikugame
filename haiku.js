//At first I tried to create arrays with objects of each line, containing the word and syllables as properties. That made the program too complex and heavy (it was taking too long to run), so I decided to create no object at all group each word in different arrays according to the number of syllables. I had to use global variables for that though

var fs = require("fs");

//First we create 7 global arrays of words with 1-7 syllables in each word
var arr1 = [],
    arr2 = [],
    arr3 = [],
    arr4 = [],
    arr5 = [],
    arr6 = [],
    arr7 = [];

function readFile(file){
  return fs.readFileSync(file).toString();
}

function getNumberOfSyllables (str){
  var syllables = str.split(" ");
  var number = 0;
  for (var i = 0; i < syllables.length; i++){
    if (syllables[i].match(/\d/)){
      number++;
    }
  }
  return number;
}

function createArrayOfWords(file){
  var arrayOfLines = readFile(file).split("\n");
  
  for (var i = 0; i < arrayOfLines.length; i++){
    var lineSplit = arrayOfLines[i].split("  ");

    //the realWord variable was created to check if it is an actual word on the txt file (I found errors before creating this, due to the line that only has '' on it.
    var realWord = true;
    if(lineSplit.length < 2){
      realWord = false;
    }   
   
    //the if statements below will push the objects to their respective array according to the number of syllables
    if (realWord){
      if (getNumberOfSyllables(lineSplit[1]) === 1){
        arr1.push(lineSplit[0]);
      }
      else if(getNumberOfSyllables(lineSplit[1]) === 2){
        arr2.push(lineSplit[0]);
      }
      else if(getNumberOfSyllables(lineSplit[1]) === 3){
        arr3.push(lineSplit[0]);
      }
      else if(getNumberOfSyllables(lineSplit[1]) === 4){
        arr4.push(lineSplit[0]);
      }
      else if(getNumberOfSyllables(lineSplit[1]) === 5){
        arr5.push(lineSplit[0]);
      }
      else if(getNumberOfSyllables(lineSplit[1]) === 6){
        arr6.push(lineSplit[0]);
      }
      else if(getNumberOfSyllables(lineSplit[1]) === 7){
        arr7.push(lineSplit[0]);
      }
    }
  }
}

function getRandomWord(syllables){
  if (syllables === 1){
    return arr1[Math.round(Math.random() * (arr1.length - 1) + 1)];
  }
  else if (syllables === 2){
    return arr2[Math.round(Math.random() * (arr2.length - 1) + 1)];
  }
  else if (syllables === 3){
    return arr3[Math.round(Math.random() * (arr3.length - 1) + 1)];
  }
  else if (syllables === 4){
    return arr4[Math.round(Math.random() * (arr4.length - 1) + 1)];
  }
  else if (syllables === 5){
    return arr5[Math.round(Math.random() * (arr5.length - 1) + 1)];
  }
  else if (syllables === 6){
    return arr6[Math.round(Math.random() * (arr6.length - 1) + 1)];
  }
  else if (syllables === 7){
    return arr7[Math.round(Math.random() * (arr7.length - 1) + 1)];
  }
}

//the function below randomizes a line according to the number of syllables allowed
function randomizeLine(num){
  var result = "";
  while (num > 0){
    var j = Math.round(Math.random() * (num - 1) + 1);
    var randomWord = getRandomWord(j);
    result += randomWord + " ";
    num -= j;
  }

  return result;
}

function createHaiku(structure, file){
  createArrayOfWords(file);
  var result = "";
  for (var i = 0; i < structure.length; i++){
    result += randomizeLine(structure[i]) + "\n";
  }
  console.log(result);
}

module.exports = {
  createHaiku: createHaiku,
};





