import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
function App() {
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
      const [selectedId,setselectedId] = useState(null)
        
  return (
    <div>
      <button onClick={()=> setselectedId(1)}>1</button>
      <button  onClick={()=> setselectedId(2)}>2</button>
      <button onClick={()=> setselectedId(3)}>3</button>
      <button onClick={()=> setselectedId(4)}>4</button>
      <button onClick={()=> setselectedId(5)}>5</button>
      {/* <Todo id={5} /> */}
      {selectedId && <Todo id ={selectedId}/>}
    </div>
  );
}

function Todo({ id }) {
  const [todo, setTodo] = useState({});
  useEffect(() => {
    axios.get("http://localhost:3000/todo?id=" + id).then((res) => {
      setTodo(res.data.result);
    });
  }, []);
  return (
    <div>
      <h1>{todo.title}</h1>
      <br />
      <h2>{todo.description}</h2>
    </div>
  );
}

export default App;
