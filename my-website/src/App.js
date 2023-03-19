
import './App.css';
import AssembledPage from './Components/AssembledPage';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AssembledPage />}/>
      </Routes>
    </Router>
  );
}

export default App;
