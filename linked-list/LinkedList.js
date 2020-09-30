const LinkedListNode = require("./LinkedListNode")

class LinkedList {
    constructor() {
        this.head = null
    }

    append(data) {
        if(!this.head) {
            this.head = new LinkedListNode(data)
            return
        }

        let current = this.head
        while(current.next !== null) {
            current = current.next
        }
        current.next = new LinkedListNode(data)
    }

    prepend(data) {
        const newHead = new LinkedListNode(data)
        newHead.next = this.head
        this.head = newHead
    }

    remove(data) {
        if(this.head === null) return false
        if(this.head.data === data) {
            this.head = this.head.next
            return true
        }
        let current = this.head
        while(current.next !== null) {
            if(current.next.data === data) {
                current.next = current.next.next
                return true
            }
            current = current.next
        }
        return false
    }

    contains(data) {
        if(!this.head) return false
        let current = this.head
        while(current && current.data !== data) {
            current = current.next
        }
        if(!current) return false
        return true
    }

    traverse() {
        if(!this.head) return null
        let current = this.head
        while(current !== null) {
            console.log(current.data);
            current = current.next
        }
    }
}

module.exports = LinkedList