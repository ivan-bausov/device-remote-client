/**
 * @author Ivan Bausov
 * Date: 14/01/17
 * Time: 20:09
 */

export default class Deferred<T> {
    constructor() {
        this.promise = new Promise<T>((resolve:(param:T)=>void, reject:(error:any)=>void) => {
            this.resolve_promise = (param:T) => resolve(param);
            this.reject_promise = (error:any) => reject(error);
        });
    }

    public resolve():Promise<T> {
        return this.promise;
    }

    public reject():Promise<T> {
        return this.promise;
    }

    public promise:Promise<T>;

    private resolve_promise:(param:T) => void;
    private reject_promise:(error:T) => void;
}
