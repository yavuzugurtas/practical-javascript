//  Version -1  / Todos

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


// Version - 2

/* Functions are just recipes 

function makeTurkeySandwich() {
 Get one slice of bread;
 Add turkey;
 Put a slice of bread on top;

}
makeTurkeySandwich()


Customizing functions 

function makeSandwichWith(filling) {

     Get one slice of bread;
     Add filling;
}

makeSandwichWith(ham)

   More on customizing functions 

function sayHiTo (person);
console.log('Hi', person);
sayHiTo('gordon');
*/

//  It should have a function to display todos 


 var todos = ['item1', 'item2', 'item3']; 
    
   function displayTodos () {
        console.log('my todos:', todos);
   }
    displayTodos();

// It should have a function to add new todos 

 function addTodo(todo){
    todos.push(todo);
    displayTodos();
}
addTodo('some stuff'); 

// It should have a function to change a todo 

 function changeTodo(position, newValue) {

    todos[position] = newValue;
    displayTodos();

    }
   
    changeTodo(0,'changed')


// It should have a function to delete a todo 


 function deleteTodo(){
     todos.splice(position,1);
     displayTodos();
     }

 deleteTodo(0)
 deleteTodo(2)


 // Version -3


  //  It should store the todos array on an object 

 var todoList = {
    todos: ['item 1', 'item 2', 'item 3']
  };

  //  It should have a displayTodos method 


var todoList = {
    todos: ['item 1', 'item 2', 'item 3'],
    displayTodos: function () {
       console.log('MyTodos', this.todos);
      }
  };
  
todoList.displayTodos();

//  It should have an addTodo method 


var todoList = {
    todos: ['item 1', 'item 2', 'item 3'],
    displayTodos: function () {
       console.log('MyTodos', this.todos);
      },

      addTodo: function(todo) {
          this.todos.push(todo);
          this.displayTodos();

      }
  };

todoList.addTodo('plunker');

// It should have a changeTodo method 

