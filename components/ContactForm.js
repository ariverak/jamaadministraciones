import React from 'react';
import Title from './Title';

const ContactForm = () => {
  return (
    <div className='content-inner'>
      <div className='container'>
        <Title>Tienes Preguntas?</Title>
        <div className='row justify-content-center align-items-center'>
          <div
            className='col-xl-6 m-b30 wow fadeInRight'
            data-wow-duration='2s'
            data-wow-delay='0.4s'
          >
            <form
              className='dlab-form dzForm mt-4'
              method='POST'
              action='script/contact.php'
            >
              <div className='dzFormMsg'></div>
              <div className='row'>
                <div className='col-sm-6'>
                  <div className='input-group'>
                    <input
                      name='dzName'
                      required
                      type='text'
                      className='form-control'
                      placeholder='Nombre'
                    />
                  </div>
                </div>
                <div className='col-sm-6'>
                  <div className='input-group'>
                    <input
                      name='dzOther[phone]'
                      required
                      type='text'
                      className='form-control'
                      placeholder='Teléfono'
                    />
                  </div>
                </div>
                <div className='col-sm-12'>
                  <div className='input-group'>
                    <input
                      name='dzEmail'
                      required
                      type='text'
                      className='form-control'
                      placeholder='Email'
                    />
                  </div>
                </div>
                <div className='col-sm-6'>
                  <div className='input-group'>
                    <input
                      name='dzName'
                      required
                      type='text'
                      className='form-control'
                      placeholder='Ciudad'
                    />
                  </div>
                </div>
                <div className='col-sm-6'>
                  <div className='input-group'>
                    <input
                      name='dzOther[phone]'
                      required
                      type='text'
                      className='form-control'
                      placeholder='Dirección'
                    />
                  </div>
                </div>
                <div className='col-sm-12'>
                  <div className='input-group'>
                    <textarea
                      name='dzMessage'
                      required
                      className='form-control'
                      placeholder='Mensaje'
                    ></textarea>
                  </div>
                </div>
                <div className='col-sm-12 m-2'>
                  <button
                    name='submit'
                    type='submit'
                    value='Submit'
                    style={{ marginLeft: 'auto' }}
                    className='btn btn-corner gradient btn-primary'
                  >
                    Enviar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
