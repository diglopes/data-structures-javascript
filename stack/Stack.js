const LinkedList = require('../linked-list/LinkedList')

class Stack {
    constructor() {
        this.list = new LinkedList()
    }

    /**
     * Return the data from the top element of the stack
     * @return {*}
     */
    get peek() {
        return this.list.head.data
    }

    /**
     * Return if the stack has at least one item
     * @return {boolean}
     */
    get isEmpty() {
        return !this.list.head
    }

    /**
     * Add an element to the top of the stack
     * @param {*} data 
     */
    push(data) {
        this.list.prepend(data)
    }

    /**
     * Remove the first element from the top of the stack
     */
    pop() {
        this.list.remove(this.peek)
    }
}

module.exports = Stack