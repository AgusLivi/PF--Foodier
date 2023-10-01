import Style from "./Favoritos.module.css"
const Favoritos = () => {
    return (
        <div className={Style.container}>
                <div className={Style.fav}>
                    <img src="https://img.freepik.com/vector-premium/logo-carne-fresca_139869-393.jpg?w=2000" />
                    <h3>Asadero Henry</h3>
                </div>
                <div className={Style.fav}>
                    <img src="https://img.freepik.com/premium-vector/pizza-logo-design-vector-template_260747-62.jpg?w=740" />
                    <h3>Pizzeria Agus</h3>
                </div>
                <div className={Style.fav}>
                    <img src="https://static.vecteezy.com/system/resources/previews/017/032/871/non_2x/burger-logo-illustration-fast-food-logo-emblem-label-burger-vintage-design-business-burger-vector.jpg" />
                    <h3>Hamburguesas de Fer</h3>
                </div>
                <div className={Style.fav}>
                    <img src="https://us.123rf.com/450wm/aryabm/aryabm2304/aryabm230400515/203874376-logotipo-de-sushi-dise%C3%B1o-de-comida-r%C3%A1pida-japonesa-s%C3%ADmbolo-de-plantilla-de-icono-vectorial.jpg?ver=6" />
                    <h3>Sushi Aison</h3>
                </div>
                <div  className={Style.fav}>
                    <img src="https://c8.alamy.com/comp/2BHPMCP/fork-and-pasta-minimal-logo-pasta-symbol-italian-food-menu-element-with-spaghetti-vector-graphic-flat-symbol-2BHPMCP.jpg" />
                    <h3>Pasta Sam</h3>
                </div>
                <div className={Style.fav}>
                    <img src="https://static.vecteezy.com/system/resources/previews/017/032/871/non_2x/burger-logo-illustration-fast-food-logo-emblem-label-burger-vintage-design-business-burger-vector.jpg" />
                    <h3>Hamburguesas de Fer</h3>
                </div>
        </div>
   
    )
};

export default Favoritos;