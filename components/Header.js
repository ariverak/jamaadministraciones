import Link from 'next/link';
import { useState } from 'react';

function Header({ transparent }) {
  const [show, setShow] = useState(false);
  return (
    <>
      {/* <!-- Header --> */}
      <header className='site-header header-transparent mo-left'>
        {/* <!-- Main Header --> */}
        <div
          className={`sticky-header main-bar-wraper navbar-expand-lg ${
            !transparent && 'is-fixed'
          }`}
        >
          <div className='main-bar clearfix '>
            <div className='container clearfix'>
              {/* <!-- Website Logo --> */}
              <div className='logo-header mostion logo-dark'>
                <Link href='/home'>
                  <a>
                    <img
                      className='custom-logo-white'
                      src={
                        transparent
                          ? '/images/logo-white.png'
                          : '/images/logo.png'
                      }
                      alt=''
                    />
                    <img
                      className='custom-logo'
                      src='/images/logo.png'
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
              {/* <!-- Extra Nav --> */}
              <div className='extra-nav'>
                <div className='extra-cell'>
                  <Link href='/home/contactanos'>
                    <a className='btn btn-corner gradient btn-primary'>
                      <i className='fa fa-angle-right m-r10'></i>Contactanos
                    </a>
                  </Link>
                </div>
              </div>
              <div
                className={`header-nav navbar-collapse collapse justify-content-end ${
                  show ? 'show' : ''
                }`}
                id='navbarNavDropdown'
              >
                <div className='logo-header'>
                  <Link href='/home'>
                    <a>
                      <img src='/images/logo.png' alt='' />
                    </a>
                  </Link>
                </div>
                <ul className='nav navbar-nav navbar'>
                  <li>
                    <Link href='/home/nosotros'>
                      <a>Quienes Somos</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/home/mision'>
                      <a>Nuestra Misión</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/home/servicios'>
                      <a>Servicios</a>
                    </Link>
                  </li>
                  <li className='d-block d-sm-none'>
                    <Link href='/contactanos'>
                      <a>Contactanos</a>
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
