import { LinkedList } from "../LinkedList"


describe('Linked list', () => {
    it("should create an empty linked list object", () => {
        const linkedList = new LinkedList<string>()
        expect(linkedList instanceof LinkedList).toBe(true)
        expect(linkedList.head).toBe(null)
        expect(linkedList.tail).toBe(null)
    })

    it("should append data to the linked list", () => {
        const linkedList = new LinkedList<string>()
        linkedList.append("any_value")
        expect(linkedList.head).toBe("any_value")
    })

    it("should prepend data to the linked list", () => {
        const linkedList = new LinkedList<string>()
        linkedList.append("any_value")
        linkedList.prepend("prepended_value")
        expect(linkedList.head).toBe("prepended_value")
    })

    describe("When removing an item", () => {
        it("should return false when list is empty", () => {
            const linkedList = new LinkedList<string>()
            expect(linkedList.remove("any_value")).toBe(false)
        })

        it("should add head's next node to the head property when it head is deleted", () => {
            const linkedList = new LinkedList<string>()
            linkedList.append("item_1")
            linkedList.append("item_2")
            linkedList.remove("item_1")
            expect(linkedList.head).toBe("item_2")
        })

        it("should return true when find and delete an item", () => {
            const linkedList = new LinkedList<string>()
            linkedList.append("item_1")
            linkedList.append("item_2")
            linkedList.append("item_3")
            expect(linkedList.remove("item_2")).toBe(true)
        })

        it("should return false when doesn't find a item to delete", () => {
            const linkedList = new LinkedList<string>()
            linkedList.append("item_1")
            linkedList.append("item_2")
            linkedList.append("item_3")
            expect(linkedList.remove("item_4")).toBe(false)
        })
    })

    it("should verify if the list contains a item", () => {
        const linkedList = new LinkedList<string>()
        linkedList.append("item_1")
        linkedList.append("item_2")
        linkedList.append("item_3")
    })

    it("should return the data given a callback", () => {
        interface Item { key: string, value: number }
        const linkedList = new LinkedList<Item>()
        linkedList.append({ key: "a",  value: 1 })
        linkedList.append({ key: "b",  value: 2 })
        linkedList.append({ key: "c",  value: 3 })
        const cb = (nodeData: Item) => nodeData.key === "b"
        expect(linkedList.find(cb)?.data).toEqual({ key: "b",  value: 2 })
    })

    it("should return null if the list doesn't have the item", () => {
      interface Item { key: string, value: number }
      const linkedList = new LinkedList<Item>()
      linkedList.append({ key: "a", value: 10 })
      const callback = (nodeData: Item) => nodeData.key === "b"
      expect(linkedList.find(callback)).toBeNull()  
    })
});