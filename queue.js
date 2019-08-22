class Queue {
    constructor() {
        this.items = [];
    }
    enqueue(item) { this.items.unshift(item) }
    dequeue() { this.items.pop() }
    isEmpty() { return this.items.length === 0 }
    size() { return this.items.length }
    printQueue() { console.log(this.items) }
}