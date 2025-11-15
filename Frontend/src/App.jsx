 
import {Routes,Route} from 'react-router-dom'
import Home from '../pages/Home.jsx'
import Completed from '../pages/Completed.jsx'
import Personaltask from '../pages/Personaltask.jsx'
import Friendtask from '../pages/Friendtask.jsx'
 
import './App.css'

function App() {
  

  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Company-tasks" element={<Completed/>}/>
      <Route path="/Personal-tasks" element={<Personaltask/>}/>
       <Route path="/Friend-tasks" element={<Friendtask/>}/>
    </Routes>
      
    </>
  )
}

export default App
