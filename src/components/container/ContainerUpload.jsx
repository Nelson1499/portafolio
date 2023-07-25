import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import toast, { Toaster } from "react-hot-toast";
import { upload } from "../../api/api.projects";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import { Tooltip } from "@mui/material";
import { useContext, useEffect } from "react";
import { UserContext } from "../../provider/UserContext";
import { getAuth } from "../../api/api.users";

const ContainerUpload = (props) => {
  const { setUserSessionState } = useContext(UserContext);
  const { update, setupdate } = props;
  /**
   * Inicializa el formulario utilizando Formik con valores iniciales, un esquema de validación y envio de datos.
   *
   * @param {object} initialValues - Objeto que contiene los valores iniciales del formulario.
   * @param {object} validationSchema - Esquema de validación utilizado para validar los datos del formulario.
   * @param {function} onSubmit - Función que maneja el envío de datos al backend.
   * @param {function} resetForm - Función para resetear los campos del formulario.
   * @param {function} resetFileInput - Función que restablece el campo de entrada de imágenes.
   * @returns {void}
   */
  const formik = useFormik({
    initialValues: {
      title: "",
      urlweb: "",
      urlrepository: "",
      description: "",
      images: "",
      email: "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Por favor, ingresa nombre de su proyecto"),
      urlweb: Yup.string().required(
        "Por favor, ingresa una URL válida de tu sitio web"
      ),
      urlrepository: Yup.string().required(
        "Por favor, ingresa una url de tu repositorio donde esta alojado"
      ),
      description: Yup.string().required(
        "Por favor, ingresa una breve descripcion"
      ),
      email: Yup.string().required("No estas logeado!"),
      images: Yup.mixed()
        .test("fileSize", "imagen es muy pesada", (value) => {
          if (value && value?.length > 0) {
            for (let i = 0; i < value.length; i++) {
              if (value[i].size > 15 * 1048576) {
                return false;
              }
            }
          }
          return true;
        })
        .test("fileType", "Formato de imagen no valido", (value) => {
          if (value && value.length > 0) {
            for (let i = 0; i < value.length; i++) {
              if (
                value[i].type !== "image/png" &&
                value[i].type !== "image/jpg" &&
                value[i].type !== "image/jpeg" &&
                value[i].type !== "image/webp"
              ) {
                return false;
              }
            }
          }
          return true;
        })
        .required("Imagenes son requeridas"),
    }),
    onSubmit: (values, { resetForm }) => {
      upload(values)
        .then((res) => {
          toast.success(res.data.message);
          setupdate(!update);
        })
        .catch((e) => toast.error(e.response.data.message));
      resetForm();
      resetFileInput("images");
    },
  });
  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    formik.setFieldValue("images", files);
  };
  const closeSession = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("token");
    setUserSessionState(false);
  };
  const resetFileInput = (fieldName) => {
    const input = document.querySelector(`input[name="${fieldName}"]`);
    if (input) {
      input.type = "";
      input.type = "file";
    }
  };
  useEffect(() => {
    getAuth()
      .then((res) => formik.setFieldValue("email", res.data.email))
      .catch((e) => console.log(e));
  }, []);
  return (
    <div className="m-auto">
      <Toaster />
      <div className="text-center bg-slate-700 bg-opacity-20 w-11/12 m-auto md:w-96 py-5 px-5">
        <div
          onClick={closeSession}
          className="flex justify-end hover:text-red-700 cursor-pointer"
        >
          <Tooltip title="Cerrar sesión">
            <PowerSettingsNewIcon />
          </Tooltip>
        </div>
        <h3 className="pb-2 font-semibold text-xl">Upload Projects</h3>
        <form onSubmit={formik.handleSubmit}>
          <div className="my-2 p-2 border-2 border-white items-center rounded">
            <input
              className="w-full bg-transparent border-none m-auto outline-none mx-2"
              type="text"
              id="title"
              placeholder="Nombre del proyecto"
              {...formik.getFieldProps("title")}
            />
            {formik.touched.title && formik.errors.title && (
              <div className="text-red-500 text-sm">{formik.errors.title}</div>
            )}
          </div>
          <div className="my-2 p-2 border-2 border-white items-center rounded">
            <input
              className="w-full bg-transparent border-none m-auto outline-none mx-2"
              type="text"
              id="urlweb"
              placeholder="Url del sitio web"
              {...formik.getFieldProps("urlweb")}
            />
            {formik.touched.urlweb && formik.errors.urlweb && (
              <div className="text-red-500 text-sm">{formik.errors.urlweb}</div>
            )}
          </div>
          <div className="my-2 p-2 border-2 border-white items-center rounded">
            <input
              className="w-full bg-transparent border-none m-auto outline-none mx-2"
              type={"text"}
              id="urlrepository"
              placeholder="Url del repositorio"
              {...formik.getFieldProps("urlrepository")}
            />
            {formik.touched.urlrepository && formik.errors.urlrepository && (
              <div className="text-red-500 text-sm">
                {formik.errors.urlrepository}
              </div>
            )}
          </div>
          <div className="my-2 p-2 border-2 border-white items-center rounded">
            <textarea
              className="w-full bg-transparent border-none m-auto outline-none px-2 max-h-32"
              type="text"
              id="description"
              placeholder="Descripción del sitio web"
              {...formik.getFieldProps("description")}
            />
            {formik.touched.description && formik.errors.description && (
              <div className="text-red-500 text-sm">
                {formik.errors.description}
              </div>
            )}
          </div>
          <input
            type="file"
            id="images"
            name="images"
            multiple
            onChange={handleFileChange}
          />

          {formik.touched.images && formik.errors.images && (
            <div className="text-red-500 text-sm">{formik.errors.images}</div>
          )}
          <div className="my-1 py-1 text-black border-2 bg-slate-50  hover:bg-slate-200 items-center rounded">
            <button
              className="w-full m-auto outline-none mx-2 bg-transparent"
              type="submit"
            >
              Upload
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContainerUpload;
