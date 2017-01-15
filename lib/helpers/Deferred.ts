/**
 * @author Ivan Bausov
 * Date: 14/01/17
 * Time: 20:09
 */

export default class Deferred<T> {
    constructor() {
        this.promise = new Promise<T>((resolve:(param:T)=>void, reject:(error:any)=>void) => {
            this.resolve_promise = (data:T) => resolve(data);
            this.reject_promise = (data:any) => reject(data);
        });
    }

    public resolve(data?:T):Promise<T> {
        this.resolve_promise(data);
        return this.promise;
    }

    public reject(data?:any):Promise<T> {
        this.reject_promise(data);
        return this.promise;
    }

    public promise:Promise<T>;

    private resolve_promise:(data:T) => void;
    private reject_promise:(data:T) => void;
}
