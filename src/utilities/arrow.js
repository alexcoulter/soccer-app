export function adjustTableArrows(sortColumn, sortDirection) {
  var iconName, iconTeam, iconAge, iconGoals, iconPosition;
  iconName = iconTeam = iconAge = iconGoals = iconPosition = "default";
  let iconObj = {};

  switch(sortColumn) {
    case 'lastName': 
      sortDirection === 'asc' ? iconName = 'down' : iconName = 'up';
      break;
    case 'team':
      sortDirection === 'asc' ? iconTeam = 'down' : iconTeam = 'up';
      break;
    case 'position':
      sortDirection === 'asc' ? iconPosition = 'down' : iconPosition = 'up';
      break;
    case 'dob':
      sortDirection === 'asc' ? iconAge = 'down' : iconAge = 'up';
      break;
    case 'goals': 
    sortDirection === 'asc' ? iconGoals = 'down' : iconGoals = 'up';
    break;
    default:
     break;
  }
  iconObj.iconName = iconName;
  iconObj.iconTeam = iconTeam;
  iconObj.iconPosition = iconPosition;
  iconObj.iconAge = iconAge;
  iconObj.iconGoals = iconGoals;
  return iconObj;
}