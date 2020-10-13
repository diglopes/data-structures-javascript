export class LinkedListNode<T> implements Global.INode<T> {
    public next = null
    public data = null
    
    constructor(data: any) {
        this.data = data  
    }
}

export class LinkedList<T> {
    private _head: Global.INode<T> | null = null
    private _tail: Global.INode<T> | null = null

    constructor() {}

    get head() {
        return this._head?.data || null
    }

    get tail() {
        return this._tail?.data || null
    }

    public append(data: T): boolean {
        if(!this._head || !this._tail) {
            const node: Global.INode<T> = new LinkedListNode(data)
            this._head = node
            this._tail = node
            return true
        }
        const node: Global.INode<T> = new LinkedListNode(data)
        this._tail.next = node
        this._tail = node
        return true
    }

    public prepend(data: T): boolean {
        const node: Global.INode<T> = new LinkedListNode(data)
        node.next = this._head
        this._head = node
        return true
    }

    public remove(data: T): boolean {
        if(this._head === null) return false
        if(this._head.data === data) {
            this._head = this._head.next
            return true
        }
        let current = this._head
        while(current.next !== null) {
            if(current.next.data === data) {
                current.next = current.next.next
                return true
            }
            current = current.next
        }
        return false
    }

    public contains(data: T): boolean {
        if(!this._head) return false
        let current: Global.INode<T> | null = this._head
        while(current && current.data !== data) {
            current = current.next
        }
        if(current) return true
        return false
    }

    public traverse(): void {
        if(!this._head) return
        let current: Global.INode<T> | null = this._head
        while(current !== null) {
            console.log(current.data);
            current = current.next
        }
    }

    public find(callback: (data: T) => boolean): Global.INode<T> | null {
        let current = this._head
        let found = false
        while(current && !found) {
            found = callback(current.data as T)
            if(!found) current = current.next
        }
        return current
    }
}
