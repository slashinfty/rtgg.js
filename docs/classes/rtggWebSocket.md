# Class: rtggWebSocket

Class representing a WebSocket connection

## Table of contents

### Constructors

- [constructor](rtggWebSocket.md#constructor)

### Methods

- [close](rtggWebSocket.md#close)
- [pause](rtggWebSocket.md#pause)
- [resume](rtggWebSocket.md#resume)
- [update](rtggWebSocket.md#update)

## Constructors

### constructor

• **new rtggWebSocket**(`url`, `messageHandler`)

Creates a WebSocket connection

The `messageHandler` function should have a single parameter representing the raw WebSocket data, then immediately process it:
```js
const exampleFunction = message => {
    const data = JSON.parse(message.data);
    // continue here
}
```
The different message types can be viewed [here](https://github.com/racetimeGG/racetime-app/wiki/Category-bots#receiving-messages)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | The WebSocket URL as it appears in the [race detail](https://github.com/racetimeGG/racetime-app/wiki/Public-API-endpoints#field-breakdown-4) |
| `messageHandler` | (...`args`: `any`[]) => `void` | Function that handles message events |

#### Defined in

Websocket.ts:41

## Methods

### close

▸ **close**(): `void`

Close the WebSocket connection

#### Returns

`void`

#### Defined in

Websocket.ts:75

___

### pause

▸ **pause**(): `void`

Pause the WebSocket connection

#### Returns

`void`

#### Defined in

Websocket.ts:61

___

### resume

▸ **resume**(): `void`

Resume the WebSocket connection

#### Returns

`void`

#### Defined in

Websocket.ts:68

___

### update

▸ **update**(`messageHandler`): `void`

Update the function that handles message events (see the constructor for more information)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `messageHandler` | (...`args`: `any`[]) => `void` | Function that handles message events |

#### Returns

`void`

#### Defined in

Websocket.ts:52
