# rtgg.js
A JavaScript API wrapper for racetime.gg

## Install
`npm i rtgg.js`

## Initialization
```js
const rtggClient = require('rtgg.js');

const rtgg = new rtggClient();
```

## Usage
All functions return a promise with the data it fetches. It is strongly suggested to `await` each function call (which requires the calls to be within an `async` function).

They each have an optional callback function parameter so data can be manipulated before returning.

### Categories
`id` is the category slug (example: `ootr`).

`rtgg.Categories.get(id, callback)`

Returns basic information about a category ([field breakdown](https://github.com/racetimeGG/racetime-app/wiki/Public-API-endpoints#field-breakdown-2)).

`rtgg.Categories.getRecentRaces(id, callback, users = false)`

Returns an array of the 10 most recent races in the category ([field breakdown](https://github.com/racetimeGG/racetime-app/wiki/Public-API-endpoints#field-breakdown-1)).

If `users` is `true`, each race in the array will include an breakdown of the users ([field breakdown](https://github.com/racetimeGG/racetime-app/wiki/Public-API-endpoints#field-breakdown-entrant)).

`rtgg.Categories.getRaces(id, callback, users = false)`

Returns an array of all previous races in the category.

### Goals
`category` is the category slug and `goal` is the goal (as a string).

`rtgg.Goals.getLeaderboard(category, goal, callback)`

Returns the leaderboard for the goal ([field breakdown](https://github.com/racetimeGG/racetime-app/wiki/Public-API-endpoints#field-breakdown-3)).

`rtgg.Goals.getRaces(category, goal, callback, users = false)`

Returns an array of all previous races with the goal ([field breakdown](https://github.com/racetimeGG/racetime-app/wiki/Public-API-endpoints#field-breakdown-1)).

If `users` is `true`, each race in the array will include an breakdown of the users ([field breakdown](https://github.com/racetimeGG/racetime-app/wiki/Public-API-endpoints#field-breakdown-entrant)).

### Leaderboards
`id` is the category slug.

`rtgg.Leaderboards.get(id, callback)`

Returns an array of all leaderboards in the category ([field breakdown](https://github.com/racetimeGG/racetime-app/wiki/Public-API-endpoints#field-breakdown-3)).

### Races
`category` is the category slug, and `id` is the race room identifier (example: `social-kirby-4429`).

`rtgg.Races.get(category, id, callback)`

Returns a comprehensive list of information about a race ([field breakdown](https://github.com/racetimeGG/racetime-app/wiki/Public-API-endpoints#field-breakdown-4)).

`rtgg.Races.getActive(callback)`

Returns an array of all open and ongoing races ([field breakdown](https://github.com/racetimeGG/racetime-app/wiki/Public-API-endpoints#field-breakdown-1)).

### Users
`name` is a name, partial name, or a name and discriminator and `id` is the user ID.

`rtgg.Users.get(name, callback)`

Searches for and returns an array of matched users ([field breakdown](https://github.com/racetimeGG/racetime-app/wiki/Public-API-endpoints#user-data)).

`rtgg.Users.getRecentRaces(id, callback, users = false)`

Returns an array of the 10 most recent races the user participated in ([field breakdown](https://github.com/racetimeGG/racetime-app/wiki/Public-API-endpoints#field-breakdown-1)).

If `users` is `true`, each race in the array will include an breakdown of the users ([field breakdown](https://github.com/racetimeGG/racetime-app/wiki/Public-API-endpoints#field-breakdown-entrant)).

`rtgg.Users.getRaces(id, callback, users = false)`

Returns an array of all previous races the user participated in.

## Example
```js
const rtggClient = require('rtgg.js');
const rtgg = new rtggClient();

const getLastRaceRank = async name => {
    const userId = await rtgg.Users.get(name, data => data.results[0].id);
    const race = await rtgg.Users.getRecentRaces(userId, data => data[0], true);
    const user = race.entrants.find(u => u.user.id === userId);
    console.log(user.place);
}

getLastRaceRank('slashinfty');
```