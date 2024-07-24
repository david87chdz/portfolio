import reactImage from './../assets/fotoCv.jpeg';

// Asegúrate de importar tu imagen correctamente

export function Image() {
  return (
    <div className="flex justify-content-lg-start mb-8">
      <img
        src={reactImage}
        alt="David Cerezo"
        className="w-48 h-auto border-4 border-gray-300 dark:border-gray-600 shadow-xl rounded-lg"
      />
    </div>
  );
}

  