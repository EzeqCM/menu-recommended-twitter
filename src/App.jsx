import './App.css'
import HelloWorld from './HelloWorld'
import HelloPerson from './HelloPerson'
import Botao from './Botao'
import VerMais from './VerMais';

function App() {
  
  const pessoas = [
    {
      foto: "https://pbs.twimg.com/profile_images/1082744382585856001/rH_k3PtQ_400x400.jpg",
      nome: "SpaceX",
      user: "@SpaceX",
    },
    {
      foto: "https://pbs.twimg.com/profile_images/1321163587679784960/0ZxKlEKB_400x400.jpg",
      nome: "NASA",
      user: "@NASA",
    },
    {
      foto: "https://pbs.twimg.com/profile_images/669103856106668033/UF3cgUk4_400x400.jpg",
      nome: "Jeff Bezos",
      user: "@JeffBezos",
    }

    
  ];

  return (
    <div className='Fundo'>
      
    <HelloWorld/>
    
    { pessoas.map ( (perfil, key) => {
          return (
            <div className='Divisao'><HelloPerson
            key={key}
            img={perfil.foto}
            titulo={perfil.nome}
            url_perfil={perfil.user}
          />
          <Botao/>  
          </div>
          )
    })}
       <VerMais/>
    </div>
  )
}

export default App