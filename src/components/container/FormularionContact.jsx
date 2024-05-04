import { postForm } from "../../api/api";
import { useFormik } from "formik";
import * as Yup from "yup";

const FormularionContact = ({form}) => {
  const { title, send ,errors: { email, emailrequired, name, message }, placeholdernames: { pname, pmail, pmessage } } = form;
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email(email)
        .required(emailrequired),
      name: Yup.string().required(name),
      message: Yup.string().required(message),
    }),
    onSubmit: (values, { resetForm }) => {
      postForm(values);
      resetForm();
    },
  });
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="bg-gray-500 bg-opacity-20 block w-11/12 md:w-96 py-2 px-5 items-center m-auto"
    >
      <h3 className="text-xl">{title}</h3>
      <div className="m-auto">
        <div className="border-2 border-white p-2 my-2 rounded">
          <input
            type="text"
            placeholder={pname}
            className="bg-transparent outline-none"
            id="name"
            name="name"
            {...formik.getFieldProps("name")}
          />
          {formik.touched.name && formik.errors.name && (
            <div className="text-red-500 text-sm">{formik.errors.name}</div>
          )}
        </div>
        <div className="border-2 border-white p-2 my-2 rounded">
          <input
            type="email"
            placeholder={pmail}
            className="bg-transparent outline-none"
            id="email"
            name="email"
            {...formik.getFieldProps("email")}
          />
          {formik.touched.email && formik.errors.email && (
            <div className="text-red-500 text-sm">{formik.errors.email}</div>
          )}
        </div>
        <div className="border-2 border-white p-2 my-2 rounded">
          <textarea
            placeholder={pmessage}
            className="bg-transparent outline-none min-h-48 max-h-48 w-full"
            id="message"
            name="message"
            {...formik.getFieldProps("message")}
          />
          {formik.touched.message && formik.errors.message && (
            <div className="text-red-500 text-sm">{formik.errors.message}</div>
          )}
        </div>
        <button
          type="submit"
          className="border-2 border-white text-black bg-slate-50 hover:bg-slate-200 p-2 my-2 rounded w-full"
        >
          {send}
        </button>
      </div>
    </form>
  );
};

export default FormularionContact;
