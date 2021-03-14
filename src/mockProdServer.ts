import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer';

// Import your mock .ts files one by one
// If you use vite.mock.config.ts, just import the file directly
import testMock from '../mock/test';
import roleMock from '../mock/role';
import userMock from '../mock/user';

export const mockModules = [...testMock, ...roleMock, ...userMock];

export function setupProdMockServer() {
    createProdMockServer(mockModules);
}