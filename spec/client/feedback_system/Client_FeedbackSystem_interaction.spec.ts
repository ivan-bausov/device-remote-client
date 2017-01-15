/**
 * @author Ivan Bausov
 * Date: 15/01/17
 * Time: 07:59
 */
import FeedbackSystemMock from "./FeedbackSystemMock";
import Client from "../../../lib/Client";
import {injector} from "intakejs";
import {DRC} from "../../../lib/types/interfaces";

describe('Client <-> FeedbackSystem', () => {
    let feedback_system:FeedbackSystemMock;
    let feedback_system_spy:jasmine.Spy;
    let client:Client;

    beforeEach(() => {
        feedback_system = new FeedbackSystemMock();
        feedback_system_spy = spyOn(feedback_system, 'once').and.callThrough();
        injector.mock(DRC.FeedbackSystem, feedback_system);
        client = new Client();
        jasmine.clock().install();
    });

    afterEach(() => {
        jasmine.clock().uninstall();
        injector.clearMocks();
    });

    it('calls FeedbackSystem.prototype.once to subscribe for state', () => {
        let state:any = {state: 'state'};

        client.wait(state);

        expect(feedback_system_spy.calls.count()).toBe(1);
        expect(feedback_system_spy.calls.argsFor(0)).toEqual(jasmine.arrayContaining([state]));
    });

    it('client waits for appropriate feedback system state event', (done) => {
        const FEEDBACK_SYSTEM_TIMEOUT:number = 1000;
        let state:any = {state: 'state'};
        let is_triggered:boolean = false;

        client
            .wait(state)
            .done(() => {
                expect(is_triggered).toBe(true);
                done();
            });

        setTimeout(() => {
            is_triggered = true;
            feedback_system.trigger(state);
        }, FEEDBACK_SYSTEM_TIMEOUT);


        jasmine.clock().tick(1000);
    });
});