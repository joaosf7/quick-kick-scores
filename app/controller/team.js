import { getTeamFromFootballAPI, getNextFixturesFromFootbalAPI } from '../service/api.js';
import navbarView from '../view/navbar.js'
import teamView from '../view/team.js';

export default function init() {
    navbarView()
    const  teamID = window.location.hash.slice(5, window.location.hash.length);
    Promise.all([getTeamFromFootballAPI(teamID), getNextFixturesFromFootbalAPI(teamID)])
        .then(results => {
            const [teamInfo, nextFixtures] = results;
            teamView(teamInfo, nextFixtures);
        })
        .catch((err) => console.log(err))
    teamView(teamInfo, nextFixtures)
  /* 
   Promise.all([fetch('/app/assets/testDataTOTTeamInfo.json'), fetch('/app/assets/testDataTOTNextFixtures.json')])
        .then(results => {
            let [teamInfoJson, nextFixturesJson] = results;
            return Promise.all([teamInfoJson.json(), nextFixturesJson.json()]);
        })
        .then(data => teamView(data[0], data[1]))
        .catch(err => console.log(`Error fetching data: ${err}`));
    */
}