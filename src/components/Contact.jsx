import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import 'animate.css'

const Contact = () => {

  const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
  const userId = process.env.NEXT_PUBLIC_USER_ID;

  const { register, handleSubmit, formState: { errors } } = useForm();
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
    alert("¡Gracias! Pronto estaremos en contacto.");
  };

  const sendEmail = (e) => {
    emailjs.sendForm(serviceId, templateId, form.current, userId)
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    form.current.reset();
  };

  return (
    <>
      <div className='flex justify-center animate__animated animate__fadeInUp pt-10'>
        <div className="w-[85%] sm:w-1/2 md:grid p-4">
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form onSubmit={handleSubmit(onSubmit)} ref={form}>
              <div className="shadow sm:rounded-md sm:overflow-hidden">
                <div className="flex flex-col content-center px-4 py-5 bg-white sm:p-6">
                  <div className="w-full">
                    <div className="w-full">
                      <div className='flex justify-center w-full'>
                        <h2 className='text-2xl mb-5 sm:text-4xl text-[#387373]'>Contacto</h2>
                      </div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Nombre
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        autoComplete="given-name"
                        className="mt-1 h-8 p-2 focus:outline outline-offset-2 focus:outline-blue-500 block w-full shadow-lg sm:text-sm border-gray-300 rounded-md"
                        {...register("name", {
                          required: {
                            value: true,
                            message: "Campo requerido"
                          }
                        })}
                      />
                      {errors.name && <span className="text-red-600 font-semibold text-xs">{errors.name.message}</span>}
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mt-4">
                        Correo
                      </label>
                      <input
                        type="text"
                        name="email"
                        id="email"
                        autoComplete="email"
                        className="mt-1 h-8 p-2 focus:outline outline-offset-2 focus:outline-blue-500 block w-full shadow-lg sm:text-sm border-gray-300 rounded-md"
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
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mt-4">
                        Asunto
                      </label>
                      <input
                        type="text"
                        name="subject"
                        id="subject"
                        className="mt-1 h-8 p-2 focus:outline outline-offset-2 focus:outline-blue-500 block w-full shadow-lg sm:text-sm border-gray-300 rounded-md"
                        {...register("subject", {
                          required: {
                            value: true,
                            message: "Campo requerido"
                          }
                        })}
                      />
                      {errors.subject && <span className="text-red-600 font-semibold text-xs">{errors.subject.message}</span>}
                      <label htmlFor="about" className="block text-sm font-medium text-gray-700 mt-4">
                        Mensaje
                      </label>
                      <div className="mt-1">
                        <textarea
                          id="about"
                          name="about"
                          rows={3}
                          className="p-2 shadow-lg focus:outline outline-offset-2 focus:outline-blue-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                          {...register("about", {
                            required: {
                              value: true,
                              message: "Campo requerido"
                            }
                          })}
                        />
                      </div>
                      {errors.about && <span className="text-red-600 font-semibold text-xs">{errors.about.message}</span>}
                      <div className="mt-6 rounded-md shadow">
                        <button type='submit'
                          className="w-full flex items-center justify-center px-8 py-3 border 
                          border-transparent text-base font-medium rounded-md text-white 
                          bg-[#387373] md:py-4 md:text-lg md:px-10 
                          hover:cursor-wait"
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
