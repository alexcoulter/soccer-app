import { AppContext } from "../AppProvider"
import { useContext } from "react";
import { Container } from 'react-bootstrap';
import { SelectBox } from '../components/SelectBox';

export function Schedule() {
  const { schedule, league, setLeague } = useContext(AppContext);
  const leagueTeams = league === "All Leagues" ? schedule : schedule.filter(team => team.league === league );
  const uniqueLeagues = [...new Set(leagueTeams.map(team => team.league))];
  return (
    <Container className="body-container"><h2 className="mt-4"> Schedule: {league}</h2>
    <SelectBox league={league} setLeague={setLeague} />
    
    {!!uniqueLeagues.length && uniqueLeagues.map((uniqueLeague, index)=> {
      return (
        <div key={index}>
          <h3 className="mt-4 league-header">Division: {uniqueLeague}</h3>
          <table className="mt-3 mb-5 table table-striped table-bordered table-hover table-borderless text-center standings-table" key={index}>
              <thead className="table-primary border-top-0">
                <tr className="">
                  <th>Date</th>
                  <th>Home Team</th>
                  <th>Away Team</th>
                  <th>Location</th>
                  <th>Result</th>
                </tr>
              </thead>
              <tbody className="standings-table">

              {schedule.length > 0 && schedule.filter((team)=> team.league === uniqueLeague )
              .map((entry, index) => {
              return (
                <tr key={entry.id}>
                  <td>{new Date(entry.date).toLocaleString([], {year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: '2-digit'})}</td>
                  <td>{entry.homeTeam}</td>
                  <td>{entry.awayTeam}</td>
                  <td>{entry.location}</td>
                  <td>{entry.result}</td>
                </tr>

);
})}
  </tbody>
</table>
</div>
    )
  })}
  </Container>
  )
}