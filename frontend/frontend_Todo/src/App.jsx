import { useEffect } from "react"
import { useState } from "react"
import axios from  "axios"
function  App(){
        // const [todo ,setTodo] = useState([])
        // useEffect(()=>{
         
          
        //    axios.get('http://localhost:3000/random-todo')
        //    .then(function(res){
        //     console.log(res.data);
            
        //     setTodo(res.data)
        //    })

        // },[])
//   return (
//     <>
//        {todo.map(function(item){
//              return   <Todo  title={item.title} description={item.description} />
//        })}
//     </>
//   ) 
                  return   <div>
                      <Todo id={5}/>
                    </div>
                    
                  
                   
 }

function Todo({id}){
              const [todo,setTodo] = useState({})
              useEffect(()=>{
                axios.get("http://localhost:3000/todo?id="+ id)
                .then(res=>{
                  setTodo(res.data.result)
                })
              },[])
        return(
          <div>
                 <h1>{todo.title}</h1>
                 <br />
                 <h2>{todo.description}</h2>
          </div>
        )
}

export default App