import { Routes, Route } from 'react-router-dom';
import PerfilUsuario from './Views/PerfilUsuario/PerfilUsuario';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/perfilUsuario' element={<PerfilUsuario />} />
      </Routes>
      {/*renderizo PerfilUsuario para ver si funciona correctamente*/} 
      {/*ya lo rendericé, tambien ahí ya está para que cada uno pueda renderizar sus componentes. att: Sam*/}
    </div>
  )
}

export default App