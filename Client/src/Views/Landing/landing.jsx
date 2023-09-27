//import style from './landing.module.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/tomate.png'

const landing = () => {
    return(
        <div>
                <img src={logo}/>
                <h1>COMBATAMOS JUNTOS EL desperdicio de alimentos</h1>
                <p>¿Tienes hambre? Con la aplicación FOODIER puedes salvar comida deliciosa de restaurantes y establecimientos de tu zona por muy poco dinero.</p>
                <Link to={'/login'}><button>Identificate!</button></Link>
        </div> 
    )
}

export default landing;