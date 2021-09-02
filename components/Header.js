import Link from 'next/link';
import { useState } from 'react';

function Header() {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState('home');
  return (
    <>
      {/* <!-- Header --> */}
      <header className='site-header header-transparent mo-left'>
        {/* <!-- Main Header --> */}
        <div className='sticky-header main-bar-wraper navbar-expand-lg'>
          <div className='main-bar clearfix '>
            <div className='container clearfix'>
              {/* <!-- Website Logo --> */}
              <div className='logo-header mostion logo-dark'>
                <Link href='/'>
                  <a>
                    <img
                      className='custom-logo-white'
                      src='images/logo-white.png'
                      alt=''
                    />
                    <img
                      className='custom-logo'
                      src='images/logo-3.png'
                      alt=''
                    />
                  </a>
                </Link>
              </div>
              {/* <!-- Nav Toggle Button --> */}
              <button
                className={`navbar-toggler collapsed navicon justify-content-end ${
                  show ? 'open' : ''
                }`}
                onClick={() => setShow(!show)}
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
              <div
                className={`header-nav navbar-collapse collapse justify-content-end ${
                  show ? 'show' : ''
                }`}
                id='navbarNavDropdown'
              >
                <div className='logo-header'>
                  <Link href='/'>
                    <a>
                      <img src='images/logo-3.png' alt='' />
                    </a>
                  </Link>
                </div>
                <ul className='nav navbar-nav navbar'>
                  <li>
                    <Link href='/'>
                      <a>Quienes Somos</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/'>
                      <a>Nuestra Misión</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/'>
                      <a>Servicios</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/'>
                      <a>Contacto</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Main Header End --> */}
      </header>
      {/* <!-- Header End --> */}
    </>
  );
}

export default Header;
