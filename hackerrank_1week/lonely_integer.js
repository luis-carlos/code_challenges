// Given an odd array of integers. Find out which one is the only one that is not repeated. At least one i1.

var lonelyInteger = (a) => {
    // a.sort((a, b) => a - b);
    
    for (let i = 0; i < a.sort((a, b) => a - b).length; i++) {
        if ((i == 0 && a[i+1] !== a[i]) || (i == a.length-1) || (a[i] != a[i+1] && a[i] != a[i-1]))
            return a[i];
    }
}

console.log(lonelyInteger([34, 95, 34, 64, 45, 95, 16, 80, 80, 75, 3, 25, 75, 25, 31, 3, 64, 16, 31]));