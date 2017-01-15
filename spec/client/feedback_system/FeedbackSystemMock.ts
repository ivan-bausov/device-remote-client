import {DRC} from "../../../lib/types/interfaces";
/**
 * @author Ivan Bausov
 * Date: 15/01/17
 * Time: 08:01
 */

export default class FeedbackSystemMock implements DRC.FeedbackSystem{
    public once(state:any, cb:() => void):void {
        this.callbacks.push(cb);
    }

    public trigger(state:any):void {
        let callback:() => void = this.callbacks.pop();
        callback && callback();
    }

    private callbacks:(() => void)[] = [];
}