
class PersonNode {
    constructor(person) {
    this.person = person
    this.next = null
    }
}

class ATMQueue {
    constructor() {
    this.front = null
    this.rear = null
    this.size = 0
    }

    enqueue(person) {
    const newNode = new PersonNode(person)
    
    if (this.isEmpty() || person.arrivalTime >= this.rear.person.arrivalTime) {
        if (this.isEmpty()) {
        this.front = newNode
        this.rear = newNode
        } else {
        this.rear.next = newNode
        this.rear = newNode
        }
    } else {
        this._insertInOrder(newNode)
    }
    this.size++
    }

    _insertInOrder(newNode) {
    if (newNode.person.arrivalTime < this.front.person.arrivalTime) {
        newNode.next = this.front
        this.front = newNode
        return
    }

    let current = this.front;
    while (current.next && current.next.person.arrivalTime <= newNode.person.arrivalTime) {
        current = current.next
    }
    
    newNode.next = current.next
    current.next = newNode
    }

    dequeue() {
    if (this.isEmpty()) {
        return null
    }
    
    const dequeuedPerson = this.front.person
    this.front = this.front.next
    
    if (this.front === null) {
        this.rear = null
    }
    
    this.size--
    return dequeuedPerson
    }

    peek() {
    return this.isEmpty() ? null : this.front.person
    }

    isEmpty() {
    return this.size === 0
    }

    getSize() {
    return this.size
    }


    toArray() {
    const result = []
    let current = this.front
    while (current) {
        result.push(current.person)
        current = current.next
    }
    return result
    }

    addMultiplePeople(people) {
    const sortedPeople = [...people].sort((a, b) => 
        new Date(a.arrivalTime) - new Date(b.arrivalTime)
    );
    
    sortedPeople.forEach(person => this.enqueue(person))
    }
}

export { PersonNode, ATMQueue }