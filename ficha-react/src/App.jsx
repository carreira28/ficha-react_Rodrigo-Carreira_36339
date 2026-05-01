// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Estudantes from './pages/Estudantes';
import PerfilEstudante from './pages/PerfilEstudante';
export default function App() {
 return (
 <BrowserRouter>
 <Navbar />
 <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/sobre' element={<Sobre/>}/>
  <Route path='/estudantes' element={<Estudantes/>}/>
  <Route path="/estudantes/:id" element={<PerfilEstudante />}/>
 </Routes>
 </BrowserRouter>
 );
}
