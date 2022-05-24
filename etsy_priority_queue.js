class PriorityQueue {
    constructor() {
        this.valueArray = [];
        this.itemMap = new Map();
    }

    add(item, value) {
        this.valueArray.push(value);
        this.valueArray.sort((a, b) => (a - b));
        this.itemMap.set(value, item);
    }

    pop() {
        return this.itemMap.get(this.valueArray.pop());
    }
}

const pqueue = new PriorityQueue();

pqueue.add('apple', 10);
pqueue.add('guava', 25);
pqueue.add('kiwi', 3);
pqueue.add('durian', 401);

const item = pqueue.pop();
console.log(item);

const item_two = pqueue.pop();
console.log(item_two);