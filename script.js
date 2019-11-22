//  Todos

//  It should have a place to store todos 

var todos = ["item 1", "item 2", "item 3"]

// It should have a way to display todos 

console.log(todos)
console.log("My Todos:", todos)

// It should have a way to add new todos 

todos.push('item 4')
todos.push('item.5')
console.log("I added new todos:", todos)

// It should have a way to change a todo 

todos[0] = 'item 1 uptaded'
todos[0] = 'new value'
console.log("I changed the first one:", todos)

//  It should have a way to delete a todo 

todos.splice(0,1)  // we deleted the first array. 0=array , 1=amount
console.log("I deleted the first one:", todos)


todos.splice(2,1)  // we deleted the third array. 2=array , 1=amount
console.log("I deleted the third one:", todos)





