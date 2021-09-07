class Race {
    constructor (self) {
        this._fetch = self._fetch;
        this._paginatedFetch = self._paginatedFetch;
    }

    get (cat, id, callback = data => data) {
        return this._fetch(`${cat}/${id}/data`, callback);
    }

    getActive (callback = data => data) {
        return this._fetch(`races/data`, callback);
    }
}

module.exports = Race;