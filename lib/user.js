class User {
    constructor (self) {
        this._fetch = self._fetch;
        this._paginatedFetch = self._paginatedFetch;
    }

    get (name, callback = data => data) {
        return this._fetch(`user/search?term=${name}`, callback);
    }

    getRaces (id, callback = data => data, users = false) {
        return users ? this._paginatedFetch(`user/${id}/races/data?show_entrants=true`, false, callback) : this._paginatedFetch(`user/${id}/races/data`, false, callback);
    }

    getRecentRaces (id, callback = data => data, users = false) {
        return users ? this._paginatedFetch(`user/${id}/races/data?show_entrants=true`, true, callback) : this._paginatedFetch(`user/${id}/races/data`, true, callback);
    }
}

module.exports = User;