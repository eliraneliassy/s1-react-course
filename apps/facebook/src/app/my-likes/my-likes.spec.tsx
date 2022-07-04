import { render } from '@testing-library/react';

import MyLikes from './my-likes';

describe('MyLikes', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MyLikes />);
    expect(baseElement).toBeTruthy();
  });
});
