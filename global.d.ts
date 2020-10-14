declare namespace Global {
    export interface INode<T> {
        data: (T | null)
        next: (INode<T> | null)
        prev?: (INode<T> | null)
    }
}