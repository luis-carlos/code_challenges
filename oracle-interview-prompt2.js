const lodash = require("lodash");
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



const EXCLUSION_WORDS = ['a', 'the', 'i', 'them', 'me', 'with', 'and', 'they', 'is', 'that', 'my', 'in', 'to'];

/**
 * Takes input of string and finds the most common word in the string.
 * Excludes words
 * @param {String} inputString
 * @param {Array} exclusionWords Array of words to exclude
 * @returns {{mostCommonWord: String, frequency: Integer}}
 */
function findMostCommonWordWithoutExclusionWords(inputString, exclusionWords) {

}

console.log(findMostCommonWordWithoutExclusionWords(SAMPLE_TEXT, EXCLUSION_WORDS));
