import { useEffect, useRef } from "react";
import * as pdfjsLib from "pdfjs-dist";
import "pdfjs-dist/web/pdf_viewer.css";

interface PDFViewerProps {
    fileUrl: string; // The PDF file's URL
}

const PDFViewer = ({ fileUrl }: PDFViewerProps) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const renderPDF = async () => {
            if (!containerRef.current) return;

            // Clear any previous content
            containerRef.current.innerHTML = "";

            // Configure the worker
            pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.14.305/pdf.worker.min.js`;

            // Load the PDF
            const pdf = await pdfjsLib.getDocument(fileUrl).promise;

            for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
                const page = await pdf.getPage(pageNum);

                // Prepare a canvas for rendering
                const canvas = document.createElement("canvas");
                const canvasContext = canvas.getContext("2d");

                if (!canvasContext) return;

                // Set dimensions for rendering
                const viewport = page.getViewport({ scale: 1.5 });
                canvas.height = viewport.height;
                canvas.width = viewport.width;

                // Append canvas to container
                containerRef.current.appendChild(canvas);

                // Render the page
                await page.render({
                    canvasContext,
                    viewport,
                }).promise;
            }
        };

        renderPDF();
    }, [fileUrl]);

    return <div ref={containerRef} className="pdf-container" />;
};

export default PDFViewer;
