import  { useState } from "react";
import { PDFViewer } from "./../components/PdfViewer";

export function Curriculum() {
  const [language, setLanguage] = useState("es");

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
  };

  const pdfUrls: { [key: string]: string } = {
    es: "/curriculum_es.pdf",
    en: "/curriculum_en.pdf",
  };

  const handleDownload = () => {
    const pdfUrl = pdfUrls[language];
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = `DavidCerezoHernandezCV_${language}.pdf`;
    link.click();
  };

  return (
    <div className="p-6 bg-white dark:bg-gray-800 min-h-screen flex flex-col items-center rounded-2xl shadow-md">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4 md:text-4xl">
        Curriculum
      </h1>
      <div className="mb-4">
        <button
          className={`mx-2 px-4 py-2 rounded ${
            language === "es" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => handleLanguageChange("es")}
        >
          Español
        </button>
        <button
          className={`mx-2 px-4 py-2 rounded ${
            language === "en" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => handleLanguageChange("en")}
        >
          English
        </button>
      </div>
      <PDFViewer fileUrl={pdfUrls[language]} />
      <button
        className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        onClick={handleDownload}
      >
        Descargar PDF
      </button>
    </div>
  );
}
