import WebSocket from 'ws';

/**
 * Class representing a WebSocket connection
 */
export class rtggWebSocket {
    /**
     * The root address of the API
     * @private
     * @constant
     * @default 'wss://racetime.gg'
     */
     #root : string;

    /**
     * The WebSocket connection
     * @private
     */
    #connection: WebSocket;

    /**
     * The message event listener
     * @private
     */
    #messageHandler: (...args: any[]) => void;

    /**
     * Creates a WebSocket connection
     * 
     * The `messageHandler` function should have a single parameter representing the raw WebSocket data, then immediately process it:
     * ```js
     * const exampleFunction = message => {
     *     const data = JSON.parse(message.data);
     *     // continue here
     * }
     * ```
     * The different message types can be viewed [here](https://github.com/racetimeGG/racetime-app/wiki/Category-bots#receiving-messages)
     * @param url - The WebSocket URL as it appears in the [race detail](https://github.com/racetimeGG/racetime-app/wiki/Public-API-endpoints#field-breakdown-4)
     * @param messageHandler - Function that handles message events
     */
    constructor(url: string, messageHandler: (...args: any[]) => void) {
        this.#root = 'wss://racetime.gg'
        this.#connection = new WebSocket(`${this.#root}${url}`);
        this.#messageHandler = messageHandler;
        this.#connection.addListener('message', this.#messageHandler);
    }

    /**
     * Update the function that handles message events (see the constructor for more information)
     * @param messageHandler - Function that handles message events
     */
    update(messageHandler: (...args: any[]) => void) {
        this.#connection.removeEventListener('message', this.#messageHandler);
        this.#messageHandler = messageHandler;
        this.#connection.addEventListener('message', this.#messageHandler);
    }

    /**
     * Pause the WebSocket connection
     */
    pause() {
        this.#connection.pause();
    }

    /**
     * Resume the WebSocket connection
     */
    resume() {
        this.#connection.resume();
    }

    /**
     * Close the WebSocket connection
     */
    close() {
        this.#connection.close();
    }
}