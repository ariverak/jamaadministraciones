import Layout from '../../components/Layout';

function Mision() {
  return (
    <>
      <Layout>
        <div className='content-inner'>
          <div className='container'>
            <div className='section-head style-3 text-center'>
              <h2 className='title'>Nuestra misión</h2>
              <div className='dlab-separator style-2 bg-primary'></div>
            </div>
            <div className='blockquote style-2'>
              <h4 className='m-b30'>Misión</h4>
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
                generando propuestas personalizadas convirtiendo tu comunidad de
                lo tradicional a lo digital para transparentar y mejorar todos
                los procesos internos.
              </p>
              <p
                className='blockquote-content'
                style={{ textAlign: 'left', marginBottom: 10 }}
              >
                Pero nuestra misión no se limita sólo a eso, sino que también
                tenemos como norte la optimización y mejora de esas
                instalaciones con la finalidad de mantener el valor de las
                propiedades en el mercado inmobiliario e incluso incrementarlo.
              </p>
            </div>
            <div className='blockquote style-2'>
              <h4 className='m-b30'>Visión</h4>
              <p
                className='blockquote-content'
                style={{ textAlign: 'left', marginBottom: 10 }}
              >
                Velar por el correcto uso y buen funcionamiento de las
                instalaciones de los edificios y condominios bajo nuestra
                administración. Queremos ser reconocidos como una empresa líder,
                confiable, moderna, segura y dedicada al servicio de las
                comunidades
              </p>
            </div>
            <div className='blockquote style-2'>
              <h4 className='m-b30'>Valores</h4>
              <p
                className='blockquote-content'
                style={{ textAlign: 'left', marginBottom: 10 }}
              >
                Honestidad, transparencia, integridad, confianza y sentido de
                pertenencia, para administrar cada inmueble como si fuera
                propio. Buscamos generar sólidas relaciones de trabajo con
                nuestros clientes, basadas en la confianza y el respeto, a
                través de una gestión profesional, ética y moral.
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Mision;
