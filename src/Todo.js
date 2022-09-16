import React from "react"

export default function Todo(){
    const [activity, setActivity] = React.useState("")
    const [edit, setEdit] = React.useState({})
    const [todo, setTodo] = React.useState([])
    const [message, setMessage] = React.useState("")

    const generateId = () => Date.now()

    const handleSubmit = (e) => {
        e.preventDefault()

        if(!activity){
            return setMessage("wajib diisi")
        }
        setMessage("")
        
        if(edit.id){
            const updateTodo = {
                ...edit,
                activity
            }
            const editTodoIndex = todo.findIndex((todo) => todo.id === edit.id)
            const todos = [...todo]
            todos[editTodoIndex] = updateTodo

            setTodo(todos)
            return handleCancel()
        }

        setTodo([...todo, {
            id: generateId(),
            activity,
            done : false
        }])
        setActivity("")
    }

    const handleDelete = (todoId) => {
        const filterTodo = todo.filter((todo) => todo.id !== todoId) 
        setTodo(filterTodo)
        if(edit.id) handleCancel()
    }
    
    const handleEdit = (todo) => {
        setActivity(todo.activity)
        setEdit(todo)
        // console.log(todo)
    }
    
    const handleCancel = () => {
        setEdit({})
        setActivity("")
    }
    const handleCheckbox = (input) =>{
        const updateTodo = {
            ...input,
            done: input.done ? false : true
        }
        const editTodoIndex = todo.findIndex((currentTodo) => currentTodo.id === input.id)
        const updateTodos = [...todo]
        updateTodos[editTodoIndex] = updateTodo

        setTodo(updateTodos)
    }

    return(
        <div>
            <h1>To do list</h1>
            {message && <p style={{ color: "red" }}>{message}</p>}
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={(e) => setActivity(e.target.value)} value={activity}/>
                <button type="submit">
                    {edit.id ? "Simpan Perubahan" : "tambah"}
                </button>
                {edit.id && <button onClick={() => handleCancel()}>Cancel</button>}
                
            </form>
            {todo.length > 0 ?
            <ul>
                {todo.map((todo) => <li key={todo.id}>{todo.activity}
                    ({todo.done ? "selesai" : "Belum"})
                    <input type="checkbox" checked={todo.done} onChange={() => handleCheckbox(todo)} />
                    <button onClick={() => handleEdit(todo)}>Edit</button>
                    <button onClick={() => handleDelete(todo.id)}>Delete</button>
                </li>)}
            </ul> : <i>Todo tidak ada</i>
            }
        </div>
    )
}