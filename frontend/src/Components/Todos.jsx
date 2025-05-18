import { useState } from "react"

export function Todos({ todos, reRenderTodo }) {

    const [completed, setCompleted] = useState(false)
    return <div>
        {todos.map(function (todo, index) {
            return <div key={index}>
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>

                <button onClick={() => {
                    fetch("http://localhost:3000/completed", {
                        method: "PUT",
                        body: JSON.stringify({
                            id: todo._id
                        }),
                        headers: {
                            "content-type": "application/json"
                        }
                    }).then(async function (res) {
                        let response = await res.json()
                        // alert("Todo added")
                        reRenderTodo()
                    })
                }}>{todo.completed == true ? "Completed" : "Mark as complete"}</button>
            </div>
        })}
    </div>
}
