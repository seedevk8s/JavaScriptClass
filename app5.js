let bag1 = {
    color : "blue",
    width : 30,
    height : 50,
}
let bag2 = bag1

console.log(bag1)
console.log(bag2)

bag2.color = "red"
console.log(bag1)
console.log(bag2)