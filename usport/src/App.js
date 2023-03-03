import './App.css';
import Landing from './components/landing/landing';
import Signin from './components/authentication/signin';
import Signup from './components/authentication/signup';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateGame from './components/creategame/creategame';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/creategame" element={<CreateGame/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
