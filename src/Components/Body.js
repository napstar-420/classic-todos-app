import React, {useState} from 'react'
import './CSS/body.css'
import ErrorMsg from "./ErrorMsg.js";
import "./CSS/todoList.css";
export default function Body() {

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [list, setList] = useState([])
  
  function addTodo(e){
    e.preventDefault();
    if (title !== "" && desc !== "") {
      const newList = [...list, {title: title, desc: desc, id: new Date().getTime().toString()}];
      setList(newList);
      setTitle('');
      setDesc('');
    } else {
      alert('Title or Description cannot be empty')
    }
  }

  function deleteTodo(id) {
    const newList = list.filter(todo => todo.id !== id);
    setList(newList);
  }

  return (
    <div>
      <form className='todo-form' onSubmit={(e)=>addTodo(e)}>
        <input type="text" id='title' onChange={(e)=>setTitle(e.target.value)} value={title} placeholder='Todo Heading'/>
        <input type="text" id='desc' onChange={(e)=>setDesc(e.target.value)} value={desc} placeholder='Todo Description'/>
        <button className='btn btn-success' type="submit">ADD</button>
      </form>
      <ol className="list">
        {list.length > 0 ? (
          list.map((todo) => {
            return (
              <>
                <li key={todo.id} className=''>
                  <div className="">
                    <h2>{todo.title}</h2>
                    <p>{todo.desc}</p>
                  </div>
                  <div className="row d-flex flex-sm-row justify-content-sm-around buttons">
                    <button className="btn btn-warning col-sm-5">
                      <i className="fa fa-pencil"></i> Edit
                    </button>
                    <button className="btn btn-danger col-sm-5" onClick={()=>deleteTodo(todo.id)}>
                      <i className="fa fa-trash"></i> Delete
                    </button>
                  </div>
                </li>
                <hr />
              </>
            );
          })
        ) : (
          <ErrorMsg />
        )}
      </ol>
    </div>
  )
}
