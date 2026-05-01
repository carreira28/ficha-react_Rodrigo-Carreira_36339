import { useParams, Link } from 'react-router-dom';

const estudantes = [
  { id: 1, nome: "Ana Costa", curso: "Eng. Informática", ano: 1, email: "ana@uni.pt" },
  { id: 2, nome: "Bruno Silva", curso: "Eng. Informática", ano: 1, email: "bruno@uni.pt" },
  { id: 3, nome: "Carla Mendes", curso: "Ciências da Computação", ano: 2, email: "carla@uni.pt" },
];

export default function PerfilEstudante() {
  const { id } = useParams();

  const estudante = estudantes.find(e => e.id === Number(id));

  if (!estudante) {
    return (
      <main style={{ padding: '24px' }}>
        <p>Estudante não encontrado.</p>
        <Link to="/estudantes">Voltar à lista</Link>
      </main>
    );
  }

  return (
    <main style={{ padding: '24px' }}>
    <h1>Perfil de {estudante.nome}</h1>
    <br></br>
        <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        justifyContent: 'center', 
        gap: '20px', 
        marginTop: '20px' 
      }}>
      <div style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px', maxWidth: '400px' }}>
        <p><strong>Curso:</strong> {estudante.curso}</p>
        <p><strong>Ano:</strong> {estudante.ano}º ano</p>
        <p><strong>Email:</strong> {estudante.email}</p>
      </div>
      </div>
      <div style={{ marginTop: '20px' }}>
        <Link to="/estudantes" style={{ color: '#ffffff', textDecoration: 'underline' }}>
         Voltar
        </Link>
      </div>
    </main>
  );
}
