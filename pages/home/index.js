import Slider3 from '../../element/slider-3';
import Header3 from '../../layout/header-3';

function Home() {
  return (
    <>
      <Header3 />
      <div className='page-content bg-white' id='top'>
        <Slider3 />
      </div>
    </>
  );
}

export default Home;
