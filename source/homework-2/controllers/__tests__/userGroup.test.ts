// @ts-nocheck
import { post, get } from '../userGroup.controller';
import { UserGroupService } from '../../services/userGroup.service';
import { entityQueryParamNotProvided } from '../utils/entity.utils';

jest.mock('../utils/entity.utils');
jest.mock('../../services/userGroup.service');

describe('UserGroup controller', () => {
    const mockRes = {
        send: jest.fn(),
        json: jest.fn()
    };

    beforeEach(() => {
        mockRes.send.mockClear();
        mockRes.json.mockClear();
        UserGroupService.mockClear();
    });

    describe('POST', () => {
        test('should create userGroup correctly', async () => {
            const mockReq = {
                body: {
                    userids: '1',
                    groupId: '1'
                }
            };

            const mockData = [{ userId: '1', groupId: '1' }];
            const mockCreate = jest.fn(() => mockData);

            UserGroupService.mockImplementationOnce(() => ({
                create: mockCreate
            }));

            await post(mockReq, mockRes);

            expect(UserGroupService).toHaveBeenCalledTimes(1);
            expect(mockCreate.mock.calls[0][0]).toEqual({
                userids: mockReq.body.userids.split(','),
                groupId: mockReq.body.groupId
            });
            expect(mockRes.send.mock.calls[0][0]).toEqual(mockData);
        });

        test('should return error if userids or groupId is not provided', async () => {
            const mockReq = {
                body: {
                    userids: '1'
                }
            };

            await post(mockReq, mockRes);

            expect(entityQueryParamNotProvided).toHaveBeenCalledTimes(1);
            expect(mockRes.send.mock.calls[0][0]).toEqual(
                entityQueryParamNotProvided()
            );
        });
    });

    describe('GET', () => {
        const mockReq = {
            query: { loginSubstring: 'loginSubstring', limit: 10 }
        };

        test('should get user list correctly', async () => {
            const mockData = [{ id: 1 }, { id: 2 }];
            const mockGet = jest.fn(() => mockData);

            UserGroupService.mockImplementationOnce(() => ({
                get: mockGet
            }));

            await get(mockReq, mockRes);

            expect(UserGroupService).toHaveBeenCalledTimes(1);
            expect(mockGet).toHaveBeenCalledTimes(1);
            expect(mockRes.send).toHaveBeenCalledWith(mockData);
        });
    });
});
