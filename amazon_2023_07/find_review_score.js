// https://leetcode.com/discuss/interview-question/850261/amazon-customer-reviews-question

var findReviewScore = (review, prohibitedWords) => {
    // Write your code here
    let reviewToLower = review.toLowerCase();
    let scoreReview = -1;
    let currentLongest = -1;
    for (let word of prohibitedWords) {
        let wordToLower = word.toLowerCase();
        
        currentLongest = Math.max(reviewToLower.indexOf(wordToLower), reviewToLower.length - reviewToLower.indexOf(wordToLower) - wordToLower.length);
        if (currentLongest > scoreReview)
            scoreReview = currentLongest;
        
    }
    return scoreReview;
}

console.log(findReviewScore("AwesomeProductReallyLoveIt", ['eit', 'ctr']));

