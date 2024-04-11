let student = {
    name : "Les",
    score : {
        history : 87,
        science : 94,
        average : function() {
            return (this.history + this.history + this.science) / 2
        }
    }
}

console.log(student.score.history)
console.log(student.score.average())