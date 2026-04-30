function CartaoUtilizador({ nome, curso, ano }) {
 return (
 <div className="cartao">
 <h2>{nome}</h2>
 <p>{curso}</p>
 <p>{ano}</p>
 </div>
  );
}
export default function App() {
 return (
 <div>
 {CartaoUtilizador}
 {<CartaoUtilizador nome="Rodrigo Carreira" curso="teste" ano={1} />}
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
 <h1>Turma de Programação Web</h1>
 {estudantes.map()  }
 {/* IMPORTANTE: Não te esqueças da prop key={estudante.id} */}
 </div>
 );
}
