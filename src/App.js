import logo from './logo.svg';
import './App.scss';
import { useCallback, useState } from 'react';
// import Particles from 'react-tsparticles'
// import { loadFull } from 'tsparticles';
import Snowfall from 'react-snowfall';

import Header from './Components/Header';
import Main from './Components/Main';
import Languages from './Components/Languages';
import Study from './Components/Study';
import Courses from './Components/Courses';
import Work from './Components/Work';
import Footer from './Components/Footer';
import Skills from './Components/Skills';
import Projects from './Components/Projects';

function App() {

  let date = new Date();
  const months = [ "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12" ];
  let month = false;
  if (months[date.getMonth()] === "01" || months[date.getMonth()] === "02" || months[date.getMonth()] === "12" ){
    month = true;
  } else {
    month = false;
  }

  const snowStyle = {
    height: "255%",
  }

  return (
    <div className="app">
      {month ? <Snowfall snowflakeCount={50} style={snowStyle}/> : ""}
      <Header/>
      <Main/>
      <Work/>
      <Study/>
      <Courses/>
      <Languages/>
      <Skills/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
