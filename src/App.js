
import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Country from './components/Country';


function App() {
  return (
  <Router>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/country/:slug" element={<Country/>}/>
    </Routes>
  </Router>
  );
}

export default App;
