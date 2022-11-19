import { fabric } from 'fabric';
import * as pdfjsLib from 'pdfjs-dist/webpack';

const Base64Prefix = 'data:application/pdf;base64,';

// 初始化 fabric canvas
export const initFabricCanvas = (canvas) => {
  return new fabric.Canvas(canvas);
};

//讀取文件
export function readBlob(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => resolve(reader.result));
    reader.addEventListener('error', reject);
    reader.readAsDataURL(blob);
  });
}

//製作一個印有 pdf 的 canvas
export async function createPDFCanvas(pdfData, page) {
  pdfData = await readBlob(pdfData);
  const data = atob(pdfData.substring(Base64Prefix.length));
  const pdfDoc = await pdfjsLib.getDocument({ data }).promise;
  const pdfPage = await pdfDoc.getPage(page);
  const viewport = pdfPage.getViewport({ scale: 1.5 });
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  canvas.height = viewport.height;
  canvas.width = viewport.width;
  const renderContext = {
    canvasContext: context,
    viewport,
  };
  const renderTask = pdfPage.render(renderContext);
  return renderTask.promise.then(() => canvas);
}

//將印有 pdf 的 canvas 製作為 fabric Img
export async function pdfToImage(pdfCanvas) {
  const scale = 1 / window.devicePixelRatio;
  return new fabric.Image(pdfCanvas, {
    scaleX: scale,
    scaleY: scale,
  });
}

//fileReader
export const readFile = (file) => {
  const fileReader = new FileReader();
  fileReader.readAsArrayBuffer(file);
  return fileReader.addEventListener('load', () => {
    const typedArr = new Uint8Array(fileReader.result);
    return typedArr;
  });
};

//將pdf 渲染在 canvas上
export const renderPDF = async (pdfData, pageNum, canvasRef) => {
  const pdf = await pdfjsLib.getDocument(pdfData).promise;
  const page = await pdf.getPage(pageNum);
  const viewport = page.getViewport({ scale: 0.3 });
  const canvas = canvasRef.current;
  const canvasContext = canvas.getContext('2d');
  canvas.height = 220;
  canvas.width = 180;
  const renderContext = { canvasContext, viewport };
  page.render(renderContext);
};
