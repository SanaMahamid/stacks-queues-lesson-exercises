/* Write your class below */
const Stack = require('./Stack')

class MinStack extends Stack {
  constructor() {
    super()
    this.minValues = new Stack()
  }

  push(x) {
    if (this.isEmpty()) {
      this.minValues.push(x)
    } else if (x < this.minValues.peek()) {
      this.minValues.push(x)
    }

    super.push(x)
  }

  getMin() {
    return this.minValues.peek()
  }

  pop() {
    if (this.isEmpty()) {
      return null
    } else if (this.peek() === this.minValues.peek()) {
      this.minValues.pop()
    }

    return super.pop()
  }
}








//You can paste the test code from the lesson below to test your solution
/*let ms = new MinStack()
ms.push(17)
ms.push(12)
ms.push(31)
console.log(ms.getMin())    //12
ms.pop()
ms.pop()
ms.pop()
console.log(ms.getMin())    //null
ms.push(19)
ms.push(21)
console.log(ms.getMin())    //19
ms.push(3)
console.log(ms.getMin())    //3
ms.pop()
ms.pop()
console.log(ms.getMin())    //19*/






/* Do not remove the exports below */
module.exports = MinStack