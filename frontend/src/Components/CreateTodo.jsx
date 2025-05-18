import React, { useState } from 'react'

export const CreateTodo = ({reRenderTodo}) => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')



    return <>
        <input style={{ margin: 10, padding: 10 }} type="text" placeholder='Title' onChange={(e) => setTitle(e.target.value)} />  <br />
        <input style={{ margin: 10, padding: 10 }} type="text" placeholder='description' onChange={(e) => setDescription(e.target.value)} />  <br />

        <button style={{ margin: 10, padding: 5 }} onClick={() => {
            fetch("http://localhost:3000/todo", {
                method: "POST",
                body: JSON.stringify({
                    title,
                    description
                }),
                headers: {
                    "content-type": "application/json"
                }
            }).then(async function (res) {
                let response = await res.json()
                // alert("Todo added")
                reRenderTodo()
            })
        }}>Add Todo</button>
    </>

}
