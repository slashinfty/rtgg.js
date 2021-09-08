class Leaderboard {
    constructor (self) {
        this._fetch = self._fetch;
        this._paginatedFetch = self._paginatedFetch;
    }

    get (slug, callback = data => data) {
        return this._fetch(`${slug}/leaderboards/data`, callback);
    }
}

module.exports = Leaderboard;