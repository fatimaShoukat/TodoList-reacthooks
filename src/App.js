import React, {useState} from 'react';
function Todo({todo, index, completeHandler,deleteHandler}) {
  console.log(todo)
      return (
           <div style={{ backgroundColor: todo.isCompleted ? "green" : "transparent" }}>
              {todo.text}
              <div>
                  <button onClick={completeHandler(index)}>Complete</button> <strong> | </strong>
                  <button onClick={deleteHandler(index)}>Delete</button>
              </div>
          </div>
      )
  }
  
  
   function TodoFormComponent({addTodo}) {
  
      const [value, setValue] = useState("");
  
      const handleSubmit = e => {
        e.prevendivefault();
        if (!value) return;
        addTodo(value);
        setValue("");
      };
          return (
              <form onSubmit={handleSubmit}>
                  <input type="text" id="task" name="task" value={value}
                   placeholder="type some task" onChange={e => setValue(e.target.value)} />
                  <input type="submit" name="submit-btn" value="Add Todo"/>
              </form>
          )
  
  } //todoForm

function App() {
  const [todos,setTodos]= useState([
    {id:1,text:'Learn React',isCompleted:true},
    {id:2,text:'Do Assignment',isCompleted:false},
    {id:3,text:'Rock n Roll',isCompleted:false}
  ]);

    const addTodo = text => {
      const newTodos = [...todos, { text }];
      setTodos(newTodos);
    };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const deleteTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  return (
    <div className="App"> 
    <h1>Todos</h1>
    <TodoFormComponent addTodo={addTodo} />
    <hr />
         
    <table width="80%">
    <thead>
        <tr>
            <th>Id</th>
            <th>Task</th>
            <th>Status</th>
            <th>Action</th>
        </tr>
    </thead>
    </table>
    <div className="todolist">

      { todos.map((todo,index)=>(
         <Todo
         key={index}
         index={index}
         todo={todo}
         completeHandler={completeTodo}
         deleteHandler={deleteTodo}
       />
      )) }
      </div>
    </div>
  );
}


export default App;
