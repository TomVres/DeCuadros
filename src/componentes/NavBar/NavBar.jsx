import "./style.css"
import brandLogo from '../../images/logo_decuadros.png'
import { CartWidget } from '../CartWidget/CartWidget.jsx'
import {Link} from "react-router-dom"
export const NavBar = () => {

return (
    <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
        <a className="navbar-brand" href="#"><img src={brandLogo} alt="Logo DeCuadros" /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto mr-5">
            <li className="nav-item active">
              <a className="nav-link"><Link to="/">Inicio</Link></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Productos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Nosotros</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" ><Link to="/contacto">Contacto</Link></a>
            </li>
          </ul>
          <form className="form-inline">
            <input className="form-control mr-sm-2" type="search" placeholder="Ingrese su busqueda" aria-label="Buscar" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
          </form>
          <CartWidget/>
        
        </div>
        </div>
      </nav>
)

}