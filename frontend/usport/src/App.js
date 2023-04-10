import './App.css';
import MyProfile from './components/profile/MyProfile';
import Home from './components/home/home'; 
import Landing from './components/landing/landing';
import Signin from './components/authentication/signin';
import Signup from './components/authentication/signup';
import Notification from './components/notification/notification';
import Chat from './components/chat/chat';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MyAccount from './components/account/MyAccount';
import CreateGame from './components/creategame/creategame';
import { AuthProvider } from './contexts/AuthContext';
import {PrivateRoute, PublicRouteRollback} from "./ProtectedRoute"
import CreateStatus from './components/creategame/createstatus';
import SetupProfile from './components/profile/setupprofile';

function App() {
  return (
    <div className="App">
        <AuthProvider>
          <BrowserRouter>
          <Routes>
            <Route exact path="/createstatus" element={<PrivateRoute><CreateStatus/> </PrivateRoute>} />
            <Route exact path="/creategame" element={<PrivateRoute><CreateGame/> </PrivateRoute>} />
            <Route exact path="/notification" element={<PrivateRoute><Notification /></PrivateRoute>} />
            <Route exact path="/home" element={<PrivateRoute><Home/></PrivateRoute>} />
            <Route exact path="/chat" element={<PrivateRoute><Chat/></PrivateRoute>} />
            <Route exact path="/profile" element={<PrivateRoute><MyProfile/></PrivateRoute>} />
            <Route exact path="/profilesetup" element={<PrivateRoute><SetupProfile/></PrivateRoute>} />
            <Route  exact path="/myaccount" element={<PrivateRoute><MyAccount/></PrivateRoute>} />
            <Route path="/" element={<PublicRouteRollback><Landing /></PublicRouteRollback>} />
            <Route path="/signup" element={<PublicRouteRollback><Signup /></PublicRouteRollback>} />
            <Route path="/signin" element={<PublicRouteRollback><Signin /></PublicRouteRollback>} />
          </Routes>
          </BrowserRouter>
        </AuthProvider>
    </div>
  );
}

export default App;
