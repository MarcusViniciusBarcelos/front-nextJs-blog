import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { BaseTemplate, BaseTemplateProps } from '.';

import mock from './mock';

const props: BaseTemplateProps = mock;

describe('<Base />', () => {
  it('should render', () => {
    renderTheme(<BaseTemplate {...props} />);

    expect(screen.getByRole('heading', { name: 'Oi' })).toBeInTheDocument();
  });
});
