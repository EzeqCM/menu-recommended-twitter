import { useState } from "react";

function Button() {
    const [contador, setContador] = useState(0)
    function visitar() {
        
        setContador(contador+1);
    }
    
    return(
        <div>
            <button onClick={visitar}>Clicar</button>  
            <p>Contador de visitas: {contador}</p> 
            <button onClick={()=>{setContador(0)}}>Zerar</button>  
        </div>
    );
}
export default Button