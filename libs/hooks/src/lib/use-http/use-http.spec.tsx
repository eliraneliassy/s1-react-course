import { act, renderHook } from '@testing-library/react';
import * as React from 'react';

import useHttp from './use-http';

describe('useHttp', () => {
  it('should render successfully', () => {
    const { result } = renderHook(() => useHttp());

    expect(result.current.count).toBe(0);

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });
});
