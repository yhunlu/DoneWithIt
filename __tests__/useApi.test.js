import { renderHook, act } from '@testing-library/react-native';
import useApi from '../app/hooks/useApi';
import cache from '../app/utility/cache';

jest.mock('../app/utility/cache');

const successResponse = { ok: true, data: { foo: 'bar' } };
const errorResponse = { ok: false };

describe('useApi hook', () => {
  it('stores data on success', async () => {
    const apiFunc = jest.fn().mockResolvedValue(successResponse);
    const { result } = renderHook(() => useApi(apiFunc));

    await act(async () => {
      await result.current.request();
    });

    expect(apiFunc).toHaveBeenCalled();
    expect(result.current.data).toEqual(successResponse.data);
    expect(result.current.error).toBe(false);
  });

  it('sets error on failure', async () => {
    const apiFunc = jest.fn().mockResolvedValue(errorResponse);
    const { result } = renderHook(() => useApi(apiFunc));

    await act(async () => {
      await result.current.request();
    });

    expect(result.current.error).toBe(true);
  });

  it('reads from cache first when key provided', async () => {
    cache.get.mockResolvedValue({ foo: 'cached' });
    const apiFunc = jest.fn().mockResolvedValue(successResponse);
    const { result } = renderHook(() => useApi(apiFunc, 'test')); 

    await act(async () => {
      await result.current.request();
    });

    expect(cache.get).toHaveBeenCalledWith('test');
    // Should set cached data before api call resolves
    expect(result.current.data).toEqual(successResponse.data);
  });

  it('stores response in cache when key provided', async () => {
    cache.get.mockResolvedValue(null);
    const apiFunc = jest.fn().mockResolvedValue(successResponse);
    const { result } = renderHook(() => useApi(apiFunc, 'key'));

    await act(async () => {
      await result.current.request();
    });

    expect(cache.store).toHaveBeenCalledWith('key', successResponse.data);
  });
});
