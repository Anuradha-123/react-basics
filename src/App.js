import React from 'react'
import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {
      const [tasks, setTasks] = useState([

{
  id:1,
  text:'Doctors Appointment',
  day:'Feb 5th at 3:30PM',
  reminder:true,
},
{
  id:2,
  text:'Meeting at school',
  day:'Feb 6th at 1:30PM',
  reminder:true,
},
{
  id:3,
  text:'Foodshopping',
  day:'Feb 7th at 2:30PM',
  reminder:false,
},
])

//delte Task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}


  return (
    <div className="container">
      <Header />
       <Tasks  tasks={tasks} onDelete=
       {deleteTask}/>
    </div>
  );
}

// class App extends React.Component{
//   render(){
//     return<h1>Hello from a class</h1>
//   }
// }
export default App;
