/**
 * @author Ivan Bausov
 * Date: 14/01/17
 * Time: 16:56
 */

declare namespace DRC {
    export type Key = 'Key';

    export interface Client {
        key(code:Key):Client;
        wait(state:any, timeout_ms?:number):Client;
    }
}
