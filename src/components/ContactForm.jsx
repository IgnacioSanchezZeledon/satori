import { useFormik } from 'formik';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';

export default function ContactForm ()  {

  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
      company: '',
      message: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Dirección de correo electrónico inválida'),
      name: Yup.string()
        .max(50, 'Debe tener 50 caracteres o menos'),
      company: Yup.string()
        .max(50, 'Debe tener 50 caracteres o menos'),
      message: Yup.string()
        .max(500, 'Debe tener 500 caracteres o menos'),
    }),
    onSubmit: (values) => {
      // Aquí puedes manejar la lógica para enviar el formulario
      if (!values.email) {
        formik.setFieldError('email', 'El correo electrónico es requerido');
      } else {
        sendEmail(values);
      }
    },
  });

  const sendEmail = (values) => {

    emailjs.send('service_z2b0nw5', 'template_akqk77u', {
      name: values.name,
      email: values.email,
      company: values.company,
      message: values.message,

    }, 'BEiM6Yed2u0XlWJZP')
    .then((result) => {
          console.log('Email sent successfully:', result.text);
      }, (error) => {
          console.log('Failed to send email:', error.text);
      });
  };

  return (
    <div className="max-w-md mx-auto backdrop-filter backdrop-blur-lg rounded-lg shadow-2xl">
      <form onSubmit={formik.handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Correo electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder='Ingresa tu correo electrónico'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {formik.touched.email && formik.errors.email ? (
            <p className="text-red-500 text-xs italic">{formik.errors.email}</p>
          ) : null}
        </div>

        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Nombre:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder='Ingresa tu nombre'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {formik.touched.name && formik.errors.name ? (
            <p className="text-red-500 text-xs italic">{formik.errors.name}</p>
          ) : null}
        </div>

        <div className="mb-4">
          <label htmlFor="company" className="block text-gray-700 text-sm font-bold mb-2">Empresa:</label>
          <input
            type="text"
            id="company"
            name="company"
            placeholder='Ingresa el nombre de tu empresa'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.company}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {formik.touched.company && formik.errors.company ? (
            <p className="text-red-500 text-xs italic">{formik.errors.company}</p>
          ) : null}
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Descripción de la idea:</label>
          <textarea
            id="message"
            name="message"
            placeholder='Escribe tu mensaje aquí'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none"
          />
          {formik.touched.message && formik.errors.message ? (
            <p className="text-red-500 text-xs italic">{formik.errors.message}</p>
          ) : null}
        </div>

        <div className="flex items-center justify-end">
          <button
            type="submit"
            className="bg-secondary hover:bg-tertiary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}