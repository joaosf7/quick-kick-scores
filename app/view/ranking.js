export default function render(league) {

    console.log(`league: ${league}`)
    let rankingTitle = $('<div>').attr({
        "id": "ranking-title-box"
    })

    rankingTitle.append($('<img>').attr({
        "id": "league-logo",
        "src": league.logo,
        "alt": "league logo"
    }))

    rankingTitle.append($("<h1>").attr({
        "id": "league-title"
    })
    .text(league.name))

    rankingTitle.append($('<img>').attr({
        'id': 'leage-flag',
        'src': league.flag
    }))

    $('#container').empty().append(rankingTitle);

    let rankings = league.standings[0]

    let table =`
        <table id="rankings-table" class="table table-hover">
            <thead>
            <tr id='table-header'>
                <th scope="col">#</th>
                <th scope="col">Team</th>
                <th scope="col">Pts</th>
                <th scope="col">MP</th>
                <th scope="col">W</th>
                <th scope="col">D</th>
                <th scope="col">GF</th>
                <th scope="col">GA</th>
                <th scope="col">GD</th>
            </tr>
            </thead>
            <tbody>
    `
    rankings.forEach((rank) => table += `
        <tr onclick="window.location.hash = '#team${rank.team.id}';" style="cursor: pointer;">
            <th scope="row" class='points'>${rank.rank}</th>
            <td id="team-field"'><img id='team-logo' src='${rank.team.logo}'/>${rank.team.name}</td>
            <td id='points-data' class='points'>${rank.points}</td>
            <td class='points'>${rank.all.played}</td>
            <td class='points'>${rank.all.win}</td>
            <td class='points'>${rank.all.draw}</td>
            <td class='points'>${rank.all.goals.for}</td>
            <td class='points'>${rank.all.goals.against}</td>
            <td class='points'>${rank.goalsDiff}</td>
        </tr>
    `)

    table += `
        </tbody>
        </table>
    `
    /*
    table += `
            <tr>
                <th scope="row">2</th>
                <td>Benfica</td>
                <td>52</td>
                <td>13</td>
                <td>13</td>
                <td>13</td>
                <td>13</td>
                <td>13</td>
                <td>13</td>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>Porco</td>
                <td>52</td>
                <td>13</td>
                <td>13</td>
                <td>13</td>
                <td>13</td>
                <td>13</td>
                <td>13</td>
            </tr>
            <tr>
                <th scope="row">4</th>
                <td>Sporting</td>
                <td>52</td>
                <td>13</td>
                <td>13</td>
                <td>13</td>
                <td>13</td>
                <td>13</td>
                <td>13</td>
            </tr>
            <tr>
                <th scope="row">5</th>
                <td>Sporting</td>
                <td>52</td>
                <td>13</td>
                <td>13</td>
                <td>13</td>
                <td>13</td>
                <td>13</td>
                <td>13</td>
            </tr>
            <tr>
                <th scope="row">6</th>
                <td>Sporting</td>
                <td>52</td>
                <td>13</td>
                <td>13</td>
                <td>13</td>
                <td>13</td>
                <td>13</td>
                <td>13</td>
            </tr>
            <tr>
                <th scope="row">7</th>
                <td>Sporting</td>
                <td>52</td>
                <td>13</td>
                <td>13</td>
                <td>13</td>
                <td>13</td>
                <td>13</td>
                <td>13</td>
            </tr>
            </tbody>
        </table>
    `
    */
    let rankingTable = $('<div>').append(table)
    $('#container').append(rankingTable)
}
