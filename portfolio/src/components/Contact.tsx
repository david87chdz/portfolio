import { useState } from 'react';

export const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = "david87chdz@gmail.com";
  const subject = "Contacto";
  const body = "Cuerpo del mensaje";

  const handleCopy = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
    });
  };

  return (
    <div className="w-full flex flex-col items-center bg-gray-100 dark:bg-gray-900 px-4 py-6 md:px-8 md:py-12 rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">📧 Mail</h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4 text-center">
        <a
          href={`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`}
          className="text-blue-500 dark:text-blue-400 underline"
        >
          {email}
        </a>
        <button
          onClick={handleCopy}
          className="ml-4 bg-blue-500 dark:bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-600 dark:hover:bg-blue-800 transition"
        >
          {copied ? "¡Copiado!" : "Copiar correo"}
        </button>
      </p>
    </div>
  );
};
