const { DoublyLinkedList } = require("../DoublyLinkedList");

describe('Doubly Linked List', () => {
    it('should create an instance of DoublyLinkedList', () => {
        const list = new DoublyLinkedList()
        expect(list instanceof DoublyLinkedList).toBe(true)
    });

    describe("When adding a node", () => {
        it('should add a node to head and tail when list is empty', () => {
            const list = new DoublyLinkedList()
            list.add("any_data")
            expect(list.head.data).toBe("any_data")
            expect(list.tail.data).toBe("any_data")
        });

        it('should add a node to tail when the list has at least one item', () => {
            const list  = new DoublyLinkedList()
            list.add("item_1")
            list.add("item_2")
            expect(list.tail.data).toBe("item_2")
            expect(list.tail.prev.data).toBe("item_1")
            expect(list.tail.prev.next.data).toBe("item_2")
        });
    })

    describe("When removing a node", () => {
        it('should return false when list is empty', () => {
            const list  = new DoublyLinkedList()
            expect(list.remove("any_data")).toBe(false)
        });

        it('should remove node from head and tail if there\'s only one item on the list', () => {
            const list  = new DoublyLinkedList()
            list.add("one_item")
            const response = list.remove("one_item")
            expect(response).toBe(true)
            expect(list.head).toBeNull()
            expect(list.tail).toBeNull()
        });

        it('should correctly remove the last list node', () => {
            const list  = new DoublyLinkedList()
            list.add('item_1')
            list.add('item_2')
            const response = list.remove('item_2')
            expect(response).toBe(true)
            expect(list.head === list.tail).toBe(true)
        });

        it('should correctly remove a node in the middle of the list', () => {
            const list  = new DoublyLinkedList()
            list.add('item_1')
            list.add('item_2')
            list.add('item_3')
            const response = list.remove('item_2')
            expect(response).toBe(true)
            expect(list.head.next.data).toBe("item_3")
            expect(list.tail.prev.data).toBe("item_1")
        });
    })
});