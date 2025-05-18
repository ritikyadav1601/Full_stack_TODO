const express = require("express")
const { createTodo, updateTodo } = require("./types")
const app = express()
const modelDb = require("./db")
const cors = require("cors")

app.use(express.json())

app.use(cors())

app.post("/todo", async(req, res) => {

    const payload = req.body
    const parsepayload = createTodo.safeParse(payload)

    if (!parsepayload.success) {
       return res.status(411).json({ msg: "Invalid Inputs" })
    }

    await modelDb.create({
       title:  payload.title,
       description:  payload.description,
       completed: false
    })
    return res.status(200).json({msg: "Task added sucessfully"})
})

app.get("/todos", async(req, res) => {
        let data = await modelDb.find({})

        res.status(200).json({data})
})

app.put("/completed", async(req, res) => {
    const payload = req.body
    const parsepayload = updateTodo.safeParse(payload)

    if (!parsepayload.success) {
        res.status(411).json({
            msg: "Invalid Inputs"
        })
    }
    await  modelDb.updateOne({
        _id: req.body.id
    },{
        completed: true
    })
    res.json({msg: "Updated sucessfully"})
})

app.listen(3000, () => {
    console.log("Server is runing on Port 3000")
})