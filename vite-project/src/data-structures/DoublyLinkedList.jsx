
class HistoryNode {
    constructor(page) {
    this.page = page
    this.next = null
    this.prev = null
    }
}


class BrowserHistory {
    constructor() {
    this.head = null
    this.current = null
    this.size = 0
    }

    visit(page) {
    const newNode = new HistoryNode(page)
    
    if (!this.head) {
        this.head = newNode
        this.current = newNode
    } else {
        if (this.current.next) {
        this.current.next = null
        }
        this.current.next = newNode
        newNode.prev = this.current
        this.current = newNode
    }
    this.size++
    }

    back() {
    if (this.current && this.current.prev) {
        this.current = this.current.prev
        return this.current.page
    }
    return null
    }

    forward() {
    if (this.current && this.current.next) {
        this.current = this.current.next
        return this.current.page
    }
    return null
    }

    getCurrentPage() {
    return this.current ? this.current.page : null
    }

    getHistory() {
    const result = []
    let temp = this.head
    while (temp) {
        result.push({
        page: temp.page,
        isCurrent: temp === this.current
        });
        temp = temp.next
    }
    return result
    }
}

export { HistoryNode, BrowserHistory }