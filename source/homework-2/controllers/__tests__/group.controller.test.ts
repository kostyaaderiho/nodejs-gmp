// @ts-nocheck
import { post, getById, get, put, remove } from '../group.controller';
import { entityNotFound, entityDeleted } from '../utils/entity.utils';
import { GroupService } from '../../services/group.service';

jest.mock('../../services/group.service');
jest.mock('../utils/entity.utils');
jest.mock('sequelize');

describe('Group controller:', () => {
    const mockRes = { json: jest.fn(), send: jest.fn() };

    beforeEach(() => {
        GroupService.mockClear();
        entityDeleted.mockClear();
        entityNotFound.mockClear();
    });

    describe('POST', () => {
        const mockReq = {
            body: { name: 'group-1', permission: 'READ' }
        };

        test('should save group entity correctly', async () => {
            const mockCreate = jest.fn((entity) => entity);

            GroupService.mockImplementation(() => ({
                create: mockCreate
            }));

            await post(mockReq, mockRes);

            expect(GroupService).toHaveBeenCalledTimes(1);
            expect(mockCreate.mock.calls[0][0]).toEqual(mockReq.body);
            expect(mockRes.json).toHaveBeenCalledWith(mockReq.body);
        });
    });

    describe('GET:id', () => {
        const mockReq = {
            params: { id: 1 }
        };

        test('should get group by id correctly', async () => {
            const mockData = { id: 1 };
            const mockGetById = jest.fn(() => mockData);

            GroupService.mockImplementationOnce(() => ({
                getById: mockGetById
            }));

            await getById(mockReq, mockRes);

            expect(GroupService).toHaveBeenCalledTimes(1);
            expect(mockGetById.mock.calls[0][0]).toEqual({
                where: mockReq.params
            });
            expect(mockRes.send).toHaveBeenCalledWith(mockData);
        });

        test('should return error if group was not found', async () => {
            const mockGetById = jest.fn(() => null);

            GroupService.mockImplementationOnce(() => ({
                getById: mockGetById
            }));

            await getById(mockReq, mockRes);

            expect(GroupService).toHaveBeenCalledTimes(1);
            expect(entityNotFound).toHaveBeenCalledTimes(1);
        });
    });

    describe('GET', () => {
        const mockReq = {};

        test('should get group list correctly', async () => {
            const mockData = [{ id: 1 }, { id: 2 }];
            const mockGet = jest.fn(() => mockData);

            GroupService.mockImplementationOnce(() => ({
                get: mockGet
            }));

            await get(mockReq, mockRes);

            expect(GroupService).toHaveBeenCalledTimes(1);
            expect(mockGet).toHaveBeenCalledTimes(1);
            expect(mockRes.send).toHaveBeenCalledWith(mockData);
        });
    });

    describe('PUT', () => {
        const mockReq = {
            body: { name: 'group-1', permission: 'READ' },
            params: { id: 1 }
        };

        test('should update group correctly', async () => {
            const mockUpdate = jest.fn(() => [null, [{ id: 1 }]]);

            GroupService.mockImplementationOnce(() => ({
                update: mockUpdate
            }));

            await put(mockReq, mockRes);

            expect(GroupService).toHaveBeenCalledTimes(1);
            expect(mockUpdate.mock.calls[0][0]).toEqual(mockReq.body);
            expect(mockUpdate.mock.calls[0][1]).toEqual({
                where: mockReq.params,
                returning: true
            });
            expect(mockRes.send).toHaveBeenCalledWith({ id: 1 });
        });

        test('should return error if group has not been found', async () => {
            GroupService.mockImplementationOnce(() => ({
                update: () => [null, null]
            }));

            await put(mockReq, mockRes);

            expect(GroupService).toHaveBeenCalledTimes(1);
            expect(entityNotFound).toHaveBeenCalledTimes(1);
        });
    });

    describe('DELETE', () => {
        const mockReq = {
            params: { id: 1 }
        };

        test('should delete group correctly', async () => {
            const mockRemove = jest.fn(() => [null, [{ id: 1 }]]);

            GroupService.mockImplementationOnce(() => ({
                remove: mockRemove
            }));

            await remove(mockReq, mockRes);

            expect(GroupService).toHaveBeenCalledTimes(1);
            expect(mockRemove.mock.calls[0][0]).toEqual(mockReq.params.id);
            expect(entityDeleted).toHaveBeenCalledTimes(1);
        });

        test('should return error if group has not been deleted', async () => {
            GroupService.mockImplementationOnce(() => ({
                remove: () => null
            }));

            await remove(mockReq, mockRes);

            expect(GroupService).toHaveBeenCalledTimes(1);
            expect(entityNotFound).toHaveBeenCalledTimes(1);
        });
    });
});
