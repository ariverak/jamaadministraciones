import React from 'react';
import Title from './Title';
import { useForm } from 'react-hook-form';
import cn from 'classnames';

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (values) => {
    console.log(values);
  };

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
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className='row'>
                <div className='col-sm-6'>
                  <div className='input-group'>
                    <input
                      {...register('name', { required: true })}
                      type='text'
                      className={cn('form-control', { error: errors.name })}
                      placeholder='Nombre'
                    />
                  </div>
                </div>
                <div className='col-sm-6'>
                  <div className='input-group'>
                    <input
                      {...register('phone', {
                        required: true,
                        minLength: 6,
                        maxLength: 12,
                      })}
                      type='tel'
                      className={cn('form-control', { error: errors.phone })}
                      placeholder='Teléfono'
                    />
                  </div>
                </div>
                <div className='col-sm-12'>
                  <div className='input-group'>
                    <input
                      {...register('email', {
                        required: true,
                        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      })}
                      type='text'
                      className={cn('form-control', { error: errors.email })}
                      placeholder='Email'
                    />
                  </div>
                </div>
                <div className='col-sm-4'>
                  <div className='input-group'>
                    <input
                      {...register('city', {
                        required: true,
                        minLength: 3,
                        maxLength: 60,
                      })}
                      type='text'
                      className={cn('form-control', { error: errors.city })}
                      placeholder='Ciudad'
                    />
                  </div>
                </div>
                <div className='col-sm-8'>
                  <div className='input-group'>
                    <input
                      {...register('address', {
                        required: true,
                        minLength: 6,
                        maxLength: 120,
                      })}
                      type='text'
                      className={cn('form-control', { error: errors.address })}
                      placeholder='Dirección'
                    />
                  </div>
                </div>
                <div className='col-sm-12'>
                  <div className='input-group'>
                    <textarea
                      {...register('message', {
                        required: true,
                        minLength: 6,
                      })}
                      className={cn('form-control', { error: errors.message })}
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
