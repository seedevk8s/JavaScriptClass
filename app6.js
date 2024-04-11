function Book(title, pages, done = false) {
    this.title = title;
    this.pages = pages;
    this.done = done;
    this.finish = function () {
        let str = ""
        this.done === false ? str = "읽는 중" : str = "완독";
        return str;
    }
}

let book1 = new Book("les의 정석", 650, false)
let book2 = new Book("vag의 산책", 369, true)

console.log(`${book1.title} -- ${book1.pages}쪽 -- ${book1.finish()}`)
console.log(`${book2.title} -- ${book2.pages}쪽 -- ${book2.finish()}`)

console.log(book1)
console.log(book2)