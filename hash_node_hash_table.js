function calculateHashIndex(key, tableSize) {
    let hashIndex = 7;
    for (let i =0; i < key.length; i++) {
        hashIndex = (11 * hashIndex * key.charCodeAt(i)) % tableSize;
    }
    return hashIndex;
}

class HashTable {
    constructor() {
        this.table = new Array(300);
    }

    add(key, value) {
        const hashIndex = calculateHashIndex(key, this.table.length);
        if (this.table[hashIndex]) {
            this.table[hashIndex].push([key, value]);
        } else {
            this.table[hashIndex] = [[key, value]]
        }
    }

    search(key){
        const hashIndex = calculateHashIndex(key, this.table.length);

        if (!this.table[hashIndex])
            return null;
        
        return this.table[hashIndex].find((x) => x[0] === key)[1];
    }
}

const ht = new HashTable();
ht.add('firstName', 'rehan');
ht.add('lastName', 'sattar');
ht.add('age', 22);
ht.add('dob', '1/01/1111');

console.log(ht.search('firstName'));
console.log(ht.search('lastName'));
console.log(ht.search('age'));
console.log(ht.search('dob'));

console.log("Hash Table", ht);
