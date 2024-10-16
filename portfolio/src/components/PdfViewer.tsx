import { useState, useRef } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import '../styles/PDFViewer.css'; 

pdfjs.GlobalWorkerOptions.workerSrc = `/pdfjs/pdf.worker.min.mjs`;

export function PDFViewer({ fileUrl }: { fileUrl: string }) {
  const [numPages, setNumPages] = useState(1);
  const [pageNumber, setPageNumber] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  const goToNextPage = () => {
    if (pageNumber < numPages) {
      setPageNumber(pageNumber + 1);
    }
  };

  const goToPrevPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  return (
    <div className="pdf-viewer-container" ref={containerRef}>
      <Document
        file={fileUrl}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page
          pageNumber={pageNumber}
          scale={1.2}
          renderTextLayer={false} // Desactivar el renderizado del texto
          renderAnnotationLayer={false} // Desactivar el renderizado de anotaciones
        />
      </Document>

      {/* Botones de navegación */}
      <div className="pdf-navigation">
        {pageNumber > 1 && (
          <button onClick={goToPrevPage}>
            Anterior
          </button>
        )}
        {pageNumber < numPages && (
          <button onClick={goToNextPage}>
            Siguiente
          </button>
        )}
        <p style={{ color: '#333' }}>Página {pageNumber} de {numPages}</p> {/* Texto más oscuro */}
      </div>
    </div>
  );
}
