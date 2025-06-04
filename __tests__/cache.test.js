jest.mock("@react-native-async-storage/async-storage", () => require("@react-native-async-storage/async-storage/jest/async-storage-mock"));
import cache from '../app/utility/cache';
import AsyncStorage from '@react-native-async-storage/async-storage';

describe('cache utility', () => {
  it('stores and retrieves data', async () => {
    await cache.store('test-key', 'value');
    const value = await cache.get('test-key');
    expect(value).toBe('value');
  });
});
