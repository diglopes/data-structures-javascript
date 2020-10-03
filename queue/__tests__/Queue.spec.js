const { Queue } = require('../Queue')

describe('Queue', () => {
   it('should add a item on rear yerminal position', () => {
       const q = new Queue()
       for(let i = 1; i <= 3; i++){ q.enqueue(i) }       
       expect(q.peekFront).toBe(1)
       expect(q.peekBack).toBe(3)
   }); 

   it('should remove the first item on queue', () => {
       const q = new Queue()
       for(let i = 1; i <= 3; i++){ q.enqueue(i) } 
       q.dequeue()
       expect(q.peekFront).toBe(2)
   })

   it('should return true when queue is empty', () => {
       const q = new Queue()
       expect(q.isEmpty).toBe(true)
   })

   it('should return false when queue is not empty', () => {
        const q = new Queue()
        q.enqueue(10)
        expect(q.isEmpty).toBe(false)
   })
});