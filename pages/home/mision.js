import Layout from '../../components/Layout';
import Title from '../../components/Title';

function Mision() {
  return (
    <>
      <Layout>
        <section className='content-inner mt-4'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-6 m-b30'>
                <div className='dz-media'>
                  <img src='/images/about/img3.png' className='move-2' alt='' />
                </div>
              </div>
              <div className='col-lg-6'>
                <Title>Nuestra misión</Title>

                <p
                  className='blockquote-content'
                  style={{ textAlign: 'left', marginBottom: 10 }}
                >
                  Administrar con total transparencia, honestidad, oportunidad y
                  seguridad condominios e inmuebles, otorgando certidumbre y
                  tranquilidad que garanticen a nuestros clientes una sana
                  convivencia dentro de sus propiedades.
                </p>
                <p
                  className='blockquote-content'
                  style={{ textAlign: 'left', marginBottom: 10 }}
                >
                  Nos adaptamos a las necesidades de cada edificio y comunidad
                  generando propuestas personalizadas convirtiendo tu comunidad
                  de lo tradicional a lo digital para transparentar y mejorar
                  todos los procesos internos.
                </p>
                <p
                  className='blockquote-content'
                  style={{ textAlign: 'left', marginBottom: 10 }}
                >
                  Pero nuestra misión no se limita sólo a eso, sino que también
                  tenemos como norte la optimización y mejora de esas
                  instalaciones con la finalidad de mantener el valor de las
                  propiedades en el mercado inmobiliario e incluso
                  incrementarlo.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className='content-inner bg-gray'>
          {/* <div className='content-inner bg-gray'> */}
          <div className='container'>
            <div className='row align-items-center'>
              <div
                className='col-lg-6 wow fadeInLeft mb-4'
                data-wow-duration='2s'
                data-wow-delay='0.2s'
              >
                <div className='section-head style-3 mb-4'>
                  <h2 className='title'>Visión</h2>
                  <div className='dlab-separator style-2 bg-primary'></div>
                </div>

                <p>
                  Velar por el correcto uso y buen funcionamiento de las
                  instalaciones de los edificios y condominios bajo nuestra
                  administración. Queremos ser reconocidos como una empresa
                  líder, confiable, moderna, segura y dedicada al servicio de
                  las comunidades
                </p>
              </div>
              <div
                className='col-lg-6 wow fadeInRight'
                data-wow-duration='2s'
                data-wow-delay='0.4s'
              >
                <div className='video-bx style-3'>
                  <img src='/images/cleaning.jpg' alt='' />
                </div>
              </div>
            </div>
          </div>
          {/* </div> */}
        </section>

        <section className='content-inner mb-4'>
          <div className='container'>
            <div className='row align-items-center'>
              <div
                className='col-lg-6 wow fadeInRight desktop-only'
                data-wow-duration='2s'
                data-wow-delay='0.4s'
              >
                <div className='video-bx style-3 mb-4'>
                  <img src='/images/hands.jpg' alt='' />
                </div>
              </div>
              <div
                className='col-lg-6 wow fadeInLeft'
                data-wow-duration='2s'
                data-wow-delay='0.2s'
              >
                <div className='section-head style-3 mb-4'>
                  <h2 className='title'>Valores</h2>
                  <div className='dlab-separator style-2 bg-primary'></div>
                </div>

                <p>
                  Honestidad, transparencia, integridad, confianza y sentido de
                  pertenencia, para administrar cada inmueble como si fuera
                  propio. Buscamos generar sólidas relaciones de trabajo con
                  nuestros clientes, basadas en la confianza y el respeto, a
                  través de una gestión profesional, ética y moral.
                </p>
              </div>
              <div
                className='col-lg-6 wow fadeInRight mobile-only'
                data-wow-duration='2s'
                data-wow-delay='0.4s'
              >
                <div className='video-bx style-3 mb-4'>
                  <img src='/images/hands.jpg' alt='' />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* end new */}
      </Layout>
    </>
  );
}

export default Mision;
