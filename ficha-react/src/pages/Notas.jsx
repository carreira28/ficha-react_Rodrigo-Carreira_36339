import { useState } from 'react';
function FormularioNota({ onAdicionarNota }) {
 const [estudante, setEstudante] = useState('');
 const [nota, setNota] = useState('');
 function handleSubmit(e) {
 e.preventDefault();
 if(!estudante.trim() || nota === ''){
    alert("Preenche todos os campos.");
    return
 }
 const valorNota = Number(nota);
 if(valorNota < 0 || valorNota > 20){
    alert("A nota deve estar entre 0 e 20.");
    return
 }

 onAdicionarNota({ estudante, nota: Number(nota) });
setEstudante("");
setNota("");
 }
 return (
 <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '8px',
marginBottom: '16px' }}>
 <input value={estudante} onChange={e => setEstudante(e.target.value)}
 placeholder="Nome do estudante" style={{ padding: '8px', flex: 2 }} />
 <input value={nota} onChange={e => setNota(e.target.value)}
 type="number" min="0" max="20" placeholder="Nota (0-20)" style={{
padding: '8px', flex: 1 }} />
 <button type="submit" style={{ padding: '8px 16px', background:
'#1E8449', color: 'white', border: 'none', borderRadius: '4px' }}>
 Adicionar
 </button>
 </form>
 );
}

function TabelaNotas({ notas }) {
const getClassificacao = (n) => {
    if (n >= 18) return { texto: 'Excelente', cor: '#27AE60' };
    if (n >= 14) return { texto: 'Bom', cor: '#2ECC71' };
    if (n >= 10) return { texto: 'Suficiente', cor: '#F1C40F' };
    return { texto: 'Insuficiente', cor: '#E74C3C' };
  };
 return (
 <table style={{ width: '100%', borderCollapse: 'collapse' }}>
 <thead>
 <tr style={{ background: '#1E3A5F', color: 'white' }}>
 <th style={{ padding: '10px', textAlign: 'left' }}>Estudante</th>
 <th style={{ padding: '10px', textAlign: 'center' }}>Nota</th>
 <th style={{ padding: '10px', textAlign: 'center'
}}>Classificação</th>
 </tr>
 </thead>
 <tbody>
 {notas.map((item, index) => {
          const info = getClassificacao(item.nota);
          return (
            <tr key={index} style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '10px' }}>{item.estudante}</td>
              <td style={{ padding: '10px', textAlign: 'center' }}>{item.nota}</td>
              <td style={{ padding: '10px', textAlign: 'center', color: info.cor, fontWeight: 'bold' }}>
                {info.texto}
              </td>
            </tr>
          );
        })}
 </tbody>
 </table>
 );
}
export default function Notas() {
 const [notas, setNotas] = useState([]);

 function adicionarNota(novaNota) {
    setNotas([...notas, novaNota])
 }
 const media = notas.length > 0 
    ? (notas.reduce((acc, curr) => acc + curr.nota, 0) / notas.length).toFixed(2) 
    : 0;
  return (
    <main style={{ padding: '24px', fontFamily: 'sans-serif' }}>
      <h1>Gestão de Notas</h1>
      <FormularioNota onAdicionarNota={adicionarNota} />
      <TabelaNotas notas={notas} />
      
      {notas.length > 0 && (
        <div style={{ marginTop: '20px', fontSize: '1.2rem', fontWeight: 'bold' }}>
          Média Geral: <span style={{ color: media >= 10 ? '#27AE60' : '#E74C3C' }}>{media}</span>
        </div>
      )}
    </main>
  );
}