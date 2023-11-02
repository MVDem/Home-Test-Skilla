import { Route, Routes } from 'react-router-dom';
import LayOut from './pages/LayOut';
import CallsPage from './pages/CallsPage';
import TemporaryPage from './pages/TemporaryPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route index element={<TemporaryPage />} />
          <Route path="/calls" element={<CallsPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
