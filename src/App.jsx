
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Aiml from './components/Aiml'
import Cloud from './components/Cloud'
import Cyber from './components/Cyber'
import Datascience from './components/Datascience'
import Blockchain from './components/Blockchain'
import Navbar from './components/Navbar'



function App() {
  

  return (
    <>
    <Navbar/>
    <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/aiml' element={<Aiml />}/>
          <Route path='/blockchain' element={<Blockchain />}/>
          <Route path='/cloud' element={<Cloud />}/>
          <Route path='/cyber' element={<Cyber />}/>
          <Route path='/datascience' element={<Datascience />}/>
    </Routes>
    </>
   
  )
}

export default App
