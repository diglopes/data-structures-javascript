const DoublyLinkedListNode = require("./DoublyLinkedListNode")

class DoublyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }

    add(data) {
        const node = new DoublyLinkedListNode(data)
        if(!this.head) {
            this.head = node
            this.tail = node
            return
        }
        node.prev = this.tail
        this.tail.next = node
        this.tail = node
    }

    remove(data) {
        if(!this.head) return false
        if(this.head.data === data) {
            if(this.head === this.tail) {
                this.head = null
                this.tail = null
            } else {
                const newHead = this.head.next
                this.head = newHead
                this.head.prev = null
            }
            return true
        }
        let current = this.head.next
        while(current !== null && current.data !== data) {
            current = current.next
        }
        if(current === this.tail) {
            this.tail = current.prev
            this.tail.next = null
            return true
        } else if (current) {
            current.prev.next = current.next
            current.next.prev = current.prev
            return true
        }
        return false
    }

    traverse() {
        let current = this.head
        while(current) {
            console.log(current.data);
            current = current.next
        }
    }

    traverseInReverse() {
        let current = this.tail
        while(current) {
            console.log(current.data);
            current = current.prev
        }
    }
}

module.exports = {
    DoublyLinkedList,
}