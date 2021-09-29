class Node {
    constructor(val) {
        this.key = val;
        this.left = null;
        this.right = null;
    }
}

var root = null;

function printInOrder(node){
    if (node == null)
        return;
    // console.log("Node", node.key);
    printInOrder(node.left);
    console.log(node.key);
    printInOrder(node.right);
}

function printPreOrder(node){
    if (node == null)
        return;
    // console.log("Node", node.key);
    console.log(node.key);
    printPreOrder(node.left);
    printPreOrder(node.right);
}

function printPostOrder(node){
    if (node == null)
        return;
    // console.log("Node", node.key);
    printPostOrder(node.left);
    printPostOrder(node.right);
    console.log(node.key);
}



root = new Node(25);
root.left = new Node(15);
root.right = new Node(50);
root.left.left = new Node(10);
root.left.right = new Node(22);
root.left.left.left = new Node(4);
root.left.left.right = new Node(12);
root.left.right.left = new Node(18);
root.left.right.right = new Node(24);
root.right.left = new Node(35);
root.right.right = new Node(70);
root.right.left.left = new Node(31);
root.right.left.right = new Node(44);
root.right.right.left = new Node(66);
root.right.right.right = new Node(90);

console.log("Printing InOrder");
printInOrder(root);

console.log("Printing PreOrder");
printPreOrder(root);

console.log("Printing PostOrder");
printPostOrder(root);