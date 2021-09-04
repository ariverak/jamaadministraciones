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
              <div className='section-head style-3 mb-4'>
                <h2 className='title'>¿Quienes Somos?</h2>
                <div className='dlab-separator style-2 bg-primary'></div>
              </div>
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
      </section>
    </>
  );
}

export default AboutUs;
