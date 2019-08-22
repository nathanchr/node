class Stack {
    constructor() {
        this.items = [];
    }
    push(item) { this.items.push(item) }
    pop() { this.items.pop() }
    peek() { return this.items[this.items.length -1] }
    isEmpty() { return this.items.length === 0 }
}