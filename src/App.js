import './App.css';
import Main from './Components/Main';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Result from './Components/Result';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/result" element={<Result />} />
      </Routes>
    </Router>
  );
}

export default App;
