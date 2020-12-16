/* Write your class below */
const Queue = require('./Queue')

class DuoQueue extends Queue{
    constructor(){
        super()
        this.q1 = new Queue()
        this.q2 = new Queue()
    }

    enqueue(person, qNum){
        if(qNum === 1){
            this.q1.enqueue(person)
        }else if(qNum === 2){
            this.q2.enqueue(person)
        }
    }

    dequeue(qNum){
        if(qNum === 1){
            this.q1.dequeue()
        }else if(qNum === 2){
            this.q2.dequeue()
        }
    }

    getLongestQueue(){
        if(this.q1.length === this.q2.length){
            return "both queues are equal"
        }
        return this.q2.length > this.q1.length ? this.q2 : this.q1
    }

    getShortestQueue(){
        if(this.q1.length === this.q2.length){
            return "both queues are equal"
        }
        return this.q2.length > this.q1.length ? this.q1 : this.q2
    }

    balanceQueues(){
        let diff = (this.q1.length + this.q2.length) % 2
        let longestQ = this.getLongestQueue()
        let shortestQ = this.getShortestQueue()
        while(longestQ.length - shortestQ.length > diff){
            shortestQ.enqueue(longestQ.dequeue())
        }
    }

    print(){
        console.log("Q1: " + this.q1)
        console.log("Q2: " + this.q2)
    }

}







//You can paste the test code from the lesson below to test your solution
let dq = new DuoQueue()

//first set
dq.enqueue(1, 1)
dq.enqueue(1, 1)
dq.enqueue(1, 1)
dq.enqueue(2, 2)
dq.enqueue(2, 2)
dq.dequeue(1)
dq.dequeue(1)

console.log(dq.getLongestQueue()) //Queue { queue: [ 2, 2 ] }
console.log(dq.getShortestQueue()) //Queue { queue: [ 1 ] }

//second set
dq.enqueue(1, 1)
dq.enqueue(1, 1)
dq.enqueue(1, 1)
dq.enqueue(1, 1)
dq.enqueue(1, 1)
dq.enqueue(1, 1)

console.log(dq.getLongestQueue()) //Queue { queue: [ 1, 1, 1, 1, 1, 1, 1 ] }
console.log(dq.getShortestQueue()) //Queue { queue: [ 2, 2 ] }

//balance queues
dq.balanceQueues()
console.log(dq.getLongestQueue()) //Queue { queue: [ 1, 1, 1, 1, 1 ] }
console.log(dq.getShortestQueue()) //Queue { queue: [ 1, 1, 2, 2 ] }





/* Do not remove the exports below */
module.exports = DuoQueue