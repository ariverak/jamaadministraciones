import Header from '../../components/Header';
import Layout from '../../components/Layout';
import Slider from '../../components/Slider';

function Home() {
  return (
    <>
      <Header />
      <Layout withBackground>
        <Slider />
      </Layout>
    </>
  );
}

export default Home;
