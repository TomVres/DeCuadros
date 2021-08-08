import "./style.css"
import brandLogo from '../../images/logo_decuadros.png'
import { CartWidget } from '../CartWidget/CartWidget.jsx'
import { NavLink, Link } from "react-router-dom"
import { useState, useEffect } from "react";
import { getCategories } from "../../database/api-json";

export function NavBar() {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const waitForData = async () => {
      let _categories = await getCategories();
      setCategories(_categories);
    }

    waitForData()

  }, [])

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img src={brandLogo} alt="Logo DeCuadros" />
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded={false} aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto mr-5">
            <li className="nav-item">
              <NavLink to="/" className="nav-link" activeClassName="active">Inicio </NavLink>
            </li>
            <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Categorías
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <NavLink to={"/categoria/futbol"}><a class="dropdown-item" href="#">Fútbol</a></NavLink>
          <NavLink to={"/categoria/naturaleza"}><a class="dropdown-item" href="#">Naturaleza</a></NavLink>
          <NavLink to={"/categoria/deportes"}><a class="dropdown-item" href="#">Deportes</a></NavLink>
          <NavLink to={"/categoria/autos"}><a class="dropdown-item" href="#">Autos</a></NavLink>
          <NavLink to={"/categoria/cine-tv"}><a class="dropdown-item" href="#">Cine y Televisión</a></NavLink>

        </div>
      </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link" activeClassName="active">Cuadros </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/contact" className="nav-link" activeClassName="active">Acerca </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/contact" className="nav-link" activeClassName="active">Contacto </NavLink>
            </li>
          </ul>

          

          <CartWidget />

        </div>
      </div>
    </nav>
  )

}