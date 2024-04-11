let book4 = {
    title : "Les",
    pages : 500,
    author : "추호진",
    done : false,
    finish : function () {
        book4.done === false ? console.log("읽는 중") : console.log("완독")
        this.done !== false ? console.log("읽는 중2") : console.log("완독2")
    }
}

console.log(book4.finish())