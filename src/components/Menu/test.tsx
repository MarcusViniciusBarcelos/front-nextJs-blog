import { fireEvent, screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Menu, MenuProps } from '.';

import mock from './mock';

const props: MenuProps = mock;

describe('<Menu />', () => {
  it('should render button link', () => {
    renderTheme(<Menu {...props} links={undefined} />);
    const bottonLink = screen.getByRole('link', { name: 'Open or close menu' });
    const openMenuIcon = screen.getByLabelText('Open menu');

    expect(bottonLink).toBeInTheDocument();
    expect(openMenuIcon).toBeInTheDocument();
    expect(screen.queryByLabelText('Close menu')).not.toBeInTheDocument();
    expect(screen.queryByRole('navigation')).not.toBeInTheDocument();
  });

  it('should open/close menu on button click', () => {
    renderTheme(<Menu {...props} />);
    const bottonLink = screen.getByRole('link', { name: 'Open or close menu' });
    fireEvent.click(bottonLink);

    expect(screen.queryByLabelText('Close menu')).toBeInTheDocument();
    expect(screen.queryByLabelText('Open menu')).not.toBeInTheDocument();
    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'Marcus Barcelos' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('img', { name: 'Marcus Barcelos' }),
    ).toBeInTheDocument();

    fireEvent.click(bottonLink);
    expect(screen.queryByLabelText('Close menu')).not.toBeInTheDocument();
    expect(screen.queryByRole('navigation')).not.toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<Menu {...props} />);
    expect(container).toMatchSnapshot();
  });
});
