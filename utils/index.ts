export abstract class List<T> {
    protected _head: Global.INode<T> | null = null
    protected _tail: Global.INode<T> | null = null

    get head() {
        return this._head?.data || null
    }

    get tail() {
        return this._tail?.data || null
    }
}