const fetch = require('node-fetch');
const Category = require('./lib/category');
const Goal = require('./lib/goal');
const Leaderboard = require('./lib/leaderboard');
const Race = require('./lib/race');
const User = require('./lib/user');

class rtggClient {
    constructor() {
        this.Categories = new Category(this);
        this.Goals = new Goal(this);
        this.Leaderboards = new Leaderboard(this);
        this.Races = new Race(this);
        this.Users = new User(this);
    }

    async _fetch (path, callback) {
        const url = `https://racetime.gg/${path}`;
        const response = await fetch(url);
        if (response.status !== 200) {
            console.log(response.statusText);
            return;
        }
        const payload = await response.json();
        return callback(payload);
    }

    async _paginatedFetch (path, limit, callback) {
        const url = `https://racetime.gg/${path}`;
        const response = await fetch(url);
        if (response.status !== 200) {
            console.log(response.statusText);
            return;
        }
        const object = await response.json();
        if (limit) return callback(object.races);
        let page = 1;
        let payload;
        do {
            if (page !== 1) {
                const pageUrl = url.includes('?') ? `${url}&page=${page}` : `${url}?page=${page}`;
                const pageResponse = await fetch(pageUrl);
                if (pageResponse.status !== 200) {
                    console.log(response.statusText);
                    break;
                }
                const pageObject = await pageResponse.json();
                payload = payload.concat(pageObject.races);
            } else payload = object.races;
            page++;
        } while (page <= object.num_pages);
        return callback(payload);
    }
}

module.exports = rtggClient;