//import style from './landing.module.css'
import { Link } from 'react-router-dom'

const landing = () => {
    return(
        <div>
                <h1>COMBATAMOS JUNTOS EL desperdicio de alimentos</h1>
                <p>¿Tienes hambre? Con la aplicación FOODIER puedes salvar comida deliciosa de restaurantes y establecimientos de tu zona por muy poco dinero.</p>
                <Link to={'/Autentication'}><button>Identificate!</button></Link>
        </div> 
    )
}

export default landing;