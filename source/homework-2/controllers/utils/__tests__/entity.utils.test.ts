import {
    entityQueryParamNotProvided,
    entityNotFound,
    entityDeleted
} from '../entity.utils';

describe('Entity utils', () => {
    test('entityNotFound() should be called correctly', () => {
        expect(entityNotFound('1')).toEqual(
            'The entity with 1 id was not found.'
        );
    });

    test('entityDeleted() should be called correctly', () => {
        expect(entityDeleted('1')).toEqual(
            'The entity with 1 id has been softly deleted.'
        );

        expect(entityDeleted('1', false)).toEqual(
            'The entity with 1 id has been deleted.'
        );
    });

    test('entityQueryParamNotProvided() should be called correctly', () => {
        expect(entityQueryParamNotProvided()).toEqual(
            'The entity required query params are not provided'
        );
    });
});
