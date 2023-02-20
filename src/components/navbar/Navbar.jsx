import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {
  return(
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Tienda Coder</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
            <ul className="nav">
              <li className="nav-item">
                <Link className="txt-navbar" aria-current="page" to='/'>Inicio</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="txt-navbar" to='/' role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Categorias
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to='/Ropa'>Ropa</Link></li>
                  <li><Link className="dropdown-item" to='/Zapatos'>Zapatos</Link></li>
                  <li><Link className="dropdown-item" to='/Accesorios'>Accesorios</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                  <Link className="txt-navbar" to='/Carrito'>Carrito <i className="bi bi-cart"> 5</i></Link>
              </li>
            </ul>
          </div>
      </div>
    </nav>
  )
}

export default Navbar