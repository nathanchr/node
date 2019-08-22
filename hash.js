class HashTable {
    constructor(size = 50) {
        this.size = size;
        this.storage =  new Array(size);
    }

    hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % this.size;
    }

    add(key, value) {
        let index = this.hash(key);
        this.storage[index] = {[key]: value};
    }

    lookup(key) {
        let index = this.hash(key);
        return this.storage[index][key]
    }
}

const MyTable = new HashTable(100);

MyTable.add('user1', 'nahtan');
MyTable.add('user3', 'nathan');
MyTable.add('user2', 'anna');
MyTable.add('user4', 'nathan');

console.log(MyTable.lookup('user2'));
console.log(MyTable.storage);


