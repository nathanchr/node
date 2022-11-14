export class Database {
    private static instance: Database;
    hashMap: Map<string, any> = new Map();
    private constructor() {};

    static getInstance() {
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance;
    }

    static save(key: string, value: any): void {
        Database.instance.hashMap.set(key, value);
    }

    static lookup(key: string) {
        return Database.instance.hashMap.get(key);
    }

    static getRecord(key: string, value: any) {
        const result = Database.lookup(key);
        if (result) {
            return result;
        }
        else {
            Database.save(key, value);
            return Database.lookup(key);
        }
    }
}

const local = Database.getInstance();
console.log(local.hashMap);
const one = Database.getRecord('nathan', 'james');

console.log(one);
console.log(local.hashMap);
