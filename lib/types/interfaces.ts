/**
 * @author Ivan Bausov
 * Date: 14/01/17
 * Time: 16:56
 */

export namespace DRC {
    export type Key = 'Key';

    export const Key = {
        UP: 'up' as Key,
        RIGHT: 'right' as Key,
        DOWN: 'down' as Key,
        LEFT: 'left' as Key,
        OK: 'ok' as Key,
        BACK: 'back' as Key
    };

    export interface Client {
        key(code:Key):Client;
        wait(state:any, timeout_ms?:number):Client;
        done(cb:()=>void):Client;
    }

    export const RemoteControl:string = 'RemoteControl';
    export interface RemoteControl {
        key(code:Key):Promise<void>;
    }

    export const FeedbackSystem:string = 'FeedbackSystem';
    export interface FeedbackSystem {
        once(state:any, cb:() => void):void;
    }
}
