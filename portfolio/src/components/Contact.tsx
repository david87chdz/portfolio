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
    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md text-center">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">📧 Mail</h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        <a href={`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`} className="text-blue-500 dark:text-blue-400 underline">{email}</a>
        <button onClick={handleCopy} className="ml-4 bg-blue-500 dark:bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-600 dark:hover:bg-blue-800 transition">
          {copied ? "¡Copiado!" : "Copiar correo"}
        </button>
      </p>
    </div>
  );
};
