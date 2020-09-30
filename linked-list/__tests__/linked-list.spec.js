const LinkedList = require("../LinkedList")
const LinkedListNode = require("../LinkedListNode")


describe('Linked list', () => {
    it("should create an empty linked list object", () => {
        const linkedList = new LinkedList()
        expect(linkedList instanceof LinkedList).toBe(true)
        expect(linkedList.head).toBeNull()
    })

    it("should append data to the linked list", () => {
        const linkedList = new LinkedList()
        linkedList.append("any_value")
        linkedList.append("any_other_value")
        expect(linkedList.head.data).toBe("any_value")
        expect(linkedList.head.next.data).toBe("any_other_value")
    })

    it("should prepend data to the linked list", () => {
        const linkedList = new LinkedList()
        linkedList.append("any_value")
        linkedList.prepend("prepended_value")
        expect(linkedList.head.data).toBe("prepended_value")
    })

    describe("When removing an item", () => {
        it("should return false when list is empty", () => {
            const linkedList = new LinkedList()
            expect(linkedList.remove("any_value")).toBe(false)
        })

        it("should add head's next node to the head property when it head is deleted", () => {
            const linkedList = new LinkedList()
            linkedList.append("item_1")
            linkedList.append("item_2")
            linkedList.remove("item_1")
            expect(linkedList.head instanceof LinkedListNode).toBe(true)
            expect(linkedList.head.data).toBe("item_2")
        })

        it("should return true when find and delete an item", () => {
            const linkedList = new LinkedList()
            linkedList.append("item_1")
            linkedList.append("item_2")
            linkedList.append("item_3")
            expect(linkedList.remove("item_2")).toBe(true)
        })

        it("should return false when doesn't find a item to delete", () => {
            const linkedList = new LinkedList()
            linkedList.append("item_1")
            linkedList.append("item_2")
            linkedList.append("item_3")
            expect(linkedList.remove("item_4")).toBe(false)
        })
    })

    it("should verify if the list contains a item", () => {
        const linkedList = new LinkedList()
        linkedList.append("item_1")
        linkedList.append("item_2")
        linkedList.append("item_3")
    })
});