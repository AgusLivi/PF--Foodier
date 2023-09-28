import Style from './Landing.module.css'
import { Link } from 'react-router-dom'
import img from '../../assets/tomate.png'
import Logo from '../../assets/logoFoodier.png'
const Landing = () => {
    return(
        <div className={Style.landing}>
            <div className={Style.navLanding}>
                <div>
                    <img src={Logo}/>
                </div>
            </div>
            <div className={Style.container}>
                <img src={img}/>
                <div className={Style.containerH1}>
                    <div><p className={Style.p1}>COMBATAMOS JUNTOS EL </p></div>
                    <div><p className={Style.p2}>DESPERDICIO DE</p></div>
                    <div><p className={Style.p3}> ALIMENTOS</p></div>
                </div>
                <div className={Style.pDescripcion}>
                <p>¿TIENES HAMBRE? CON LA</p>
                <p>APLICACIÓN <strong>FOODIER</strong> PUEDES</p>
                <p> SALVAR COMIDA DELICIOSA DE</p>
                <p> RESTAURANTES Y</p>
                <p> ESTABLECIMIENTOS DE TU ZONA </p>
                <p> POR MUY POCO DINERO.</p>
              
                </div>
            </div>
            <div className={Style.FooterLanding}>
                <div>
                    <Link to={'/login'}>
                        <button>Ingresar</button>
                    </Link>
                </div>
            </div>
        </div> 
    )
}

export default Landing;