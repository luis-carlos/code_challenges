const _ = require("lodash");
const SAMPLE_TEXT = `Afoot and light-hearted I take to the open road,
Healthy, free, the world before me,
The long brown path before me leading wherever I choose.
Henceforth I ask not good-fortune, I myself am good-fortune,
Henceforth I whimper no more, postpone no more, need nothing,
Done with indoor complaints, libraries, querulous criticisms,
Strong and content I travel the open road.
The earth, that is sufficient,
I do not want the constellations any nearer,
I know they are very well where they are,
I know they suffice for those who belong to them.
(Still here I carry my old delicious burdens,
I carry them, men and women, I carry them with me wherever I go,
I swear it is impossible for me to get rid of them,
I am fill’d with them, and I will fill them in return.) `


/**
 * Takes input of string and finds the top 5 most common words in the string.
 * @param {String} inputString
 * @returns {{mostCommonWord: String, frequency: Integer}[]}
 */
function findTop5MostCommonWords(inputString) {
    let words = _.split(inputString, /\W/);
    for (let word of words) {
        
    }
    
}

console.log(findTop5MostCommonWords(SAMPLE_TEXT));
