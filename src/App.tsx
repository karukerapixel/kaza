import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Housing from './pages/Housing';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='housings/:id' element={<Housing />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
