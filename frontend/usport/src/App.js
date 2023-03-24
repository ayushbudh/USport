import './App.css';
import MyProfile from './components/profile/MyProfile';
import Home from './components/home/home'; 
import Landing from './components/landing/landing';
import Signin from './components/authentication/signin';
import Signup from './components/authentication/signup';
import Notification from './components/notification/notification';
import Chat from './components/chat/chat';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyAccount from './components/account/MyAccount';
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
          <Route path="/notification" element={<Notification />} />
          <Route path="/home" element={<Home/>} />
          <Route path="/chat" element={<Chat/>} />
          <Route path="/profile" element={<MyProfile/>} />
          <Route path="/myaccount" element={<MyAccount/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
