/**
 * @author Ivan Bausov
 * Date: 14/01/17
 * Time: 20:31
 */
import Deferred from "../../../lib/helpers/Deferred";
import {DRC} from "../../../lib/types/interfaces";

export interface RemoteControlMockRequest {
    deferred:Deferred<void>;
    code:DRC.Key;
}

export default class RemoteControlMock implements DRC.RemoteControl {
    public key(code:DRC.Key):Promise<void> {
        let deferred:Deferred<void> = new Deferred<void>();

        this.requests.push({
            deferred: deferred,
            code: code
        });

        return deferred.promise;
    }

    public last():RemoteControlMockRequest {
        return this.requests[this.requests.length - 1];
    }

    public requests:RemoteControlMockRequest[] = [];
}