import storage from '../app/auth/storage';
jest.mock('expo-secure-store', () => ({
  setItemAsync: jest.fn(),
  getItemAsync: jest.fn(),
  deleteItemAsync: jest.fn(),
}), { virtual: true });

import * as SecureStore from 'expo-secure-store';

describe('auth storage', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('stores the token', async () => {
    await storage.storeToken('abc');
    expect(SecureStore.setItemAsync).toHaveBeenCalledWith('authToken', 'abc');
  });

  it('gets the token', async () => {
    SecureStore.getItemAsync.mockResolvedValue('123');
    const token = await storage.getToken();
    expect(SecureStore.getItemAsync).toHaveBeenCalledWith('authToken');
    expect(token).toBe('123');
  });

  it('removes the token', async () => {
    await storage.removeToken();
    expect(SecureStore.deleteItemAsync).toHaveBeenCalledWith('authToken');
  });
});
