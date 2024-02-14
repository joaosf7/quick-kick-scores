const LIGA_PORTUGAL_CODE = 94
const PREMIER_LEAGUE_CODE = 39
const LA_LIGA_CODE = 140
const LIGUE_1_CODE = 61
const API_KEY = 'INSERT YOUR API KEY HERE'

export async function getRankingsFromFootballAPI(leagueCountry){

    const leagueID = getLeagueIDFromCrountry(leagueCountry)

    var myHeaders = new Headers();
    myHeaders.append("x-rapidapi-key", API_KEY);
    myHeaders.append("x-rapidapi-host", "v3.football.api-sports.io/");

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  return fetch(`https://v3.football.api-sports.io/standings?league=${leagueID}&season=2023`, requestOptions)
    .then(response => response.json())
    .then(result => result.response[0].league)
    .catch(err => console.log('error', err));
}

export async function getTeamFromFootballAPI(teamID){
  var myHeaders = new Headers();
  myHeaders.append("x-rapidapi-key", API_KEY);
  myHeaders.append("x-rapidapi-host", "v3.football.api-sports.io/");

  var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
  };

  return fetch(`https://v3.football.api-sports.io/teams?id=${teamID}`, requestOptions)
    .then(response => response.json())
    .then(result => {
      return result.response[0]
    })
    .catch(err => console.log('error', err));
}

export async function getNextFixturesFromFootbalAPI(teamID){
  var myHeaders = new Headers();
  myHeaders.append("x-rapidapi-key", API_KEY);
  myHeaders.append("x-rapidapi-host", "v3.football.api-sports.io/");

  var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
  };

  return fetch(`https://v3.football.api-sports.io/fixtures?team=${teamID}&next=10`, requestOptions)
    .then(response => response.json())
    .then(result => result.response)
    .catch(err => console.log('error', err));
}

const getLeagueIDFromCrountry = (leagueCountry) => {
  switch(leagueCountry){
      case 'EN':
        return PREMIER_LEAGUE_CODE
      case 'PT':
        return LIGA_PORTUGAL_CODE
      case 'SP':
        return LA_LIGA_CODE
      case 'FR':
        return LIGUE_1_CODE
      default:
        return PREMIER_LEAGUE_CODE
  }
}