import { BrowserRouter, Routes, Route} from "react-router-dom";

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

function App() {
  const {setLeague} = useGlobalContext(AppContext);
  return (
    <>
    <BrowserRouter>
    <NavigationBar />
      <Routes>
          <Route path="/soccer-app/" element={<Home doThis={(e)=>setLeague(e.target.value)} /> }   />
          <Route path="/soccer-app/players" element={<Players />} />
          <Route path="/soccer-app/standings" element={<Standings />} />
          <Route path="/soccer-app/schedule" element={<Schedule />} />
          <Route path="*" element={<NoPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
   </>
  );
}

export default App;
