import Board from "./components/board";
import './components/style.css';
import { Leaderboard, Leaderboard2 } from "./components/database";
import Top from "./components/Top";

function App() {
  return (
    <div className="App" id="main">
      <Board Leaderboard ={Leaderboard}></Board>
      <Board Leaderboard={Leaderboard2}></Board>
    </div>
  );
}

export default App;