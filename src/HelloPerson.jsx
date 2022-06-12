import './HelloPerson.css'
import Button from './Button';

function HelloPerson({nome, user, foto }){
    return(
        
        <div className="container">
            
            <p className="perfil">
            
            <img
           className='img' 
           src={foto} 
           alt={nome}
           width ="40px"
           height="40px"
        />
             {nome}
             <p>
             {user} 
             </p>    
             <Button />
             </p>
             
             
        </div>
    );
}
export default HelloPerson