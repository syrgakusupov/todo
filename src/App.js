import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [kg,setKg] = useState('')
  const[togo,setTogo] = useState([])

  function enter(){
    setTogo([...togo,kg])
    setKg('')
  }
  // const [text,setText] = useState('')
  // const [todo,setTodo] = useState([])

  // function Addtodo(){
  //   setTodo([...todo,text])
  //   setText('')
  // }

//  function Addtodo(){
//   // let massiv =['syrgak','tynchtyk','ilyaz']
//  }
//  let massiv =[
//   {
//     name:'syrgak ',
//     age:19,
//     adres:'issyk kul '
//   },
//   {
//     name:'Anarbek ',
//     age:20,
//     adres:' naryn'
//   }
// ] 
  return (
    <div className="App">
      {/* {massiv.map(ret =>(
      
      <h2>{ret}</h2>
    ))} */}

    {/* <div>
    <input type='text'
     placeholder='добавить еше'
     value={text}
     onChange={e => setText(e.target.value)}/>

    <button onClick={Addtodo}>+</button>
    
      {todo.map(evem =>(
        <ol>
          <h1>{evem}</h1>
        </ol>
      ))}
    </div> */}

    <div>
      <input type='text'
      placeholder='поиск'
      value={kg}
      onChange={e=> setKg(e.target.value)}/>

      <button onClick={enter}>++</button>

      {togo.map(syncho =>(
        <h2>{syncho}</h2>
      ))}
    </div>



      
      {/* {massiv.map (evem =>(
        <h1>{evem.name}
        {evem.age}
        {evem.adres}</h1>
      ))} */}
    </div>
  );
}

export default App;
