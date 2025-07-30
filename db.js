 const mongoose = require('mongoose')
const { string, boolean } = require('zod')
 mongoose.connect('mongodb+srv://kadusingh881:DVIe8Q5D5pVRdBQU@cluster0.ikpl09h.mongodb.net/Todo-app')

 const todoSchema = new mongoose.Schema({
    title :String,
    description :String,
    completed :Boolean
 })

 const todo =  mongoose.model( 'Todo-app',todoSchema)

 module.exports={
    todo
 }