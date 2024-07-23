import { useState, useRef } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `/pdfjs/pdf.worker.min.mjs`;

export function PDFViewer({ fileUrl }: { fileUrl: string }) {
  const [, setNumPages] = useState(1);
  const [pageNumber, ] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  return (
    <div className="pdf-viewer-container" ref={containerRef}>
      <Document
        file={fileUrl}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page
          pageNumber={pageNumber}
          scale={1.2} // Ajusta el scale si es necesario
        />
      </Document>
    </div>
  );
}
