import rankingController from './controller/ranking.js'
import teamController from './controller/team.js'

export const main = {
    hash: '#ranking',
    init: rankingController
}

export const team = {
    hash: '#team',
    init: teamController
}