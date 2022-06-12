import { useState } from 'react'
import './App.css'
import HelloWorld from './HelloWorld'
import HelloPerson from './HelloPerson';

function App() {

  const [nome, setNome] = useState("");

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
    <div>
      
      <HelloWorld />
      { pessoas.map( (pessoa, key) => {
      return <HelloPerson 
      key={key}
      nome={pessoa.nome} 
      user={pessoa.user} 
      foto={pessoa.foto}
      />
      
      } ) }

<a href="#" onclick="myFunction();">Mostrar mais</a>
    </div>
  )
}

export default App