const { LinkedList } = require("../linked-list/LinkedList")

class HashMap {
    constructor(bucketsAmount = 10) {
        this.buckets = new Array(bucketsAmount)
            .fill(null)
            .map(() => new LinkedList())
    }

    _hash(key) {
        const hash = Array.from(key).reduce((prev, cur) => {
            return prev + cur.charCodeAt()
        }, 0)
        return hash % this.buckets.length
    }


    put(key, value) {
        const index = this._hash(key)
        const node = this.buckets[index].find(nodeValue => nodeValue.key === key)
        node ? node.data.value = value : this.buckets[index].append({ key, value })
        return true
    }

    get(key) {
        const index = this._hash(key)
        const node = this.buckets[index].find(nodeValue => nodeValue.key === key)
        return node.data.value
    }
}

module.exports = { HashMap }