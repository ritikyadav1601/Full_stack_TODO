import { useEffect, useState } from "react"
import { CreateTodo } from "./Components/CreateTodo"
import { Todos } from "./Components/Todos"

function App() {

  const [todo, setTodo] = useState([])

  function reRenderTodo() {

    fetch("http://localhost:3000/todos")
      .then(async function (res) {
        let data = await res.json()
        setTodo(data.data)
      })
  }

  useEffect(()=>reRenderTodo(),[])


  return <>
    <CreateTodo reRenderTodo={reRenderTodo} />
    <Todos todos={todo} reRenderTodo={reRenderTodo} />

  </>
}

export default App