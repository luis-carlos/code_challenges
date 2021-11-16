class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

        

    push(value) {

        // Node creation
        const newNode = new Node(value);
        if (!this.head) {
            // check if list is empty
            this.head = newNode;
            this.tail = newNode;
            this.length++;
            return this;
        }

        // on the "next" of the last node, add the reference to new node
        this.tail.next = newNode;
        // update the last node by the new node
        this.tail = newNode;
        this.length++;
        return this;
    }

    pop() {
        // It the head is null, then return null
        if (!this.head)
            return;

        // calculate the second last node;
        let currentNode = this.head;
        let secondLastNode = this.head;
        while (currentNode.next) {
            secondLastNode = currentNode;
            currentNode = currentNode.next;
        }

        this.tail = secondLastNode;
        this.tail.next = null;
        this.length--;

        // Resetting the linked list in case it's empty
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }

        return this;
    }

    shift() {
        if (!this.head)
            return;
        
        const removedHead = this.head;
        this.head = removedHead.next;
        this.length--;

        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }

        return this;
    }

    unshift(value) {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            this.length++;
            return;
        }

        newNode.next = this.head;
        this.head = newNode;
        this.length++;

        return newNode;


    }

    get(index) {
        if (index < 0 || index > this.length) {
            return;
        }

        let currentIndex = 0;
        let result = this.head;

        while (currentIndex !== index) {
            currentIndex++;
            result = result.next;
        }

        return result;
    }

    set(index, value) {
        let node = this.get(index);

        if (node)
            node.value = value;
    }

    insert(index, value) {
        if (index < 0 || index > this.length) return;

        if (index === this.length) {
            this.push(value);
            return this;
        }

        if (index === 0) {
            this.unshift(value);
            return this;
        }

        const previousNode = this.get(index - 1);
        const newNode = new Node(value);

        newNode.next = previousNode.next;
        previousNode.next = newNode;

        this.length++;
        return this;

    }

    remove(index) {
        if (index < 0 || index > this.length)
            return;
        
        if (index === this.length) {
            this.push();
            return;
        }

        if (index === 0) {
            this.shift();
            return;
        }

        const previousNode = this.get(index - 1);
        const deletedNode = previousNode.next;
        previousNode.next = deletedNode.next;

        this.length--;
        return this;
    }

    reverse() {

        let previous = null;
        let currentNode = JSON.parse(JSON.stringify(this.head));

        while(currentNode !== null) {
            let next = currentNode.next;
            currentNode.next = previous;
            previous = currentNode;
            currentNode = next;
        }

        return previous;
        
    }

    listItems(){
        let currentNode = this.head;
        let result = [];
        while (currentNode) {
            result.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return result;
    }
}

const linkedList = new LinkedList();
linkedList.push("first node")
linkedList.push("second node");
linkedList.push("third node");
linkedList.insert(0, "Check");
linkedList.insert(4, "Check another");
console.log(linkedList.listItems());

