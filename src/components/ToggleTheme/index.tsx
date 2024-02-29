import { useContext, useEffect, useState } from 'react';
import * as Styled from './styles';
import DarkModeToggle from 'react-dark-mode-toggle';
import { BlogThemeContext } from '../../contexts/BlogThemeContext';

export const ToggleTheme = () => {
  const { setTheme } = useContext(BlogThemeContext);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const localTheme = localStorage.getItem('theme');
    if (!localTheme) return;
    const newTheme = JSON.parse(localTheme);

    if (newTheme === 'inverted') {
      setIsDarkMode(true);
    }
  }, []);

  useEffect(() => {
    setTheme(isDarkMode ? 'inverted' : 'default');
  }, [isDarkMode, setTheme]);

  const handleChange = () => {
    setIsDarkMode((state) => !state);
    setTheme(isDarkMode ? 'inverted' : 'default');
  };
  return (
    <>
      <Styled.Wrapper>
        {/* <Styled.label>
          Toogle light/dark mode
          <Styled.input
            type="checkbox"
            value="dark mode active"
            onChange={handleChange}
            checked={isDarkMode}
          />
          <Styled.Slider />
        </Styled.label> */}
        <DarkModeToggle
          onChange={handleChange}
          checked={isDarkMode}
          size={60}
        />
      </Styled.Wrapper>
    </>
  );
};
