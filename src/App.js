import './App.css';
import Board from './components/Board';
import Card from './components/Card';
import './styles/main.scss'
function App() {
  return (
    <div className="App">
      <main>
          <Board id="board-1" className="board">
            <Card id="card-1" className="card" draggable="true">
              <p>Card1</p>
            </Card>
          </Board>
          <Board id="board-2" className="board">
            <Card id="card-2" className="card" draggable="true">
              <p>Card2</p>
            </Card>
            <Card id="card-3" className="card" draggable="true">
              <p>Card3</p>
            </Card>
          </Board>
      </main>
    </div>
  );
}

export default App;
