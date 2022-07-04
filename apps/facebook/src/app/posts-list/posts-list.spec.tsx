import { render } from '@testing-library/react';

import PostsList from './posts-list';

describe('PostsList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PostsList />);
    expect(baseElement).toBeTruthy();
  });
});
