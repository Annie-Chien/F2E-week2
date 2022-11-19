import GlobalStyle from './utils/globalStyle';
// React Components
import Layout from './components/UI/Layout/Layout';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage';
import UploadPage from './pages/UploadPage';
import EditPage from './pages/EditPage';
import FinishPage from './pages/FinishPage';
import NotFoundPage from './pages/NotFoundPage';
//React Router
import { Routes, Route } from 'react-router-dom';
import UIContextProvider from './context/UIContext';
import GlobalContextProvider from './context/GlobalContext';

const App = () => {
  return (
    <>
      <GlobalContextProvider>
        <UIContextProvider>
          <GlobalStyle />
          <Navbar />
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="upload" element={<UploadPage />} />
              <Route path="edit" element={<EditPage />} />
              <Route path="finish" element={<FinishPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Layout>
        </UIContextProvider>
      </GlobalContextProvider>
    </>
  );
};

export default App;
