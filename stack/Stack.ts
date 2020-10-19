import { LinkedList } from '../linked-list/LinkedList'

export class Stack<T> {
    private list: LinkedList<T>

    constructor() {
        this.list = new LinkedList<T>()
    }

    /**
     * Return the data from the top element of the stack
     * @return {*}
     */
    get peek(): T | null {
        return this.list.head
    }

    /**
     * Return if the stack has at least one item
     * @return {boolean}
     */
    get isEmpty(): boolean {
        return !this.list.head
    }

    /**
     * Add an element to the top of the stack
     * @param {*} data this.list.remove(this.peek)
    }
}
     */
    push(data: T): boolean {
        return this.list.prepend(data)
    }

    /**
     * Remove the first element from the top of the stack
     */
    pop(): boolean {
        return this.list.remove(this.peek as T)
    }
}