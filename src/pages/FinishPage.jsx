import FolderHeader from '../components/UI/Layout/FolderHeader';
import { useGlobalContext } from '../context/GlobalContext';
import { Container } from '../utils/container.styles';
import { FinishArea } from './FinishPage.styles';
//套件
import jsPDF from 'jspdf';
const FinishPage = () => {
  const { finishPDF } = useGlobalContext();

  const pdf = new jsPDF();
  const downloadPdf = () => {
    // 設定背景在 PDF 中的位置及大小
    const width = pdf.internal.pageSize.width;
    const height = pdf.internal.pageSize.height;
    pdf.addImage(finishPDF, 'png', 0, 0, width, height);
    // pdf.addImage(finishPDF, 'png');
    // 將檔案取名並下載
    pdf.save('download.pdf');
  };

  return (
    <Container>
      <FolderHeader
        downloadPdf={downloadPdf}
        data={{ title: '簽署完成', pathArr: ['/edit'], step: 'finish' }}
      />
      <FinishArea>
        <div>
          <img src={finishPDF} alt="" />
        </div>
      </FinishArea>
    </Container>
  );
};

export default FinishPage;
