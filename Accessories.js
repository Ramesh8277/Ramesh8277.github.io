function displayDate(){
    console.log("calling display Date")
    let date = new Date()
    console.log(date)
    console.log(date.getDate())
    let display = document.getElementById("displayDate")
    display.innerHTML = date.getFullYear()
}

var arr=[]
console.log(arr)
arr.push(10)
console.log(arr)
arr.push(11)
console.log(arr)
arr.pop()
console.log(arr)
arr.unshift(100)
console.log(arr)
arr.unshift(20)
console.log(arr)

for(var i=0;i<arr.length;i++){
    console.log(arr[i])
}
let trees=[]
let tree = {"name":"Banyan","Lifespan":100}
let tree1 = {"name": "Coconut","Lifespan":40}
trees.push(tree)
console.log(trees)
trees.push(tree1)
console.log(trees)