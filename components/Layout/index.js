function Layout({ children }) {
  return (
    <div className='page-content bg-white' id='top'>
      <div
        className='banner-three bg-primary'
        style={{
          backgroundImage:
            'url(/images/background/bg-jama.jpg), url(/images/background/bg6.png)',
        }}
      >
        <div className='container'>
          <div className='banner-inner'>
            <div className='row align-items-center'>
              <div className='col-md-6'>
                <div className='banner-content text-white'>{children}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
