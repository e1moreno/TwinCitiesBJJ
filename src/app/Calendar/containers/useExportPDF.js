import { useRef, useCallback } from 'react';
import * as JsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const useExportPDF = (pdfSettings) => {
  const ref = useRef(null);

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
  }, [ref]);
  return [ref, handleExport];
};

export default useExportPDF;
