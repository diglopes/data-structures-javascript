import { List } from '../utils'

class DoublyLinkedListNode<T> implements Global.INode<T> {
    public data: T | null = null
    public next = null
    public prev = null

    constructor(data: T) {
        this.data = data
    }
}

class DoublyLinkedList<T> extends List<T> {

    public add(data: T): boolean {
        const node: Global.INode<T> = new DoublyLinkedListNode<T>(data)
        if(!this._head || !this._tail) {
            this._head = node
            this._tail = node
            return true
        }
        node.prev = this._tail
        this._tail.next = node
        this._tail = node
        return true
    }

    public remove(data: T): boolean {
        if(!this._head) return false
        if(this._head.data === data) {
            if(this._head === this._tail) {
                this._head = null
                this._tail = null
            } else if(this._head.next) {
                const node = this._head.next
                node.prev = null
                this._head = node
            }
            return true
        }
        let current = this._head.next
        while(current !== null && current.data !== data) {
            current = current.next
        }
        if(current && current.prev && current === this._tail) {
            this._tail = current.prev
            this._tail.next = null
            return true
        } else if (current && current.prev && current.next) {
            current.prev.next = current.next
            current.next.prev = current.prev
            return true
        }
        return false
    }

    traverse() {
        let current = this._head
        while(current) {
            console.log(current.data);
            current = current.next
        }
    }

    traverseInReverse() {
        let current = this._tail
        while(current) {
            console.log(current.data);
            current = current.prev || null
        }
    }
}

module.exports = {
    DoublyLinkedList,
}