import { useContext } from 'react'
import { AppContext } from '../AppProvider';
import { Container } from 'react-bootstrap';
import { SelectBox } from '../components/SelectBox';

export function Standings() {

  const { teams, league, setLeague } = useContext(AppContext);
  const leagueTeams = league === "All Leagues" ? teams : teams.filter(team => team.league === league );
  const uniqueLeagues = [...new Set(leagueTeams.map(team => team.league))];
  return (
    <Container className="body-container"><h2 className="mt-4"> Standings: {league}</h2>
    <SelectBox league={league} setLeague={setLeague} />
  
    {!!uniqueLeagues.length && uniqueLeagues.map((uniqueLeague, index)=> {
      return (
        <div key={index}>
          <h3 className="mt-4 league-header">Division: {uniqueLeague}</h3>
          <table className="mt-3 mb-5 table table-striped table-bordered table-hover table-borderless text-center standings-table" key={index}>
              <thead className="table-primary border-top-0">
                <tr className="">
                  <th>Rank</th>
                  <th className='text-start'>Team</th>
                  <th>MP</th>
                  <th>W</th>
                  <th>D</th>
                  <th>L</th>
                  <th>GF</th>
                  <th>GA</th>
                  <th>GD</th>
                  <th>Pts</th>
                </tr>
              </thead>
              <tbody className="standings-table">
        {leagueTeams.length > 0 && leagueTeams.filter((team)=> team.league === uniqueLeague )
        .map((team, index) => {
          return (
            <tr key={team.id}>
              <td>{index + 1}</td>
              <td className='text-start'>{team.teamName}</td>
              <td>{team.wins + team.losses + team.ties}</td>
              <td>{team.wins}</td>
              <td>{team.ties}</td>
              <td>{team.losses}</td>
              <td>{team.goalsFor}</td>
              <td>{team.goalsAgainst}</td>
              <td>{team.goalsFor - team.goalsAgainst}</td>
              <td>{(team.wins * 3) + team.ties}</td>
            </tr>
           
          );
        })}
          </tbody>
        </table>
       </div>
      )
    })}
    {uniqueLeagues.length === 0 && <p className='mt-3'>No standings to display for the <b>{league}</b> league</p>}
    </Container>
  );
}