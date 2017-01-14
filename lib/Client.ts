/**
 * @author Ivan Bausov
 * Date: 14/01/17
 * Time: 16:56
 */

export type Key = DRC.Key;

export const Key = {
    UP: 'up' as Key,
    RIGHT: 'right' as Key,
    DOWN: 'down' as Key,
    LEFT: 'left' as Key,
    OK: 'ok' as Key,
    BACK: 'back' as Key
};

export default class Client implements DRC.Client {
    public key(code:Key):DRC.Client {
        return this;
    }

    public wait(state:any, timeout_ms?:number):DRC.Client {
        return this;
    }
}