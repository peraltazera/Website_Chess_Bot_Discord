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
        <a href='https://discord.com/oauth2/authorize?client_id=1077947825595351190&permissions=8&scope=bot' target="_blank">Convite</a>
      </div>
      <div className="Bottom">
        <h1>Comandos</h1>
        <div className="Container">
          <div className="Left">
            <div className="Command">
              <h1>/multiplayer</h1>
              <p>Criar partida multiplayer</p>
            </div>
            <div className="Command">
              <h1>/singleplayer</h1>
              <p>Criar partida contra IA</p>
            </div>
            <div className="Command">
              <h1>/mover</h1>
              <p>Mover uma peça</p>
            </div>
            <div className="Command">
              <h1>/reiniciar</h1>
              <p>Reiniciar a partida</p>
            </div>
            <div className="Command">
              <h1>/recuperar</h1>
              <p>Recuperar partida em andamento</p>
            </div>
            <div className="Command">
              <h1>/finalizar</h1>
              <p>Termine a partida</p>
            </div>
            <div className="Command">
              <h1>/comandos</h1>
              <p>Lista todos os comandos</p>
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
