import { Stack } from "../Stack"

describe('Stack', () => {
    it('should add elements to the top of the stack', () => {
        const s = new Stack<number>()
        for(let i = 1; i <= 3; i++){ s.push(i) }       
        expect(s.peek).toBe(3)
    });

    it('should remove the first element from the top of the stack', () => {
        const s = new Stack<number>()
        for(let i = 1; i <= 3; i++){ s.push(i) }  
        expect(s.pop()).toBe(true)    
        expect(s.peek).toBe(2)
    })

    it('should return true when queue is empty', () => {
        const q = new Stack()
        expect(q.isEmpty).toBe(true)
    })
 
    it('should return false when queue is not empty', () => {
        const q = new Stack<number>()
        q.push(10)
        expect(q.isEmpty).toBe(false)
    })
});