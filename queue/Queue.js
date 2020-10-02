const LinkedList = require('../linked-list/LinkedList')

class Queue {
    constructor() {
        this.list = new LinkedList()
    }

    get peekBack() {
        return this.list.tail.data
    }

    get peekFront() {
        return this.list.head.data
    }

    enqueue(data) {
        this.list.append(data)
    }

    dequeue() {
        this.list.remove(this.peekFront)
    }
}

module.exports = { Queue }