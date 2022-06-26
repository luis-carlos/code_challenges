// logs ["88 99 200", "88 99 300", "99 32 100"]
// threshold

const MAX_NUMBER_OF_USERS = 20;
const MAX_NUMBER_OF_TRANSACTIONS = 100;
const MAX_TRANSACTION_AMOUNT = 10000;
const THRESHOLD = 10;


function generateRandomArrayOfUsers() {
    let arrayOfUsers = [];

    for (let i = 0; i < MAX_NUMBER_OF_USERS; i++) {
        while (true) {
            let randomUserNumber = Math.floor(Math.random() * 100) + 1;
            if (!arrayOfUsers.includes(randomUserNumber)) {
                arrayOfUsers.push(randomUserNumber);
                break;
            }
        }
    }
    return arrayOfUsers;
}

function generateRandomTransactionLogs(users) {
    let arrayOfTransactionLogs = [];
    let amountOfTransactions = Math.floor(Math.random() * MAX_NUMBER_OF_TRANSACTIONS) + 1;
    console.log(`There will be ${amountOfTransactions} transactions`);
    for (let i = 0; i < amountOfTransactions; i++) {
        let transactionArray = [];
        let user1 = users[Math.floor(Math.random()*MAX_NUMBER_OF_USERS)];
        let user2 = users[Math.floor(Math.random()*MAX_NUMBER_OF_USERS)];
        let amount = Math.floor(Math.random()*MAX_TRANSACTION_AMOUNT) + 1;
        transactionArray.push(user1);
        transactionArray.push(user2);
        transactionArray.push(amount);
        arrayOfTransactionLogs.push(transactionArray.join(" "));
    }
    console.log(arrayOfTransactionLogs);
    return arrayOfTransactionLogs;
}


function processLogs(logs, threshold) {
    // Write your code here
    let transactionMap = new Map();
    let suspiciousUsers = [];
    logs.forEach(element => {
        let transactionArray = element.split(' ');
        if (transactionArray[0] == transactionArray[1]) {
            let valueToAdd = transactionArray[0];
            if (transactionMap.has(valueToAdd)) {
                transactionMap.set(valueToAdd, transactionMap.get(valueToAdd) + 1);
            } else {
                transactionMap.set(valueToAdd, 1);
            }
        } else {
            let valueToAdd = transactionArray[0];
            if (transactionMap.has(valueToAdd)) {
                transactionMap.set(valueToAdd, transactionMap.get(valueToAdd) + 1);
            } else {
                transactionMap.set(valueToAdd, 1);
            }
            valueToAdd = transactionArray[1];
            if (transactionMap.has(valueToAdd)) {
                transactionMap.set(valueToAdd, transactionMap.get(valueToAdd) + 1);
            } else {
                transactionMap.set(valueToAdd, 1);
            }
        }
    });
    for (let transaction of transactionMap){
        if (transaction[1] >= threshold)
            suspiciousUsers.push(transaction[0]);
            
    }
    suspiciousUsers.sort((a, b) => a - b);
    return suspiciousUsers;
    
}

// console.log(generateRandomArrayOfUsers());
// generateRandomTransactionLogs(generateRandomArrayOfUsers());
console.log(processLogs(generateRandomTransactionLogs(generateRandomArrayOfUsers()), THRESHOLD));