import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { PostTags, PostTagsProps } from '.';

import mock from './mock';

const props: PostTagsProps = mock;

describe('<PostTags />', () => {
  it('should render', () => {
    renderTheme(<PostTags {...props} />);

    expect(screen.getByText(/tags:/i)).toBeInTheDocument();
    expect(screen.getAllByRole('link')).toHaveLength(2);
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<PostTags {...props} />);

    expect(container).toMatchSnapshot();
  });

  it('should match snapshot with no tags', () => {
    const { container } = renderTheme(<PostTags {...props} tags={undefined} />);

    expect(container).toMatchSnapshot();
  });
});
