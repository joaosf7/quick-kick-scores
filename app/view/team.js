export default function render(teamInfo, nextFixtures) {
    const team = teamInfo.team
    const venue = teamInfo.venue

    $('#container').empty().append(`
        <div id="team-title-box">
            <img id="team-logo-big" src=${team.logo} alt="team logo"/>
            <h1>${team.name}</h1>
        </div>
        <div id="team-info">
            <p class='info'>Country: ${team.country}</p>
            <p class='info'>Founded: ${team.founded}</p>
        </div>
        <h2 id='venue-name'>${venue.name}</h2>
        <div id="venue-box">
            <img id="venue-image" src=${venue.image} alt="venue image"/>
            <div id="venue-details">
                <p class="info">Capacity: ${venue.capacity}</p>
                <p class="info">Location: ${venue.city}</p>
            </div>
        </div>
    `)
    $('#container').append(`<h1 id='next-fixtures-title'>Next matches</h1>`)

    let nextFixturesBox = $('<div>').attr({"id":"next-fixtures-box"})
    nextFixtures.forEach((fixture, index) => {
        nextFixturesBox.append(`
            <div id='vs-box'>
                <div id='home-team'>
                    <h2 class='team-name'>${fixture.teams.home.name}</h2>
                    <img class='team-vs-logo' src=${fixture.teams.home.logo} alt='home team logo'
                        onclick="window.location.hash = '#team${fixture.teams.home.id}';" style="cursor: pointer;"/>
                </div>
                <img id='vs-logo' src='/app/assets/images/vsImage.png' alt='vs image'/>
                <div id='away-team'>
                    <h2 class='team-name'>${fixture.teams.away.name}</h2>
                    <img class='team-vs-logo' src=${fixture.teams.away.logo} alt='away team logo'
                    onclick="window.location.hash = '#team${fixture.teams.away.id}';" style="cursor: pointer;"/>
                </div>
            </div>
        `)
        let refStr = fixture.fixture.referee ? `                   
            <p id='ref-name'>Referee</p>
            <p>${fixture.fixture.referee}</p>
        ` : ''
        nextFixturesBox.append(`
            <div id='vs-details-box'>
                <div id='date-and-ref-box'>
                    <p>${(fixture.fixture.date).slice(0, 10) + " " + fixture.fixture.date.slice(11, 16)}</p>
                    ${refStr}
                </div>
                <div id='vs-league-info-box'>
                    <h3 id='vs-league-name'>${fixture.league.name}</h3>
                    <img id='vs-league-logo' src=${fixture.league.logo} alt='league logo'/>
                    <h4>Round: ${fixture.league.round}</h4>
                </div>
                <div id='vs-stadium-info'>
                    <h3>Location</h3>
                    <p>${fixture.fixture.venue.name}</p>
                    <p>${fixture.fixture.venue.city}</p>
                </div>
            </div>
        `)
        let appendImage = index === nextFixtures.length-1 ? '' : `<img class='line' src='/app/assets/images/line.png' alt='break line'/>`
        nextFixturesBox.append(appendImage)
    })
    $('#container').append(nextFixturesBox)
    
}
