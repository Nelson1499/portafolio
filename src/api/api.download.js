import axios from "axios";
export const download = async (language) => {
  const url = process.env.REACT_APP_URL_DOWNLOAD_ESP;
  const url_eng = process.env.REACT_APP_URL_DOWNLOAD_ENG;
  try {
    let response;
    if (language === "es") {
      response = await axios.get(url, {
        responseType: "blob",
      });
    } else {
      response = await axios.get(url_eng, {
        responseType: "blob",
      });
    }

    if (response.status === 200) {
      const urlArchivo = window.URL.createObjectURL(response.data);

      const enlaceDescarga = document.createElement("a");
      enlaceDescarga.href = urlArchivo;
      enlaceDescarga.download = "CV-NelsonAvalos";

      enlaceDescarga.click();

      window.URL.revokeObjectURL(urlArchivo);
    } else {
      console.error("Error al descargar el archivo PDF");
    }
  } catch (error) {
    console.error("Error en la solicitud al backend:", error);
  }
};
