/*
In this kata, we're going to create the function nato that takes a word and returns a string spells the word using the NATO phonetic alphabet.

There should be a space between each word in the returned string, and the first letter of each word should be capitalized.

For those of you that don't want your fingers to bleed, this kata already has a dictionary typed out for you.

nato('hi') // --> 'Hotel India'
nato('abc') // --> 'Alpha Bravo Charlie'
*/

var nato = word => {
  var letters =  {
    "A": "Alpha",  "B": "Bravo",   "C": "Charlie",
    "D": "Delta",  "E": "Echo",    "F": "Foxtrot",
    "G": "Golf",   "H": "Hotel",   "I": "India",
    "J": "Juliett","K": "Kilo",    "L": "Lima",
    "M": "Mike",   "N": "November","O": "Oscar",
    "P": "Papa",   "Q": "Quebec",  "R": "Romeo",
    "S": "Sierra", "T": "Tango",   "U": "Uniform",
    "V": "Victor", "W": "Whiskey", "X": "X-ray",
    "Y": "Yankee", "Z": "Zulu"
  }
  
    let arr = []
    for (let i = 0; i < word.length; i++){     
     for (let j = 0; j < Object.keys(letters).length; j++){      
        if (word[i].toUpperCase() === Object.keys(letters)[j]){        
          arr.push(Object.values(letters)[j])      
       }         
      }
    }
    return arr.join(" ")
}
