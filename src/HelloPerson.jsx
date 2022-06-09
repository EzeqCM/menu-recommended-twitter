import'./HelloPerson.css';

function HelloPerson({name, idade, foto, caracteristica }) {
    
    return(
        <div className="container">

            {name &&
             <p className="desc">
                 Olá {name} - {idade} - <span className="info">{caracteristica}</span>
            </p>

            }
            
            <img className='img'
            src={foto} 
            alt={name}
            width="120px"
            height="120px"
            />
            
        </div>
    );
}
export default HelloPerson