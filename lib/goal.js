class Goal {
    constructor (self) {
        this._fetch = self._fetch;
        this._paginatedFetch = self._paginatedFetch;
    }

    async getLeaderboard (slug, goal, callback = data => data) {
        const leaderboards = await this._fetch(`${slug}/leaderboards/data`, data => data);
        const leaderboard = leaderboards.find(lb => lb.goal.toLowerCase() === goal.toLowerCase());
        return leaderboard === undefined ? callback({}) : callback(leaderboard);
    }

    async getRaces (slug, goal, callback = data => data, users = false) {
        const races = users ? await this._paginatedFetch(`${slug}/races/data?show_entrants=true`, false, data => data) : await this._paginatedFetch(`${slug}/races/data`, false, data => data);
        return callback(races.filter(race => race.goal.name.toLowerCase() === goal.toLowerCase()));
    }
}

module.exports = Goal;