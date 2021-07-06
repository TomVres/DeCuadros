import "./style.css"
import brandLogo from '../../images/logo_decuadros.png'

export const Footer = ( )=> {

   
    return (
        <footer className="container-fluid py-5">
        <div className="container">
        <div className="row">
          <div className="col-12 col-md">
          <a className="navbar-brand mt-auto" href="#"><img src={brandLogo} alt="Logo DeCuadros" /></a>
            <small className="d-block mb-3 text-muted">© 2017-2021</small>
          </div>
          <div className="col-6 col-md">
            <h5>Categorías</h5>
            <ul className="list-unstyled text-small">
              <li><a className="text-muted" href="#">Fútbol</a></li>
              <li><a className="text-muted" href="#">Cripto</a></li>
              <li><a className="text-muted" href="#">Ciencia</a></li>
              <li><a className="text-muted" href="#">Cine y televisión</a></li>
              <li><a className="text-muted" href="#">Deportes</a></li>
              <li><a className="text-muted" href="#">Otras Categorías</a></li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>Cuadros</h5>
            <ul className="list-unstyled text-small">
              <li><a className="text-muted" href="#">Marco</a></li>
              <li><a className="text-muted" href="#">Impresión</a></li>
              <li><a className="text-muted" href="#">Tamaños</a></li>
              <li><a className="text-muted" href="#">Papeles</a></li>
              <li><a className="text-muted" href="#">Cuadros Personalizados</a></li>

            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>Acerca</h5>
            <ul className="list-unstyled text-small">
              <li><a className="text-muted" href="#">Contacto</a></li>
              <li><a className="text-muted" href="#">Envios</a></li>
              <li><a className="text-muted" href="#">Compromiso de calidad</a></li>
              <li><a className="text-muted" href="#">Sobre Nosotros</a></li>
              <li><a className="text-muted" href="#">Devoluciones</a></li>

            </ul>
          </div>
          </div>
        </div>
      </footer>
      
    )

}
