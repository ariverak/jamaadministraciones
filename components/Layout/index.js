import cn from 'classnames';

function Layout({ withBackground, children }) {
  return (
    <div className='page-content bg-white' id='top'>
      <div
        className={cn('banner-three bg-primary', {
          'banner-three-bg': withBackground,
        })}
      >
        <div className='container'>
          <div className='banner-inner'>{children}</div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
