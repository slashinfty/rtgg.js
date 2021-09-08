class Race {
    constructor (self) {
        this._fetch = self._fetch;
        this._paginatedFetch = self._paginatedFetch;
    }

    get (slug, room, callback = data => data) {
        return this._fetch(`${slug}/${room}/data`, callback);
    }

    getActive (callback = data => data) {
        return this._fetch(`races/data`, callback);
    }
}

module.exports = Race;