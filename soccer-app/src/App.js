import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
// import { useEffect, useState, createContext } from "react";
import { useContext } from "react";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavigationBar } from "./components/NavigationBar";
import { Footer } from "./components/Footer";
import { Home } from './pages/Home';
import  Players  from './pages/Players';
import { Standings } from './pages/Standings';
import { Schedule } from './pages/Schedule';
import { NoPage } from './pages/NoPage';
import { AppContext, useGlobalContext } from "./AppProvider";
// export const MyContext = createContext();

function App() {
  const {teams, players, league, setLeague} = useGlobalContext(AppContext);
  return (
    <>
    <BrowserRouter>
    <NavigationBar />
      <Routes>
          <Route path="/" element={<Home doThis={(e)=>setLeague(e.target.value)} /> }   />
          <Route path="players" element={<Players />} />
          <Route path="standings" element={<Standings />} />
          <Route path="schedule" element={<Schedule />} />
          <Route path="*" element={<NoPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
   </>
  );
}

export default App;
