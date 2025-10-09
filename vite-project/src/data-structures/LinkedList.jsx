
class SongNode {
    constructor(song) {
    this.song = song
    this.next = null
    }
}

class SongPlaylist {
    constructor() {
    this.head = null
    this.current = null
    this.size = 0
    }

    add(song) {
    const newNode = new SongNode(song)
    if (!this.head) {
        this.head = newNode
        this.current = newNode
    } else {
        let temp = this.head
        while (temp.next) {
        temp = temp.next
        }
        temp.next = newNode
    }
    this.size++
    }

    next() {
    if (this.current && this.current.next) {
        this.current = this.current.next
        return this.current.song
    }
    return null
    }

    previous() {
    if (this.current === this.head) return null

    let temp = this.head
    while (temp.next !== this.current) {
        temp = temp.next
    }
    this.current = temp
    return this.current.song
    }

    getCurrentSong() {
    return this.current ? this.current.song : null
    }

    toArray() {
    const result = []
    let temp = this.head
    while (temp) {
        result.push(temp.song)
        temp = temp.next
    }
    return result
    }
}

export { SongNode, SongPlaylist }