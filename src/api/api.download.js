import axios from "axios";
export const download = async () => {
  const url = process.env.REACT_APP_URL_DOWNLOAD;
  // const url = "http://localhost:8000/pdf/cv-dev-nelson.pdf";

  try {
    const response = await axios.get(url, {
      responseType: "blob",
    });

    if (response.status === 200) {
      const urlArchivo = window.URL.createObjectURL(response.data);

      const enlaceDescarga = document.createElement("a");
      enlaceDescarga.href = urlArchivo;
      enlaceDescarga.download = "CV";

      enlaceDescarga.click();

      window.URL.revokeObjectURL(urlArchivo);
    } else {
      console.error("Error al descargar el archivo PDF");
    }
  } catch (error) {
    console.error("Error en la solicitud al backend:", error);
  }
};
