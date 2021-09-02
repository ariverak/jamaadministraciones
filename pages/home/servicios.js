import Slider3 from '../../element/slider-3';
import Header from '../../components/Header';

function Home() {
  return (
    <>
      <Header />
      <div className='page-content bg-white' id='top'>
        <Slider3 />
      </div>
    </>
  );
}

export default Home;
