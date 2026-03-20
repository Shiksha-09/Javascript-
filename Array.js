function Arr(){
    let fruits =["Apple", "Mango","Banana", 9,85]
    console.log(fruits[4]) // access

    console.log(fruits.length) //length

    fruits.pop()
    fruits.push("Papaya", "Pineapple")

    fruits.shift()
    fruits.unshift("Grapes")
    console.log(fruits.splice(2,4))
    fruits.splice(2,0,"papaya")
    console.log(fruits)

    //name reverse
     let  str="cybrom"
     let rev=str.split("").reverse().join("")
     console.log(rev)

}
Arr()
