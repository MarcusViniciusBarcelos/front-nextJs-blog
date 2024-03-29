import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Header } from '.';

import props from './mock';

describe('<Header />', () => {
  it('should render an image, a heading and text', () => {
    renderTheme(<Header {...props} showText={undefined} />);

    expect(
      screen.getByRole('heading', { name: props.blogName }),
    ).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('src', props.logo);
    expect(screen.getByText(new RegExp('Meu blog SSG'))).toBeInTheDocument();
  });

  it('should render image only', () => {
    renderTheme(<Header {...props} showText={false} />);

    expect(
      screen.queryByRole('heading', { name: 'Marcus Barcelos' }),
    ).not.toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('src', props.logo);
    expect(screen.queryByRole(props.blogDescription)).not.toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(
      <Header {...props} showText={undefined} />,
    );

    expect(container).toMatchSnapshot();
  });

  it('should match snapshot with image only', () => {
    const { container } = renderTheme(<Header {...props} showText={false} />);

    expect(container).toMatchSnapshot();
  });
});
