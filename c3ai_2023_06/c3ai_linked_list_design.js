class ListNode {
    constructor(val, next) {
        this.val = val == undefined ? 0 : val;
        this.next = next == undefined ? null : next;
    }
}
var MyLinkedList = function() {
    this.head = null;
};

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    if (index < 0 || index >= this.getLength())
       return -1;
    let cur = this.head;
    for (let i = 0; i < index; i++)
        cur = cur.next;
    return cur.val;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    let node = new ListNode(val);
    node.next = this.head;
    this.head = node;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    if (this.head == null) {
        this.addAtHead(val);
        return;
    }


    let node = new ListNode(val);
    let cur = this.head;
    while (cur.next !== null)
        cur = cur.next;
    cur.next = node;
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if (index == 0) {
        this.addAtHead(val)
        return;
    }
    // TODO: addAtTail if index == this.getLength()
    let cur = this.head;
    let node = new ListNode(val);
    for (let i = 0; i < index-1; i++)
        cur = cur.next;
    let next = cur.next;
    node.next = next;
    cur.next = node;

};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    // TODO: Return on invalid indexes
    if (index == 0) {
        this.head = this.head.next;
        return;
    }

    let cur = this.head;
    for (let i = 0; i < index - 1; i++) {
        cur = cur.next;
    }
    cur.next = cur.next.next;

};

MyLinkedList.prototype.getLength = function () {
    let len = 0;
    let cur = this.head;
    while (cur !== null) {
        cur = cur.next;
        len++;
    }
    return len;
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

var obj = new MyLinkedList();
obj.addAtIndex(0,10);
obj.addAtIndex(0, 20);
obj.addAtIndex(1, 30);
obj.get(0);
