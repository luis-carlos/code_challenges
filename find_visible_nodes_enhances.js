class Node {
    constructor(val) {
        this.key = val;
        this.left = null;
        this.right = null;
    }
}

var findVisibleNodes = function(root){
    var visibleNodes = 0;

    var findHighest = function(node, highest){
        if (node === null)
            return;
        
        if (node.key >= highest){
            highest = node.key;
            visibleNodes++;
        }

        findHighest(node.left, highest);
        findHighest(node.right, highest);
    }

    findHighest(root, root.key);
    return visibleNodes;
}


root = new Node(25);
root.left = new Node(15);
root.left.left = new Node(10);
root.left.left.left = new Node(4);
root.left.left.right = new Node(12);
root.left.right = new Node(22);
root.left.right.left = new Node(18);
root.left.right.right = new Node(24);
root.right = new Node(50);
root.right.left = new Node(35);
root.right.left.left = new Node(31);
root.right.left.right = new Node(44);
root.right.right = new Node(70);
root.right.right.left = new Node(66);
root.right.right.right = new Node(90);

console.log(findVisibleNodes(root));