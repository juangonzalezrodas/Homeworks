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

    }

    back(){

    }

    forward() {

    }

    getCurrentPage() {
        return this.current ? this.current.page : null
    }

    getHistory() {

    }
}

export {HistoryNode, BrowserHistory}