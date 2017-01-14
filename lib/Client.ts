/**
 * @author Ivan Bausov
 * Date: 14/01/17
 * Time: 16:56
 */

export default class Client implements DRC.Client {
    public click():DRC.Client {
        return this;
    }

    public left():DRC.Client {
        return this;
    }

    public right():DRC.Client {
        return this;
    }

    public up():DRC.Client {
        return this;
    }

    public down():DRC.Client {
        return this;
    }

    public back():DRC.Client {
        return this;
    }

    public waitForState(state:any):DRC.Client {
        return this;
    }

}