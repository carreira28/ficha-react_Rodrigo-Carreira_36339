import { Link } from 'react-router-dom';

function CartaoUtilizador({ id, nome, curso, ano, destaque }) {
  return (
    <div className={`cartao ${destaque ? 'cartao-destaque' : ''}`}
        style={{ 
           border: '1px solid #ccc', 
           padding: '16px', 
           borderRadius: '8px', 
           width: '250px',
           textAlign: 'center'
         }}>
      {destaque && <span className="badge">Caloiro</span>}
      <h2>{nome}</h2>
      <p>{curso}</p>
      <p>Ano: {ano}</p>
      <Link to={`/estudantes/${id}`} style={{ color: '#61DAFB' }}>
        Ver Perfil Detalhado
      </Link>
    </div>
  );
}

const estudantes = [
  { id: 1, nome: "Ana Costa", curso: "Eng. Informática", ano: 1 },
  { id: 2, nome: "Bruno Silva", curso: "Eng. Informática", ano: 1 },
  { id: 3, nome: "Carla Mendes", curso: "Ciências da Computação", ano: 2 },
];

function ListaEstudantes() {
  return (
    <div>
      <h2>Turma de Programação Web</h2>
      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        justifyContent: 'center', 
        gap: '20px', 
        marginTop: '20px' 
      }}>
      {estudantes.map((estudante) => (
        <CartaoUtilizador 
          key={estudante.id} 
          id={estudante.id}
          nome={estudante.nome} 
          curso={estudante.curso} 
          ano={estudante.ano}
          destaque={estudante.ano === 1} 
        />
      ))}
      </div>
    </div>
  );
}

export default function Estudantes() {
  return (
    <main style={{ padding: '24px', textAlign: 'center'}}>
      <h1>Estudantes:</h1>
      <ListaEstudantes/>
    </main>
  );
}
