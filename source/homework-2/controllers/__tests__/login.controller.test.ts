// @ts-nocheck
import { AuthService } from '../../services/auth.service';
import { login } from '../login.controller';

jest.mock('../../services/auth.service');

describe('Login controller', () => {
    test('should be called correctly', async () => {
        const mockReq = { body: {} };
        const mockRes = { send: jest.fn() };
        const mockData = 'unique-jwt-token';

        AuthService.mockImplementation(() => ({
            signin: jest.fn(() => mockData)
        }));

        await login(mockReq, mockRes);

        expect(AuthService).toHaveBeenCalledTimes(1);
        expect(mockRes.send).toHaveBeenCalledWith(mockData);
    });
});
