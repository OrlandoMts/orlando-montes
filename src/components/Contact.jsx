import React, {useRef} from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

const Contact = () => {

  const { register, handleSubmit, formState: { errors }  } = useForm();
  const form = useRef(null);

  const onSubmit = data => {
    const formData = new FormData(form.current); //Esto lo puedo enviar a un servidor.
        //Lo destructuro porque lo estoy manejando desde el front y estoy en local
        const contactEmail = {
            'name': formData.get('name'),
            'email': formData.get('email'),
            'subject': formData.get('subject'),
            'about': formData.get('about')
        };

        sendEmail(contactEmail);
  };

  const sendEmail = (e) => {
    emailjs.sendForm('service_k1se36n', 'template_11yo8ik', form.current, 'user_w7u3rJF7layE9ixVfJUDE')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    form.current.reset();
  };

  return (
    <>
      <div className='flex justify-center'>
        <div className="w-3/4 sm:w-1/2 md:grid p-4">
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form onSubmit={handleSubmit(onSubmit)} ref={form}>
              <div className="shadow sm:rounded-md sm:overflow-hidden">
                <div className="flex flex-col content-center px-4 py-5 bg-white sm:p-6">
                  <div className="w-full">
                    <div className="w-full">
                      <div className='flex justify-center w-full'>
                        <h2>Contacto</h2>
                      </div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Nombre
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        autoComplete="given-name"
                        className="mt-1 mb-6 h-8 p-2 focus:outline outline-offset-2 focus:outline-blue-500 block w-full shadow-lg sm:text-sm border-gray-300 rounded-md"
                        {...register("name", {
                          required: {
                            value: true,
                            message: "Campo requerido"
                          }
                        })}
                      />
                      {errors.name && <span className="text-red-600 font-semibold text-xs">{errors.name.message}</span>}
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Correo
                      </label>
                      <input
                        type="text"
                        name="email"
                        id="email"
                        autoComplete="email"
                        placeholder="you@example.com"
                        className="mt-1 mb-6 h-8 p-2 focus:outline outline-offset-2 focus:outline-blue-500 block w-full shadow-lg sm:text-sm border-gray-300 rounded-md"
                        {...register("email", {
                          required: {
                            value: true,
                            message: "Campo requerido"
                          },
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message: "El formato no es correcto"
                          }
                        })}
                      />
                      {errors.email && <span className="text-red-600 font-semibold text-xs">{errors.email.message}</span>}
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                        Asunto
                      </label>
                      <input
                        type="text"
                        name="subject"
                        id="subject"
                        className="mt-1 mb-6 h-8 p-2 focus:outline outline-offset-2 focus:outline-blue-500 block w-full shadow-lg sm:text-sm border-gray-300 rounded-md"
                        {...register("subject", {
                          required: {
                            value: true,
                            message: "Campo requerido"
                          }
                        })}
                      />
                      {errors.subject && <span className="text-red-600 font-semibold text-xs">{errors.subject.message}</span>}
                      <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                        Mensaje
                      </label>
                      <div className="mt-1">
                        <textarea
                          id="about"
                          name="about"
                          rows={3}
                          className="p-2 shadow-lg mb-6 focus:outline outline-offset-2 focus:outline-blue-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                          {...register("about", {
                            required: {
                              value: true,
                              message: "Campo requerido"
                            }
                          })}
                        />
                      </div>
                      {errors.about && <span className="text-red-600 font-semibold text-xs">{errors.about.message}</span>}
                      <div className="mt-1 rounded-md shadow">
                        <button type='submit'
                          className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10 hover:cursor-wait"
                        >Enviar mensaje</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
