class Book2 {
    constructor(title, pages, done) {
        this.title = title;
        this.pages = pages;
        this.done = done;
    }

    finish() {
        let str = ""
        this.done === false ? str = "읽는 중" : str = "완독"
        return str;
    }
}

let book1 = new Book2("les의 정석", 650, true)
let book2 = new Book2("vag 나들이", 368, false)

console.log(`${book1.title} -- ${book1.pages}쪽 -- ${book1.finish()}`)
console.log(`${book2.title} -- ${book2.pages}쪽 -- ${book2.finish()}`)

console.log(book1)
console.log(book2)