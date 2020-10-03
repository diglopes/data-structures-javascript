const LinkedList = require('../linked-list/LinkedList')

class Queue {
    constructor() {
        this.list = new LinkedList()
    }

    /**
     * Return the data of the last queue element
     * @return {*}
     */
    get peekBack() {
        return this.list.tail.data
    }

    /**
     * Return the data of the first queue element
     * @return {*}
     */
    get peekFront() {
        return this.list.head.data
    }

    /**
     * Return if the queue has at least one item
     * @return {boolean}
     */
    get isEmpty() {
        return !this.list.head
    }

    /**
     * Add an element to the end of the queue (the tail of the linked list)
     * @param {*} data
     */
    enqueue(data) {
        this.list.append(data)
    }

    /**
     * Remove an element from the start of the queue (the head of the linked list)
     */
    dequeue() {
        this.list.remove(this.peekFront)
    }
}

module.exports = { Queue }