import Link from 'next/link';
import Layout from '../../components/Layout';
import Header from '../../components/Header';

function Home() {
  return (
    <>
      <Header />
      <Layout withBackground>
        <div className='row align-items-center'>
          <div className='col-md-6'>
            <div className='banner-content text-white'>
              <h6
                data-wow-delay='0.5s'
                data-wow-duration='3s'
                className='wow fadeInUp sub-title text-yellow'
              >
                Poseemos una experiencia de más de doce años
              </h6>
              <h1
                data-wow-delay='1s'
                data-wow-duration='3s'
                className='wow fadeInUp m-b20'
              >
                Administramos edificios y condominios
              </h1>
              <p
                data-wow-delay='1.5s'
                data-wow-duration='3s'
                className='wow fadeInUp m-b30'
              >
                Compromiso, seriedad y tranquilidad para ti y tu familia
              </p>
              <Link href='about-us-3'>
                <a
                  data-wow-delay='2s'
                  data-wow-duration='3s'
                  className='wow fadeInUp  btn btn-corner gradient btn-primary'
                >
                  Learn More
                </a>
              </Link>
            </div>
          </div>
          <div className='col-md-6'>
            <div
              className='dz-media wow fadeIn'
              data-wow-delay='1s'
              data-wow-duration='3s'
            >
              <img
                src='images/main-slider/slider3/pic1.png'
                className='move-1'
                alt=''
              />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Home;
