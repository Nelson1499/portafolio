import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Signup } from "../api/api.users";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const SignupForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  /**
   * Inicializa el formulario utilizando Formik con valores iniciales, un esquema de validación y envio de datos.
   *
   * @param {object} initialValues - Objeto que contiene los valores iniciales del formulario.
   * @param {object} validationSchema - Esquema de validación utilizado para validar los datos del formulario.
   * @param {function} onSubmit - Función que maneja el envío de datos al backend.
   * @param {function} resetForm - Función para resetear los campos del formulario.
   * @returns {void}
   */
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Por favor, ingresa un nombre de usuario"),
      email: Yup.string()
        .email("Por favor, ingresa un correo electrónico válido")
        .required("Por favor, ingresa un correo electrónico"),
      password: Yup.string().required("Por favor, ingresa una contraseña"),
    }),
    onSubmit: (values, { resetForm }) => {
      Signup(values).then(res=>console.log(res.data)).catch(e=>console.log(e));
      resetForm();
    },
  });

  return (
    <div className="mb-2">
      <form onSubmit={formik.handleSubmit}>
        <div className="my-2 py-2 border-2 border-white items-center rounded">
          <input
            className="w-full bg-transparent border-none m-auto outline-none mx-2"
            type="text"
            id="name"
            placeholder="Username"
            {...formik.getFieldProps("name")}
          />
          {formik.touched.name && formik.errors.name && (
            <div className="text-red-500 text-sm">{formik.errors.name}</div>
          )}
        </div>
        <div className="my-2 py-2 border-2 border-white items-center rounded">
          <input
            className="w-full bg-transparent border-none m-auto outline-none mx-2"
            type="email"
            id="email"
            placeholder="Email"
            {...formik.getFieldProps("email")}
          />
          {formik.touched.email && formik.errors.email && (
            <div className="text-red-500 text-sm">{formik.errors.email}</div>
          )}
        </div>
        <div className="my-2 py-2 border-2 border-white items-center rounded">
          <div className="flex">
            <input
              className="w-full bg-transparent border-none m-auto outline-none mx-2"
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Password"
              {...formik.getFieldProps("password")}
            />
            {showPassword ? (
              <VisibilityIcon className="mx-2" onClick={togglePasswordVisibility} />
            ) : (
              <VisibilityOffIcon className="mx-2" onClick={togglePasswordVisibility} />
            )}
          </div>
          {formik.touched.password && formik.errors.password && (
            <div className="text-red-500 text-sm">{formik.errors.password}</div>
          )}
        </div>
        <div className="my-1 py-1 text-black border-2 bg-slate-50  hover:bg-slate-200 items-center rounded">
          <button
            className="w-full m-auto outline-none mx-2 bg-transparent"
            type="submit"
          >
            Sign Up
          </button>
        </div>
      </form>
      <Link to="/login">
        <small>¿Ya tienes una cuenta? Inicia sesión.</small>
      </Link>
    </div>
  );
};

export default SignupForm;
