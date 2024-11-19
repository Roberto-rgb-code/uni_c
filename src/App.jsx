import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import IndustrialUniforms from './pages/IndustrialUniforms';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/uniformes-industriales" element={<IndustrialUniforms />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;