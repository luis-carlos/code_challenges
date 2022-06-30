// https://www.hackerrank.com/challenges/separate-the-numbers/problem

var beautifulString = (s) => {
    let begin = 0;
    let end = 1;
    let offset = 1;
    let currentDigit = s.slice(begin, end);
    let canStillTraverse = true;
    console.log(currentDigit);

    while (canStillTraverse){
        // Establish the initial digit. Must come back here as needed and have a stop mechanism
        if (toString(parseInt(currentDigit) + 1).length == currentDigit.length) {

        }
            
        canStillTraverse = false;
    }

}


beautifulString("1234");