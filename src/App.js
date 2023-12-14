import logo from './logo.svg';
import './App.scss';

import Header from './Components/Header';
import Main from './Components/Main';
import Languages from './Components/Languages';
import Study from './Components/Study';
import Courses from './Components/Courses';
import Work from './Components/Work';
import Footer from './Components/Footer';
import Skills from './Components/Skills';

function App() {
  return (
    <div className="app">
      <Header/>
      <Main/>
      <Study/>
      <Work/>
      <Courses/>
      <Languages/>
      <Skills/>
      <Footer/>
    </div>
  );
}

export default App;
