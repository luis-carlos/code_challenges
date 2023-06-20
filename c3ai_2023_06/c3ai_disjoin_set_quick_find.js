class UnionFind {
    constructor(size) {
        this.root = new Array(size);
        for (let i = 0; i < size; i++) {
            this.root[i] = i;
        }
    }
}

UnionFind.prototype.find = function(x) {
    return this.root[x];
}

UnionFind.prototype.union = function(x, y) {
    let rootX = this.find(x);
    let rootY = this.find(y);
    if (rootX !== rootY) {
        for (let i = 0; i < this.root.length; i++) {
            if (this.root[i] == rootY)
                this.root[i] = rootX;
        }
    }
}

UnionFind.prototype.connected = function (x, y) {
    return this.root[x] === this.root[y];
}

UnionFind.prototype.returnArray = function() {
    return this.root;
}

let uf = new UnionFind(10);
uf.union(1, 2);
uf.union(2, 5);
uf.union(5, 6);
uf.union(6, 7);
uf.union(3, 8);
uf.union(8, 9);
console.log(uf.connected(1, 5));
console.log(uf.connected(5, 7));
console.log(uf.connected(4, 9));
uf.union(4, 9);
console.log(uf.connected(4, 9));


