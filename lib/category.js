class Category {
    constructor (self) {
        this._fetch = self._fetch;
        this._paginatedFetch = self._paginatedFetch;
    }

    get (id, callback = data => data) {
        return this._fetch(`${id}/data`, callback);
    }

    getRaces (id, callback = data => data, users = false) {
        return users ? this._paginatedFetch(`${id}/races/data?show_entrants=true`, false, callback) : this._paginatedFetch(`${id}/races/data`, false, callback);
    }

    getRecentRaces (id, callback = data => data, users = false) {
        return users ? this._paginatedFetch(`${id}/races/data?show_entrants=true`, true, callback) : this._paginatedFetch(`${id}/races/data`, true, callback);
    }
}

module.exports = Category;