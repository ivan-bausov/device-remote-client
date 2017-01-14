/**
 * @author Ivan Bausov
 * Date: 14/01/17
 * Time: 16:56
 */

declare namespace DRC {
    export interface Client {
        click():Client;

        left():Client;
        right():Client;
        up():Client;
        down():Client;

        back():Client;
        waitForState(state:any):Client;
    }
}
