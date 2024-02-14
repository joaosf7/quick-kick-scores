import { getRankingsFromFootballAPI } from '../service/api.js'
import navbarView from '../view/navbar.js'
import rankingView from '../view/ranking.js'

export default function init() {
    const country = window.location.hash.slice(9, window.location.hash.length)
    navbarView()
    getRankingsFromFootballAPI(country).then(league => rankingView(league))
    /*
    fetch('/app/assets/testDataPremierLeagueRankings.json')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            rankingView(data.response[0].league)
        })
        .catch(err => console.log(err))
    */
}
