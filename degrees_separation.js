class Employee {
    constructor(name){
        this.name = name;
        this.one = null;
        this.two = null;
        this.three = null;
        
    }
}

var root = null;

function printLevelOrder(root, employee1, employee2){
    // console.log(root);

    if (root == null)
        return;
    
    var queue = [];
    queue.push(root);

    while(queue.length > 0){
        if (queue[0].name.localeCompare(employee1) === 0 || queue[0].name.localeCompare(employee2) === 0)
            console.log(`Found ${queue[0].name}!`)
        // console.log(queue[0].name);
        node = queue.shift();

        if (node.one != null)
            queue.push(node.one);

        if (node.two != null)
            queue.push(node.two);
        
        if (node.three != null)
            queue.push(node.three);
    }
}

root = new Employee("Larry");
root.one = new Employee("Sam");
root.two = new Employee("Jessica");
root.three = new Employee("Mark");
root.one.one = new Employee("Jonas");
root.one.two = new Employee("Susan");
root.one.three = new Employee("Beth");
root.two.one = new Employee ("Joe");
root.two.two = new Employee("Moe");
root.two.three = new Employee("Tim");
root.three.one = new Employee("Adam");
root.three.two = new Employee("Patty");
root.three.three = new Employee("Rob");
root.one.one.one = new Employee("Seb");
root.one.one.two = new Employee("Chuck");
root.one.one.three = new Employee("Jim");
root.one.two.one = new Employee("Maggie");
root.one.two.two = new Employee("David");
root.one.two.three = new Employee("Jerry");
root.one.three.one = new Employee("George");
root.one.three.two = new Employee("Reggie");
root.one.three.three = new Employee("John");
root.two.one.one = new Employee("Kim");
root.two.one.two = new Employee("Chloe");
root.two.one.three = new Employee("Ray");
root.two.two.one = new Employee("Isaac");
root.two.two.two = new Employee("Vince");
root.two.two.three = new Employee("Derek");
root.two.three.one = new Employee("Stephen");
root.two.three.two = new Employee("Laura");
root.two.three.three = new Employee("Jennifer");
root.three.one.one = new Employee("Paul");
root.three.one.two = new Employee("Tom");
root.three.one.three = new Employee("Jesse");
root.three.two.one = new Employee("Diane");
root.three.two.two = new Employee("Gary");
root.three.two.three = new Employee("Kenny");
root.three.three.one = new Employee("Mike");
root.three.three.two = new Employee("Leslie");
root.three.three.three = new Employee("Martha");

printLevelOrder(root, "Larry", "Jonas");