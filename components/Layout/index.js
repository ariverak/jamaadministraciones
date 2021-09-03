import Footer from '../Footer';
import Header from '../Header';

function Layout({ transparentHeader, children }) {
  return (
    <>
      <Header transparent={transparentHeader} />
      <div className='page-content bg-white' id='top'>
        {children}
      </div>
      <Footer />
    </>
  );
}

export default Layout;
