// var arr = [1,2,[3,4,[5,6,[7,8,[9,10,[11,12,[13,14]]]]]]]


// console.log(arr[2][2][2][2][2][2][1])




// console.log(arr.flat(Infinity))


// var name ="Ujjwal"

// console.log(Array.isArray(arr))




// var new_Arr = Array.from(name)

// console.log(new_Arr)



// var player1 = "Rohit"
// var player2= "jaiswal"
// var player3 = "Bumrah"
// var player4 = "virat"

// console.log(Array.of(player1,player2,player3,player4))



// Object 



// console.log(user["city"])

// console.log(user.name)


// user.city = "Janupur"



// console.log(user)



// Object.freeze(user)

// user.name = "ikea"

// console.log(user)




// var user = {
//     first_name: "Ujjwal",
//     last_name: "Upadhyay",
//     full_name:function(){
//         return this.first_name + " " + this.last_name
//     },
//     email:"upadhyaybram@gamil.com",
//     postion:"software developer",
//     city:"Mirzapur" 
// }

// console.log(user.full_name())


// var user = {
//     name:"Aniket Verma",
//     age:25,
//     email:"ankie@gmail.com",
//     address:{
//         street:"Mirzapur",
//         colony:"kedar nagar"
//     }
// }


// console.log(user.address.colony)


var player1= {
    name:"rohit",
    age:37,
    email:"rohit@gmail.com",
    type:{
        bowl_type:"right hand off spin",
        bat_type:"right hand"
        }
}

var player2= {
    name1:"virat",
    age1:35,
    email3:"virat@gmail.com",
    type1:{
        bowl_type:"right hand medium fast ",
        bat_type:"right hand"
        }
}


var new1 = Object.assign({},player1,player2)

console.log(new1)


var new_Arr = {...player1,...player2}
console.log(new_Arr)


var users = [

    {name:"Ujjwal"},
    {name:"Surya"},
    {name:"kiara"},
    {name:"hardik"},
    {name:"jarsh"}
]


console.log(users[3].name)


console.log(Object.entries(player1))





























