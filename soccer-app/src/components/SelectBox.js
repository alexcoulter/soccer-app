import Form from 'react-bootstrap/Form';

export function SelectBox({league, setLeague}) {
  return (
    <Form.Select aria-label="League Selection" aria-placeholder="League Selection" value={league} className="mt-3 mb-4 home-select" onChange={(e)=> setLeague(e.target.value)}>
      <option value="All Leagues">Filter By Division: All</option>
      <option value="Rec 1">Rec 1</option>
      <option value="Rec 2">Rec 2</option>
      <option value="Coed">Coed</option>
      <option value="Over 30">Over 30</option>
      <option value="Over 40">Over 40</option>
    </Form.Select>
  )}