/* eslint-disable */
export interface Service {
    create(x: object): Promise<object>;
    update(x: object, params: object): Promise<object>;
    get(x: object): Promise<object>;
    getList(x: object): Promise<object>;
}
