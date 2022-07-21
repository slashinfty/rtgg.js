# Class: rtggClient

Class representing the API wrapper

## Table of contents

### Constructors

- [constructor](rtggClient.md#constructor)

### Methods

- [categoryDetails](rtggClient.md#categorydetails)
- [categoryLeaderboards](rtggClient.md#categoryleaderboards)
- [categoryRaces](rtggClient.md#categoryraces)
- [raceDetails](rtggClient.md#racedetails)
- [races](rtggClient.md#races)
- [userRaces](rtggClient.md#userraces)
- [userSearch](rtggClient.md#usersearch)

## Constructors

### constructor

• **new rtggClient**()

Creates an API wrapper

#### Defined in

Client.ts:16

## Methods

### categoryDetails

▸ **categoryDetails**(`category`): `Promise`<`Object`\>

Fetches details of a category

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `category` | `string` | The category shortname |

#### Returns

`Promise`<`Object`\>

An object representing the [category details](https://github.com/racetimeGG/racetime-app/wiki/Public-API-endpoints#field-breakdown-2)

#### Defined in

Client.ts:49

___

### categoryLeaderboards

▸ **categoryLeaderboards**(`category`): `Promise`<`Object`[]\>

Fetches all leaderboards of a category

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `category` | `string` | The category shortname |

#### Returns

`Promise`<`Object`[]\>

An array of objects representing the [leaderboards](https://github.com/racetimeGG/racetime-app/wiki/Public-API-endpoints#field-breakdown-3)

#### Defined in

Client.ts:70

___

### categoryRaces

▸ **categoryRaces**(`category`, `showEntrants?`): `Promise`<`Object`[]\>

Fetches all previous races of a category

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `category` | `string` | `undefined` | The category shortname |
| `showEntrants` | `boolean` | `false` | Whether or not to expand [entrant details](https://github.com/racetimeGG/racetime-app/wiki/Public-API-endpoints#field-breakdown-entrant) |

#### Returns

`Promise`<`Object`[]\>

An array of objects representing the [races](https://github.com/racetimeGG/racetime-app/wiki/Public-API-endpoints#field-breakdown-1) in the category

#### Defined in

Client.ts:60

___

### raceDetails

▸ **raceDetails**(`category`, `room`): `Promise`<`Object`\>

Fetches details of a race

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `category` | `string` | The category shortname |
| `room` | `string` | The room name |

#### Returns

`Promise`<`Object`\>

An object representing the [race](https://github.com/racetimeGG/racetime-app/wiki/Public-API-endpoints#field-breakdown-4)

#### Defined in

Client.ts:90

___

### races

▸ **races**(): `Promise`<`Object`[]\>

Fetches all open and ongoing races

#### Returns

`Promise`<`Object`[]\>

An array of objects representing the open and ongoing [races](https://github.com/racetimeGG/racetime-app/wiki/Public-API-endpoints#field-breakdown-1)

#### Defined in

Client.ts:79

___

### userRaces

▸ **userRaces**(`user`, `showEntrants?`): `Promise`<`Object`[]\>

Fetches all previous races for a user

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `user` | `string` | `undefined` | The ID of the user |
| `showEntrants` | `boolean` | `false` | Whether or not to expand [entrant details](https://github.com/racetimeGG/racetime-app/wiki/Public-API-endpoints#field-breakdown-entrant) |

#### Returns

`Promise`<`Object`[]\>

An array of objects representing the [races](https://github.com/racetimeGG/racetime-app/wiki/Public-API-endpoints#field-breakdown-1) for the user

#### Defined in

Client.ts:112

___

### userSearch

▸ **userSearch**(`query`, `type`): `Promise`<`Object`[]\>

Fetches users matching a search parameter

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `query` | `string` | The name, partial name, discriminator, or name and discriminator to search for |
| `type` | ``"name"`` \| ``"scrim"`` \| ``"term"`` | One of three types of searches ([more information](https://github.com/racetimeGG/racetime-app/wiki/Public-API-endpoints#user-search)) |

#### Returns

`Promise`<`Object`[]\>

An array of matched [users](https://github.com/racetimeGG/racetime-app/wiki/Public-API-endpoints#user-data)

#### Defined in

Client.ts:101
