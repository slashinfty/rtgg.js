class Leaderboard {
    constructor (self) {
        this._fetch = self._fetch;
        this._paginatedFetch = self._paginatedFetch;
    }

    get (id, callback = data => data) {
        return this._fetch(`${id}/leaderboards/data`, callback);
    }
}

module.exports = Leaderboard;