var todoList = {
    todos: ['item 1', 'item 2', 'item 3'],
    displayTodos: function () {
       console.log('MyTodos', this.todos);
      },

      addTodo: function(todo) {
          this.todos.push(todo);
          this.displayTodos();

      },

      changeTodo: function(position, newValue) {
         this.todos[position] = newValue;
         this.displayTodos();

      }

  };

  todoList.changeTodo(0,'first');

  // It should have a deleteTodo method 


  var todoList = {
    todos: ['item 1', 'item 2', 'item 3'],
    displayTodos: function () {
       console.log('MyTodos', this.todos);
      },

      addTodo: function(todo) {
          this.todos.push(todo);
          this.displayTodos();

      },

      changeTodo: function(position, newValue) {
         this.todos[position] = newValue;
         this.displayTodos();

      },
      
      deleteTodo: function(position) {
        this.todos.splice(position,1);
        this.displayTodos();

      }

  };

  todoList.deleteTodo(1);


  //  Version-4 Booleans

  //  todoList.addTodo should add objects 



   var todoList = {
      todos: [],
      displayTodos: function () {
       console.log('MyTodos', this.todos);
      },

      addTodo: function(todoText) {
          this.todos.push({
           todoText : todoText,
           completed : false

          });
          this.displayTodos();

      }
  };

    todoList.addTodo('this is an object');

 // todoList.changeTodo should change the todoText property 



   var todoList = {
      todos: [],
      displayTodos: function () {
       console.log('MyTodos', this.todos);
      },

      addTodo: function(todoText) {
          this.todos.push({
           todoText : todoText,
           completed : false

          });
          this.displayTodos();

      },

      changeTodo: function(position, todoText) {
        this.todos[position].todoText = todoText;
        this.displayTodos();

     },


  };
  todoList.addTodo('first try');
  todoList.changeTodo(0,'second try');

  // todoList.toggleCompleted should flip the completed property


  // !true = false
  // !false = true --- ! = opposite


  var todoList = {
    todos: [],
    displayTodos: function () {
     console.log('MyTodos', this.todos);
    },

    addTodo: function(todoText) {
        this.todos.push({
         todoText : todoText,
         completed : false

        });
        this.displayTodos();

    },

    changeTodo: function(position, todoText) {
      this.todos[position].todoText = todoText;
      this.displayTodos();

   },

   toggleCompleted: function(){
       var todo = this.todos[position];
       todo.completed = !todo.completed;
       this.displayTodos();

   }

}
  todoList.addTodo('boolean testing');
  todoList.toggleCompleted(0);


  // Version 5 -  Loops of Logic 

  

  // i = 0;
  //Say 'hey' if i<3
  //Increase i by 1

    for (var i=0; i<3; i++)  {
    console.log('i');
    }
    for (var i=0; i<10; i=i+2){
    console.log("hey");
    }
    // [0,2,4,6,8]  hey(5)
    
    for (var i=0; i<3; i++){
    console.log(i);
    }

    // displayTodos should show .todoText 

    var todoList = {
        todos: [],
        displayTodos: function(){
        console.log("My todos:", this.todos);
        for (var i=0; i<this.todos.legth; i++){
        console.log(this.todos[i].todoText);
        }
        },
        addTodo: function(todoText){
        this.todos.push({
        todoText: todoText,
        completed: false
        });
        this.displayTodos();
   
        this.todos[position].todoText = todoText;
        this.displayTodos();
        },
        deleteTodo: function(position){
        todos.splice(position, 1);
        displayTodos();
        },
        toggleCompleted: function(position){
        var todo = this.todos[position];
        todo.completed = !todo.completed;
        this.displayTodos();
        }
        };
    
    
        todoList.displayTodos();
      
        todoList.addTodo('first');
        
        todoList.addTodo('second');
      

    //    displayTodos should tell you if .todos is empty 
    
    var todoList = {
        todos: [],
        displayTodos: function(){
        if(this.todos.length === 0){
        console.log('your todo list is empty');
        }
        else {
        console.log('My todos:');
        for (var i=0; i<this.todos.legth; i++){
        console.log(this.todos[i].todoText);
           }
         }
        },
        addTodo: function(todoText){
        this.todos.push({
        todoText: todoText,
        completed: false
        });
        this.displayTodos();
        },
      
        changeTodo: function(position,todoText) {
        this.todos[position].todoText = todoText;
        this.displayTodos();
        },

        deleteTodo: function(position){
        todos.splice(position, 1);
        displayTodos();
        },
        toggleCompleted: function(position){
        var todo = this.todos[position];
        todo.completed = !todo.completed;
        this.displayTodos();
        }
        };
    
    
    
        todoList.displayTodos();
      
        todoList.addTodo('an item');
       
        todoList.deleteTodo(0);
       
        //displayTodos should show .completed 

     var todoList = {
      todos: [],
     displayTodos: function(){
     if(this.todos.length === 0){
     console.log('your todo list is empty');
        }
     else {
     console.log('My todos:');
     for (var i=0; i<this.todos.legth; i++){
            
     if(this.todos[i].completed === true){
      console.log('(x)', this.todos[i].todoText);
     }
     else {
     console.log('( )', this.todos[i].todoText); 
                }
             }
           }
        },
     addTodo: function(todoText){
     this.todos.push({
     todoText: todoText,
     completed: false
     });
     this.displayTodos();
      },
     changeTodo: function(position,todoText){
        
            this.todos[position].todoText = todoText;
            this.displayTodos();
            },
            deleteTodo: function(position){
            todos.splice(position, 1);
            displayTodos();
            },
            toggleCompleted: function(position){
            var todo = this.todos[position];
            todo.completed = !todo.completed;
            this.displayTodos();
            }
            };
        
        
            
     todoList.addTodo('first');
            
     todoList.addTodo('second');
           
     todoList.toggleCompleted(1);
            
     todoList.toggleCompleted(0);
           
     todoList.addTodo('fifth');
           
     todoList.toggleCompleted(5);

     // Need to practice version-5




     // Version-6 Thinking in Code
     
     var todoList = {
      todos: [],
     displayTodos: function(){
     if(this.todos.length === 0){
     console.log('your todo list is empty');
        }
     else {
     console.log('My todos:');
     for (var i=0; i<this.todos.legth; i++){
            
     if(this.todos[i].completed === true){
      console.log('(x)', this.todos[i].todoText);
     }
     else {
     console.log('( )', this.todos[i].todoText); 
                }
             }
           }
        },
     addTodo: function(todoText){
     this.todos.push({
     todoText: todoText,
     completed: false
     });
     this.displayTodos();
      },
     changeTodo: function(position,todoText){
        
            this.todos[position].todoText = todoText;
            this.displayTodos();
            },
            deleteTodo: function(position){
            todos.splice(position, 1);
            displayTodos();
            },
            toggleCompleted: function(position){
            var todo = this.todos[position];
            todo.completed = !todo.completed;
            this.displayTodos();
            },
            
     toggleAll: function() {
      var totalTodos = this.todos.length
      var completedTodos = 0;
      
      // If everything's true, make everything false.

      // Get number of completed todos
      for (var i = 0; i < totalTodos; i++ ) {
         if (this.todos[i].completed === true) {
            completedTodos++; 
         }
      } // Case: 1 if everything is ture Make everything false.
      if (completedTodos === totalTodos) {
         for (var i = 0; i < totalTodos; i++) {
            this.todos[i].completed = false;
         }
      // case: 2 Otherwise, make everything true 
         } else {
           for (var i = 0; i < totalTodos; i++) {
           this.todos[i].completed = true;

           }
         }
     }
          
    };






   
   

