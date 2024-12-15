import Clicker from './components/Clicker';
import ScoreTitle from './components/ScoreTitle';
import UpgradesNav from './components/UpgradesNav';
import { MainGameContextProvider} from './contexts/MainGameContext';
import './styles/index.css';

function App() {

  return (
    <MainGameContextProvider>
      <div className="mainContainer">
        <UpgradesNav/>
        <div className="clickerContainer">
          <Clicker/>
          <ScoreTitle/>
        </div>
      </div>
    </MainGameContextProvider>
  );
}

export default App;
