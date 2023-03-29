import './App.css'
import Logo from './assets/Logo.png'
import Board from './assets/Board.png'

function App() {
  return (
    <div className="App">
      <div className="Top">
        <img src={Logo} />
        <h1>Chess Bot</h1>
        <p>Um bot de xadrez para seu servidor discord</p>
        <button>Convite</button>
      </div>
      <div className="Bottom">
        <h1>Comandos</h1>
        <div className="Container">
          <div className="Left">
            <div className="Command">
              <h1>/chess</h1>
              <p>Criar partida multiplayer</p>
            </div>
            <div className="Command">
              <h1>/ai</h1>
              <p>Criar partida contra IA</p>
            </div>
            <div className="Command">
              <h1>/move</h1>
              <p>Mover uma peça</p>
            </div>
            <div className="Command">
              <h1>/restart</h1>
              <p>Reiniciar a partida</p>
            </div>
            <div className="Command">
              <h1>/recover</h1>
              <p>Recuperar partida em andamento</p>
            </div>
            <div className="Command">
              <h1>/delete</h1>
              <p>Finaliza a partida</p>
            </div>
            <div className="Command">
              <h1>/commands</h1>
              <p>Lista todos os comandos</p>
            </div>
          </div>
          <div className="Right">
            <img src={Board} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
