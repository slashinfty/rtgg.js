/**
 * Class representing the API wrapper
 */
class rtgg {
    /**
     * The root address of the API
     * @private
     * @constant
     * @default 'https://racetime.gg'
     */
    #root : string;

    /**
     * Creates an API wrapper
     */
    constructor() {
        this.#root = 'https://racetime.gg';
    }

    /**
     * Fetches information from public endpoints of the API
     * @param path - Path to API endpoint
     * @param property - Property to return
     * @param page - Page number of paginated requests
     * @private
     * @throws Will throw an error if status code is not 200
     * @returns An object or array of objects representing the data
     */
    async #get(path: string, property: string = undefined, page: number = 1) {
        const url = `${this.#root}${path}${/\?/.test(path) ? `&page=${page}` : `?page=${page}`}`;
        const response = await fetch(url);
        if (response.status !== 200) {
            throw response.statusText;
        }
        const payload = await response.json();
        const data = property ? [...payload[property]] : payload;
        if (payload.hasOwnProperty('num_pages') && page < payload.num_pages) {
            const paginatedData = await this.#get(path, property, page + 1);
            data.push(...paginatedData);
        }
        return data;
    }

    /**
     * Fetches details of a category
     * @param category - The category shortname
     * @returns An object representing the [category details](https://github.com/racetimeGG/racetime-app/wiki/Public-API-endpoints#field-breakdown-2)
     */
    async categoryDetails(category: string) : Promise<Object> {
        const data = await this.#get(`/${category}/data`);
        return data;
    }

    /**
     * Fetches all previous races of a category
     * @param category - The category shortname
     * @param showEntrants - Whether or not to expand [entrant details](https://github.com/racetimeGG/racetime-app/wiki/Public-API-endpoints#field-breakdown-entrant)
     * @returns An array of objects representing the [races](https://github.com/racetimeGG/racetime-app/wiki/Public-API-endpoints#field-breakdown-1) in the category
     */
    async categoryRaces(category: string, showEntrants: boolean = false) : Promise<Object[]> {
        const data = await this.#get(`/${category}/races/data?show_entrants=${showEntrants}`, 'races');
        return data;
    }

    /**
     * Fetches all leaderboards of a category
     * @param category - The category shortname
     * @returns An array of objects representing the [leaderboards](https://github.com/racetimeGG/racetime-app/wiki/Public-API-endpoints#field-breakdown-3)
     */
    async categoryLeaderboards(category: string) : Promise<Object[]> {
        const data = await this.#get(`/${category}/leaderboards/data`, 'leaderboards');
        return data;
    }

    /**
     * Fetches all open and ongoing races
     * @returns An array of objects representing the open and ongoing [races](https://github.com/racetimeGG/racetime-app/wiki/Public-API-endpoints#field-breakdown-1)
     */
    async races() : Promise<Object[]> {
        const data = await this.#get(`/races/data`, 'races');
        return data;
    }

    /**
     * Fetches details of a race
     * @param category - The category shortname
     * @param room - The room name
     * @returns An object representing the [race](https://github.com/racetimeGG/racetime-app/wiki/Public-API-endpoints#field-breakdown-4)
     */
    async raceDetails(category: string, room: string) : Promise<Object> {
        const data = await this.#get(`/${category}/${room}/data`);
        return data;
    }

    /**
     * Fetches users matching a search parameter
     * @param query - The name, partial name, discriminator, or name and discriminator to search for
     * @param type - One of three types of searches ([more information](https://github.com/racetimeGG/racetime-app/wiki/Public-API-endpoints#user-search))
     * @returns An array of matched [users](https://github.com/racetimeGG/racetime-app/wiki/Public-API-endpoints#user-data)
     */
    async userSearch(query: string, type: 'name' | 'scrim' | 'term') : Promise<Object[]> {
        const data = await this.#get(`/user/search?${type}=${query}`, 'results');
        return data;
    }

    /**
     * Fetches all previous races for a user
     * @param user - The ID of the user
     * @param showEntrants - Whether or not to expand [entrant details](https://github.com/racetimeGG/racetime-app/wiki/Public-API-endpoints#field-breakdown-entrant)
     * @returns An array of objects representing the [races](https://github.com/racetimeGG/racetime-app/wiki/Public-API-endpoints#field-breakdown-1) for the user
     */
    async userRaces(user: string, showEntrants: boolean = false) : Promise<Object[]> {
        const data = await this.#get(`/user/${user}/races/data?show_entrants=${showEntrants}`, 'races');
        return data;
    }
}

module.exports = rtgg;