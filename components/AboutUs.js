import Title from './Title';

function AboutUs() {
  return (
    <>
      {/* <!-- About Us --> */}
      <section className='content-inner mt-4'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 m-b30'>
              <div className='dz-media'>
                <img src='/images/about/img1.png' className='move-2' alt='' />
              </div>
            </div>
            <div className='col-lg-6'>
              <Title>¿Quienes Somos?</Title>
              <p>
                JAMA Administraciones SpA, nace con el propósito de dar solución
                a los Comités administrativos de edificios y Condominios, en
                todo lo relacionado al área de personal, gastos comunes,
                proveedores, controles y seguridad entre otros.
              </p>
              <p className='m-b30'>
                Poseemos una experiencia de más de doce años a cargo de los
                departamentos de Recursos Humanos y Administración. Dentro de
                RR.HH. hemos desarrollado incorporaciones, desvinculaciones,
                convenios, negociación con sindicatos, representación de la
                empresa ante la Inspección del Trabajo, desarrollo de sueldos e
                imposiciones, vacaciones, licencias médicas, etc. En lo relativo
                a Administración hemos realizado contratos con servicios de
                terceros, adquisiciones, controles, chequeos internos,
                mantenciones, etc.
              </p>
            </div>
          </div>
        </div>
        <section className='video-wraper-1'>
          <div className='content-inner bg-gray'>
            <div className='container'>
              <div className='row align-items-center'>
                <div
                  className='col-lg-6 wow fadeInLeft'
                  data-wow-duration='2s'
                  data-wow-delay='0.2s'
                >
                  <div className='section-head style-3 mb-4'>
                    <h2 className='title'>
                      Compromiso, seriedad y tranquilidad para ti y tu familia
                    </h2>
                    <div className='dlab-separator style-2 bg-primary'></div>
                  </div>
                  <p>
                    Somos una empresa dedicada al servicio de administración de
                    edificios y condominios, con fuertes valores de probidad,
                    ética y moral en la gestión general que realizamos; cuando
                    nos hacemos cargo de sus necesidades y problemas, lo hacemos
                    con efectividad y empatía. Estamos orientados en el objetivo
                    fundamental de la reducción de costos, la eficiencia
                    operativa para la mantención de la infraestructura y el
                    cuidado permanente de la plusvalía de la comunidad, nuestra
                    motivación es realizar una mejora continua de nuestros
                    servicios. Les ofrecemos a nuestros clientes una atención
                    personalizada e individualizada, con una comunicación
                    permanente en todo horario a través de diversos medios como
                    llamadas telefónicas, correos electrónicos y WhatsApp. Esto
                    con la finalidad de brindarles la sensación de seguridad y
                    tranquilidad de la que son merecedores.
                  </p>
                  <p>
                    Empleamos un buen control de flujo de ingresos y egresos,
                    planes de optimización de recursos y cobranzas organizadas,
                    todo bajo la reconocida plataforma informática COMUNIDAD
                    FELIZ, la cual permite tener un soporte de comunicación e
                    información al día.
                  </p>
                  <p>
                    En relación a la seguridad de su edificio o condominio,
                    contamos con el apoyo de la empresa LOBBYCONTROL, quienes a
                    través de su Sistema de Gestión de Emergencias disponen de
                    toda la información que necesiten los equipos de primera
                    intervención ante una eventual emergencia. Además entregan
                    un acompañamiento constante, elaborando el Plan de
                    Emergencias y Evacuación, realizando en conjunto
                    capacitaciones y sugerencias de mejoras en sus
                    instalaciones, así les mantenemos seguros y actualizados,
                    ante una posible emergencia
                  </p>
                </div>
                <div
                  className='col-lg-6 wow fadeInRight'
                  data-wow-duration='2s'
                  data-wow-delay='0.4s'
                >
                  <div className='video-bx style-2'>
                    <img src='/images/rascacielos.jpg' alt='' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default AboutUs;
