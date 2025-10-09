
class BookNode {
    constructor(book) {
    this.book = book
    this.next = null
    }
}


class BookStack {
    constructor() {
    this.top = null
    this.size = 0
    }

    push(book) {
    const newNode = new BookNode(book)
    newNode.next = this.top
    this.top = newNode
    this.size++
    }

    pop() {
    if (this.isEmpty()) {
        return null
    }
    const poppedBook = this.top.book
    this.top = this.top.next
    this.size--
    return poppedBook
    }

    peek() {
    return this.isEmpty() ? null : this.top.book
    }

    isEmpty() {
    return this.size === 0
    }

    getSize() {
    return this.size
    }

    toArray() {
    const result = []
    let current = this.top
    while (current) {
        result.push(current.book)
        current = current.next
    }
    return result
    }
}

export { BookNode, BookStack }