class Goal {
    constructor (self) {
        this._fetch = self._fetch;
        this._paginatedFetch = self._paginatedFetch;
    }

    getLeaderboard (cat, goal, callback = data => data) {
        const leaderboards = this._fetch(`${cat}/leaderboards/data`, data => data);
        const leaderboard = leaderboards.find(lb => lb.goal.toLowerCase() === goal.toLowerCase());
        return leaderboard === undefined ? callback({}) : callback(leaderboard);
    }

    getRaces (cat, goal, callback = data => data, users = false) {
        const races = users ? this._paginatedFetch(`${cat}/races/data?show_entrants=true`, false, data => data) : this._paginatedFetch(`${cat}/races/data`, false, data => data);
        return callback(races.filter(race => race.goal.name.toLowerCase() === goal.toLowerCase()));
    }
}

module.exports = Goal;