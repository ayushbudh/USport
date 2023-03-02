import './App.css';
import Landing from './components/landing/landing';
import Signin from './components/authentication/signin';
import Signup from './components/authentication/signup';
import Notification from './components/notification/notification';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/notification" element={<Notification />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
