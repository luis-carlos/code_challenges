class Node {
    constructor(val) {
        this.key = val;
        this.left = null;
        this.right = null;
    }
}

var root = null;

function printLevelOrder(root){
    console.log(root);
    
    if (root == null)
        return;

    var queue = [];
    queue.push(root);
    


    while(queue.length > 0){
        console.log(queue[0].key);
        node = queue.shift();
        
        if (node.left != null)
            queue.push(node.left);

        if (node.right != null)
            queue.push(node.right);
    }
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

// console.log(root);
printLevelOrder(root);