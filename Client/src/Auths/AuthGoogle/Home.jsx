import React from "react";

const Home = () => {

    const handleClick = () => {
        localStorage.clear()
        window.location.reload()
    };

    return (
        <div>
            <h1>Home page</h1>
            <button onClick={handleClick}>Logout</button>
            <h1>ES UN HOME SIMULADO, CAMBIARLO POR EL VERDADERO</h1>
        </div>
    );
}

export default Home;