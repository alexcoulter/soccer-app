import { useEffect, useState, createContext, useContext } from "react";
import _ from 'lodash';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [players, setPlayers] = useState([]);
  const [leaguePlayers, setLeaguePlayers] = useState([]);
  const [teams, setTeams] = useState([]);
  const [league, setLeague] = useState("All Leagues");
  const [playerOrderBy, setPlayerOrderBy] = useState("lastName");
  const [schedule, setSchedule] = useState([]);

  // players.sort((a, b) => a[setPlayerOrderBy] - b[setPlayerOrderBy]);
  // players.sort((a,b)=> a[setPlayerOrderBy] - b[setPlayerOrderBy]);

  useEffect(() => {
    async function fetchData() {
      const playerResponse =  await fetch('https://example.com/players');
      const players = await playerResponse.json();
      setPlayers(players);

      const scheduleResponse = await fetch("https://example.com/schedule");
      const schedule = await scheduleResponse.json();
      schedule.sort((a,b)=> {
        return new Date(a.date) - new Date(b.date);
      });
      setSchedule(schedule);

      const teamResponse =  await fetch('https://example.com/teams');
      const teams = await teamResponse.json();
      teams.sort((a,b)=> 
        (b.points - a.points || (b.goalsFor - b.goalsAgainst) - (a.goalsFor - a.goalsAgainst)||b.goalsFor - a.goalsFor ||  a.teamName.localeCompare(b.teamName))
      );
      setTeams(teams);
    }

    fetchData(); 
  }, []);

  useEffect(()=> {
    setLeaguePlayers(league === "All Leagues" ? players : players.filter(player => player.league === league));
  }, [league, players])


  return (
    <AppContext.Provider value={{teams, players, setPlayers, league, setLeague, playerOrderBy, setPlayerOrderBy, leaguePlayers, setLeaguePlayers, schedule, setSchedule}}>
      {children}
    </AppContext.Provider>
  );

};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };