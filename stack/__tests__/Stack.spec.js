const Stack = require("../Stack")

describe('Stack', () => {
    it('should add elements to the top of the stack', () => {
        const s = new Stack()
        for(let i = 1; i <= 3; i++){ s.push(i) }       
        expect(s.peek).toBe(3)
    });

    it('should remove the first element from the top of the stack', () => {
        const s = new Stack()
        for(let i = 1; i <= 3; i++){ s.push(i) }  
        s.pop()     
        expect(s.peek).toBe(2)
    })

    it('should return true when queue is empty', () => {
        const q = new Stack()
        expect(q.isEmpty).toBe(true)
    })
 
    it('should return false when queue is not empty', () => {
         const q = new Stack()
         q.push(10)
         expect(q.isEmpty).toBe(false)
    })
});