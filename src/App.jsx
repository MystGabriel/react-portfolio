import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Contact from './pages/Contact'
import Portfolio  from './pages/Portfolio'
import Home from './pages/Home'
import Header from './components/Header'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App