import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { PDFViewer } from "./../components/PdfViewer";

export function Curriculum() {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language || "es");

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
    i18n.changeLanguage(lang);
  };

  useEffect(() => {
    setLanguage(i18n.language || "es");
  }, [i18n.language]);

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
    <main className="w-full flex flex-col items-center bg-gray-200 dark:bg-gray-800 shadow-lg dark:shadow-5xl rounded-2xl">
      <section className="w-full flex flex-col items-center py-8 px-4">
        <div data-aos="fade-up" data-aos-delay="200" className="my-6 w-full max-w-4xl flex flex-col items-center p-6 rounded-2xl shadow-2xl bg-white dark:bg-gray-900">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4 md:text-4xl">
            {t('curriculum')}
          </h1>
          <div className="mb-4">
            <button
              className={`mx-2 px-4 py-2 rounded ${
                language === "es" ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
              onClick={() => handleLanguageChange("es")}
            >
              {t('spanish')}
            </button>
            <button
              className={`mx-2 px-4 py-2 rounded ${
                language === "en" ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
              onClick={() => handleLanguageChange("en")}
            >
              {t('english')}
            </button>
          </div>
          <PDFViewer fileUrl={pdfUrls[language]} />
          <button
            className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            onClick={handleDownload}
          >
            {t('download_pdf')}
          </button>
        </div>
      </section>
    </main>
  );
}
