import {Link } from 'react-router-dom';
export default function ERRO() {
 return (
 <main style={{ padding: '24px' }}>
 <h1 style={{color: 'red'}}><strong >ERRO</strong> 404</h1>
 <p>Rota não encontrada</p>

 <br></br>
 <Link to={"/"} style={{color: 'white'}}>Voltar</Link>
 </main>
 )}