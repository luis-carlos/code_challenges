const async = require('async');

async.waterfall([
    (callback) => {
        console.log('start!');
        setTimeout(function(){
            console.log("T1 Complete");
            // Passing value to next task
            callback(null, 'Value from Task1')
        }, 10000);
    },
    (task1result, callback) => {
        console.log(task1result);
        setTimeout(function(){
            console.log("T2 Complete");
            // Passing value to next task
            callback(null, 'Value from Task 2');
        }, 5000);
    },
    (task2result, callback) => {
        console.log(task2result);
        setTimeout(() => {
            console.log("T3 Complete");
            // Passing no value to last callback
            callback(null);
        },3000);
    }
], (err) => {
    if (err) {
        throw new Error(err);
    } else {
        console.log('No error happened in any tasks, all tasks done!');
    }
});