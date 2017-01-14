import Client from "../../lib/Client";
import {DRC} from "../../lib/types/interfaces";

/**
 * @author Ivan Bausov
 * Date: 14/01/17
 * Time: 16:56
 */

describe('Client', () => {
    it('proof of work', () => {
        let client:DRC.Client = new Client();
        expect(client.key(DRC.Key.OK)).toBe(client);
    });
});