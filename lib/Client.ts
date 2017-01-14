import {DRC} from "./types/interfaces";
/**
 * @author Ivan Bausov
 * Date: 14/01/17
 * Time: 16:56
 */

export default class Client implements DRC.Client {
    public key(code:DRC.Key):DRC.Client {
        return this;
    }

    public wait(state:any, timeout_ms?:number):DRC.Client {
        return this;
    }

    public done(cb:()=>void):DRC.Client {
        return this;
    }
}