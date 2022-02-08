/** */
export declare class BusService {
    /**
     * Sends a request.
     * @param topic Topic.
     * @param payload Payload.
     */
    send<T = void, R = void>(topic: string, payload?: T): Promise<R>;
    /**
     * Emits an event to all the topic listeners.
     * @param topic Topic.
     * @param payload Payload.
     */
    emit<T = void>(topic: string, payload?: T): Promise<void>;
}
