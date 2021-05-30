// @ts-nocheck
import { post, getById, get, update, remove } from '../user.controller';
import { entityNotFound, entityDeleted } from '../utils/entity.utils';
import { UserService } from '../../services/user.service';

jest.mock('../../services/user.service');
jest.mock('../utils/entity.utils');
jest.mock('sequelize');

describe('User controller', () => {
    const mockRes = {
        send: jest.fn(),
        json: jest.fn()
    };

    beforeEach(() => {
        UserService.mockClear();
        entityDeleted.mockClear();
        entityNotFound.mockClear();
    });

    describe('POST', () => {
        const mockReq = { body: { id: 1 } };

        test('should create user correctly', async () => {
            const mockCreate = jest.fn(() => mockReq.body);

            UserService.mockImplementationOnce(() => ({
                create: mockCreate
            }));

            await post(mockReq, mockRes);

            expect(UserService).toHaveBeenCalledTimes(1);
            expect(mockCreate.mock.calls[0][0]).toEqual(mockReq.body);
            expect(mockRes.json).toHaveBeenCalledWith(mockReq.body);
        });
    });

    describe('GET:id', () => {
        const mockReq = {
            params: { id: 1 }
        };

        test('should get user by id correctly', async () => {
            const mockGetById = jest.fn(() => ({ id: 1 }));

            UserService.mockImplementationOnce(() => ({
                getById: mockGetById
            }));

            await getById(mockReq, mockRes);

            expect(UserService).toHaveBeenCalledTimes(1);
            expect(mockGetById.mock.calls[0][0]).toEqual({
                where: mockReq.params
            });
            expect(mockRes.send).toHaveBeenCalledWith({ id: 1 });
        });

        test('should return error if user was not found', async () => {
            const mockGetById = jest.fn(() => null);

            UserService.mockImplementationOnce(() => ({
                getById: mockGetById
            }));

            await getById(mockReq, mockRes);

            expect(UserService).toHaveBeenCalledTimes(1);
            expect(entityNotFound).toHaveBeenCalledTimes(1);
        });
    });

    describe('GET', () => {
        const mockReq = {
            query: { loginSubstring: 'loginSubstring', limit: 10 }
        };

        test('should get user list correctly', async () => {
            UserService.mockImplementationOnce(() => ({
                get: () => [{ id: 1 }, { id: 2 }]
            }));

            await get(mockReq, mockRes);

            expect(UserService).toHaveBeenCalledTimes(1);
            expect(mockRes.send).toHaveBeenCalledWith([{ id: 1 }, { id: 2 }]);
        });
    });

    describe('PUT', () => {
        const mockReq = {
            body: { id: 1 },
            params: { id: 1 }
        };

        test('should update user correctly', async () => {
            const mockUpdate = jest.fn(() => [null, [{ id: 1 }]]);

            UserService.mockImplementationOnce(() => ({
                update: mockUpdate
            }));

            await update(mockReq, mockRes);

            expect(UserService).toHaveBeenCalledTimes(1);
            expect(mockUpdate.mock.calls[0][0]).toEqual(mockReq.body);
            expect(mockUpdate.mock.calls[0][1]).toEqual({
                where: mockReq.params,
                returning: true
            });
            expect(mockRes.send).toHaveBeenCalledWith({ id: 1 });
        });

        test('should return error if user has not been found', async () => {
            const mockUpdate = jest.fn(() => [null, []]);

            UserService.mockImplementationOnce(() => ({
                update: mockUpdate
            }));

            await update(mockReq, mockRes);

            expect(UserService).toHaveBeenCalledTimes(1);
            expect(entityNotFound).toHaveBeenCalledTimes(1);
        });
    });

    describe('DELETE', () => {
        const mockReq = {
            body: { id: 1 },
            params: { id: 1 }
        };

        test('should delete user correctly', async () => {
            const mockUpdate = jest.fn(() => [null, [{ id: 1 }]]);

            UserService.mockImplementationOnce(() => ({
                update: mockUpdate
            }));

            await remove(mockReq, mockRes);

            expect(UserService).toHaveBeenCalledTimes(1);
            expect(mockUpdate.mock.calls[0][0]).toEqual({
                ...mockReq.body,
                deleted: true
            });
            expect(mockUpdate.mock.calls[0][1]).toEqual({
                where: mockReq.params,
                returning: true
            });
            expect(entityDeleted).toHaveBeenCalledTimes(1);
        });

        test('should return error if user has not been deleted', async () => {
            const mockUpdate = jest.fn(() => [null, []]);

            UserService.mockImplementationOnce(() => ({
                update: mockUpdate
            }));

            await remove(mockReq, mockRes);

            expect(UserService).toHaveBeenCalledTimes(1);
            expect(entityNotFound).toHaveBeenCalledTimes(1);
        });
    });
});
