import logo from './logo.svg';
import './App.scss';

import Header from './Components/Header';
import Main from './Components/Main';
import Information from './Components/Information';

function App() {
  return (
    <div className="app">
      <Header/>
      <Main/>
      <Information/>
    </div>
  );
}

export default App;
