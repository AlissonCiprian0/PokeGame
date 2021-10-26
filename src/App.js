import {baseAPI, pokemons} from "./API";
import Selector from "./components/Selector";
import Pokegame from "./components/Pokegame";
import Player from "./components/Player";
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
      <Route
          path="/"
          exact
          render={() => (
            <>
              <Selector baseAPI={baseAPI} pokemons={pokemons} />
              <Player> Player 1 </Player>
            </>
          )}
      />

      <Route
          path="/oponents-choise"
          exact
          render={() => (
            <>
              <Selector baseAPI={baseAPI} pokemons={pokemons} />
              <Player> Player 2 </Player>
            </>
          )}
      />

      <Route
          path="/battle"
          exact
          render={() => (
            <>
              <Pokegame baseAPI={baseAPI} hand1={JSON.parse(localStorage.getItem("hand1"))} hand2={JSON.parse(localStorage.getItem("hand2"))} />
            </>
          )}
        />
      </div>
    </Router>
  );
}

export default App;
