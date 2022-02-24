
import './App.css';
import Navbar from './components/Header/Header'
import Gists from './components/Gists/Gists'

function App() {
  return (
    <>
      <Navbar style={{ textAlign: 'start' }}/>
      <Gists style={{ paddingTop: '50px'}} />
    </>
  );
}

export default App;
