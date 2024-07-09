import { useEffect, useState } from 'react';
import { useGlobalContext } from '../AppProvider';
import { Container } from 'react-bootstrap';
import { adjustTableArrows } from '../utilities/arrow';
import { SelectBox } from '../components/SelectBox'
import _ from 'lodash';

const PlayerTable = ({ players, league, onSort }) => {
  const [sortColumn, setSortColumn] = useState('');
  const [sortDirection, setSortDirection] = useState('desc');

  const handleSort = (column) => {
    let newDirection = 'asc';
    console.log("handling click" + column + sortColumn + sortDirection);
    if (column === sortColumn) {
      newDirection = sortDirection === 'asc' ? 'desc' : 'asc'
      setSortDirection(newDirection);
    } else {
      setSortColumn(column);
      setSortDirection(newDirection);
    }
    onSort(column, newDirection);
  };
  var iconObj = adjustTableArrows(sortColumn, sortDirection);

  if(players.length) return (
  
    <table className="table table-striped table-bordered table-hover table-borderless">
      <thead className="table-primary border-top-0">
        <tr>
          <th className={iconObj.iconName} onClick={() => handleSort('lastName')}>Name</th>
          <th className={iconObj.iconTeam} onClick={() => handleSort('team')}>Team</th>
          <th className={iconObj.iconPosition} onClick={() => handleSort('position')}>Position</th>
          <th className={iconObj.iconAge} onClick={() => handleSort('dob')}>Date of Birth</th>
          <th className={`text-center ${iconObj.iconGoals}`} onClick={() => handleSort('goals')}>Goals</th>
        </tr>
      </thead>
      <tbody>
        {players.map((player, index) => (
          <tr key={index}>
            <td>{player.firstName} {player.lastName}</td>
            <td>{player.team}</td>
            <td>{player.position}</td>
            <td>{player.dob}</td>
            <td className="text-center">{player.goals}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  else {
    return (
      <p>No players to display from the <b>{league}</b> division</p>
    )
  }
};

const Players = () => {
  const { league, setLeague, leaguePlayers } = useGlobalContext();
  const [sortedPlayers, setSortedPlayers] = useState(leaguePlayers);

  useEffect(() => {
    setSortedPlayers(leaguePlayers);
  }, [leaguePlayers]);

  const handleSort = (column, direction) => {
    const sortedPlayers = _.sortBy(leaguePlayers, (player) => {
      if (column === 'dob') {
        return new Date(player.dob);
      } else {
        return player[column];
      }
    });
    if (direction === 'desc') {
      sortedPlayers.reverse();
    }
    setSortedPlayers(sortedPlayers);
  };

  return (
    <Container className="my-4 body-container">
      <h4>League Selection: {league}</h4>
      <SelectBox league={league} setLeague={setLeague} />
      <PlayerTable league={league} players={sortedPlayers} onSort={handleSort} />
    </Container>

  );
};

export default Players;