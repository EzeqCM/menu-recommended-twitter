import './HelloPerson.css'

function HelloPerson({img, titulo, url_perfil}){
    return(
        
        <div className='geralperfil'>

            <div className='imgperfil'>

                <img src= {img} alt='' />

            </div>
            <div className='infodoperfil'>

                <a className='nome'>{titulo}</a>
                <a className='arroba_user'>{url_perfil}</a>

            </div>
        </div>
    );
}
export default HelloPerson