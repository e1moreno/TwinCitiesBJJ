import { useEffect, useRef, useCallback } from 'react';

const useExportPDF = (pdfSettings) => {
  let JsPDF;
  let html2canvas;
  const ref = useRef(null);

  useEffect(() => {
    const importJspdf = async () => {
      try {
        const { default: defaultJsPDF } = await import('jspdf');
        const { default: defaultCanvas } = await import('html2canvas');
        JsPDF = defaultJsPDF;
        html2canvas = defaultCanvas;
      } catch (error) {
        console.warn(error);
      }
    };
    importJspdf();
  }, []);

  const handleExport = useCallback(async () => {
    try {
      const canvas = await html2canvas(ref.current);
      const imgData = canvas.toDataURL('image/png');
      const pdf = new JsPDF(pdfSettings);
      pdf.addImage(imgData, 'PNG', 0, 0, 279, 215);
      pdf.save('download.pdf');
    } catch (error) {
      // do nothing
    }
  }, [ref, JsPDF]);
  return [ref, handleExport];
};

export default useExportPDF;
