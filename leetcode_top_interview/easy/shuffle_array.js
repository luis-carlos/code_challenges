var Solution = function(nums) {
    this.originalNums = nums;
    console.log(nums);
}

Solution.prototype.reset = function() {
    console.log(this.originalNums);
}

Solution.prototype.shuffle = function() {
    let nums = JSON.parse(JSON.stringify(this.originalNums));
    let shuffledArray = [];

    while (nums.length !== 0) {
        let randomIndex = Math.floor(Math.random() * nums.length);
        shuffledArray.push(nums.splice(randomIndex, 1)[0]);        
    }

    console.log(shuffledArray);
}

var obj = new Solution([1, 2, 3]);

var param_2 = obj.shuffle();
var param_1 = obj.reset()
