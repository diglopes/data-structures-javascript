const { HashMap } = require("../HashMap")

describe('Hash Map', () => {
    it("should instantiate a hash map with 10 buckets", () => {
        const hm = new HashMap(10)
        expect(hm instanceof HashMap).toBe(true)
    })

    it('should hash a key to a value lower than hashmap total items', () => {
        const hm = new HashMap(10)
        const response = hm._hash("key")
        expect(response).toBe(9)
    })

    it("should insert a data to the given key", () => {
        const hm = new HashMap(10)
        const response = hm.put("key", "any_value")
        expect(response).toBe(true)
    })

    it("should retrieve the data related to the given key", () => {
        const hm = new HashMap(10)
        hm.put("key", "any_value")
        expect(hm.get("key")).toBe("any_value")
    })

    it("should resolve key collision", () => {
        const hm = new HashMap(11)
        hm.put("Tim", 5)
        hm.put("Len", 10)
        expect(hm.get("Tim")).toBe(5)
    })

    it("should override a key value", () => {
        const hm = new HashMap(10)
        hm.put("key", 1)
        hm.put("key", 2)
        expect(hm.get("key")).toBe(2)
    })
});