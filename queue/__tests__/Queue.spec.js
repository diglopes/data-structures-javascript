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
});