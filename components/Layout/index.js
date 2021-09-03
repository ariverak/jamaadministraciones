import Footer from '../Footer';
import Header from '../Header';

function Layout({ children }) {
  return (
    <>
      <Header />
      <div className='page-content bg-white' id='top'>
        {children}
      </div>
      <Footer />
    </>
  );
}

export default Layout;
