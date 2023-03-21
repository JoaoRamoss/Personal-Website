
import './App.css';
import AssembledPage from './Pages';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<AssembledPage />}/>
      </Routes>
    </Router>
  );
}

export default App;
