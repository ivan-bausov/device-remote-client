/**
 * @author Ivan Bausov
 * Date: 14/01/17
 * Time: 20:03
 */
import {injector} from "intakejs";
import RemoteControlMock from "./RemoteControlMock";
import {DRC} from "../../../lib/types/interfaces";
import Client from "../../../lib/Client";

describe('Client RemoteControl interaction', () => {
    let remote_control:RemoteControlMock;
    let client:DRC.Client;
    let remote_control_spy:jasmine.Spy;

    beforeEach(() => {
        remote_control = new RemoteControlMock();
        remote_control_spy = spyOn(remote_control, 'key').and.callThrough();
        injector.mock(DRC.RemoteControl, remote_control);
        client = new Client();
    });

    afterEach(() => {
        injector.clearMocks();
    });

    it('client calls RemoteControl', () => {
        client.key(DRC.Key.UP);
        expect(remote_control_spy).toHaveBeenCalledWith(DRC.Key.UP);
    });

    it('client does not call RemoteControl before previous call resolved', (done) => {
        client.key(DRC.Key.UP);
        client.key(DRC.Key.DOWN);

        expect(remote_control_spy.calls.count()).toBe(1);

        remote_control.last().deferred.resolve().then(() => remote_control.last().deferred.resolve());

        client.done(() => {
            expect(remote_control_spy.calls.count()).toBe(2);
            done();
        });
    });

});