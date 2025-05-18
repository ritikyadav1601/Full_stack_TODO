const mongoose = require("mongoose")

const db = mongoose.connect("mongodb+srv://rythukran713:hoWUzqG7D6@cluster0.1mdayd4.mongodb.net/todo-app")

const schema = new mongoose.Schema({
    title: String,
    description : String,
    completed : Boolean
})

const modelDb = new mongoose.model("schemaTodo", schema)

module.exports = modelDb
