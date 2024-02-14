const LIGA_PORTUGAL_CODE = 94
const PREMIER_LEAGUE_CODE = 39
const LA_LIGA_CODE = 140
const LIGUE_1_CODE = 61
const API_KEY = 'INSERT YOUR API KEY HERE'

export function getUser() {
  return user;
}

export function getApiKey(){
  return API_KEY
}

export async function getRankingsFromFootballAPI(leagueCountry){

    const leagueID = getLeagueIDFromCrountry(leagueCountry)

    console.log(`leagueID: ${leagueID}`)
    var myHeaders = new Headers();
    myHeaders.append("x-rapidapi-key", API_KEY);
    myHeaders.append("x-rapidapi-host", "api-football-v1.p.rapidapi.com");

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  return fetch(`https://api-football-v1.p.rapidapi.com/v3/standings?league=${leagueID}&season=2023`, requestOptions)
    .then(response => response.json())
    .then(result => {
      console.log(result)
      return result.response[0].league
    })
    .catch(err => console.log('error', err));
}

export async function getTeamFromFootballAPI(teamID){
  var myHeaders = new Headers();
  myHeaders.append("x-rapidapi-key", "2c757fa3bfmshf86a6f2723cb65ap152a89jsn646a5d9c51fc");
  myHeaders.append("x-rapidapi-host", "api-football-v1.p.rapidapi.com");

  var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
  };

  return fetch(`https://api-football-v1.p.rapidapi.com/v3/teams?id=${teamID}`, requestOptions)
    .then(response => response.json())
    .then(result => {
      return result.response[0]
    })
    .catch(err => console.log('error', err));
}

export async function getNextFixturesFromFootbalAPI(teamID){
  var myHeaders = new Headers();
  myHeaders.append("x-rapidapi-key", "2c757fa3bfmshf86a6f2723cb65ap152a89jsn646a5d9c51fc");
  myHeaders.append("x-rapidapi-host", "api-football-v1.p.rapidapi.com");

  var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
  };

  return fetch(`https://api-football-v1.p.rapidapi.com/v3/fixtures?team=${teamID}&next=10`, requestOptions)
    .then(response => response.json())
    .then(result => {
      console.log(result)
      return result.response
    })
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