/**
 * @author Ivan Bausov
 * Date: 14/01/17
 * Time: 16:56
 */
import {DRC} from "./types/interfaces";
import {Inject} from "intakejs";
import Deferred from "./helpers/Deferred";

export default class Client implements DRC.Client {
    public key(code:DRC.Key):DRC.Client {
        this.addAction(() => this.remote_control.key(code));
        return this;
    }

    public wait(state:any, timeout_ms?:number):DRC.Client {
        let wait_deferred:Deferred<void> = new Deferred<void>();
        this.addAction(() => wait_deferred.promise);
        this.feedback_system.once(state, () => wait_deferred.resolve());
        return this;
    }

    public done(cb:() => void):DRC.Client {
        this.addAction(cb);
        return this;
    }

    private addAction(cb:() => void|Promise<void>):void {
        if (this.promise) {
            this.promise = this.promise.then(cb);
        } else {
            this.promise = cb();
        }
    }

    @Inject(DRC.RemoteControl)
    private remote_control:DRC.RemoteControl;

    @Inject(DRC.FeedbackSystem)
    private feedback_system:DRC.FeedbackSystem;

    private promise:Promise<void>|void;
}