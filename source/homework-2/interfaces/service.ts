/* eslint-disable */
export interface Service {
    create(entity: object): Promise<object>;
    update(entity: object, params: object): Promise<object>;
    get(params: object): Promise<object>;
    getList(params: object): Promise<object>;
}
