import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'; // Importa los estilos necesarios

// Configura la localización del worker de pdfjs
pdfjs.GlobalWorkerOptions.workerSrc = '/pdfjs/pdf.worker.min.mjs';

export function Curriculum() {
  // Aquí puedes reemplazar la URL por la ubicación real de tu archivo PDF
  const pdfUrl = "/curriculum.pdf";

  return (
    <div className="pdf-viewer">
      <Document
        file={pdfUrl}
        onLoadSuccess={({ numPages }) => console.log(`PDF loaded, number of pages: ${numPages}`)}
      >
        <Page pageNumber={1} />
      </Document>
    </div>
  );
}
