class Category {
    constructor (self) {
        this._fetch = self._fetch;
        this._paginatedFetch = self._paginatedFetch;
    }

    get (slug, callback = data => data) {
        return this._fetch(`${slug}/data`, callback);
    }

    getRaces (slug, callback = data => data, users = false) {
        return users ? this._paginatedFetch(`${slug}/races/data?show_entrants=true`, false, callback) : this._paginatedFetch(`${slug}/races/data`, false, callback);
    }

    getRecentRaces (slug, callback = data => data, users = false) {
        return users ? this._paginatedFetch(`${slug}/races/data?show_entrants=true`, true, callback) : this._paginatedFetch(`${slug}/races/data`, true, callback);
    }
}

module.exports = Category;