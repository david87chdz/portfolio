import React, { useState } from 'react';

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
    <div>
         <h2>📧 Mail</h2>
      <p>
        <a href={`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`}>
          Contactame a traves de: {email}
        </a>
        <button onClick={handleCopy}>
        {copied ? "¡Copiado!" : "Copiar correo"}
      </button>
      </p>
      
    </div>
  );
};