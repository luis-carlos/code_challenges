const words = ["cat", "baby", "dog", "bird", "car", "ax"];
const string1 = "tcabnihjs";
const string2 = "tbcanihjs";
const string3 = "baykkjl";
const string4 = "bbabylkkj";
const string5 = "ccc";
const string6 = "breadmaking";

const find_embedded_word = (words, string) => {
  // each word in words array
  for (let word of words) {
    // each letter of each word
    let charCount = word.length;
    let searchCount = 0;
    let stringCopy = string;
    // console.log("---");
    // console.log(word);
    for (let i = 0; i < word.length; i++) {
        let indexFound = stringCopy.indexOf(word[i]);
        // console.log(word[i], stringCopy, indexFound);
        if (indexFound !== -1){
          stringCopy = stringCopy.replace(word[i], "");
          searchCount++;
        } 
        // console.log(stringCopy); 
    }
    // console.log(searchCount, charCount);
    if (searchCount == charCount)
      return word;
  }
  return null;
  
  
}

console.log(find_embedded_word(words, string6));