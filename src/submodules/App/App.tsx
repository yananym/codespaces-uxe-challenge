import { useEffect, useState } from 'react';
import './App.scss';

import { BreedNavigation } from './BreedNavigation';
import { ToggleButton } from '../components';
import { ThemeProvider } from '../components';
import { DoggieGrid } from './DoggieGrid';
import { useLocation } from 'react-router-dom';

const App = () => {
  const [theme, setTheme] = useState('light');
  let location = useLocation();
  const [apiUrl, setApiUrl] = useState<string>('https://dog.ceo/api/breed/hound/images');

  useEffect(() => {
      setApiUrl(`https://dog.ceo/api/breed${location.pathname}/images`);
  }, [location])

  const onThemeChange = (isChecked: boolean) => {
    setTheme(isChecked ? 'dark' : 'light');
  }

  return (
    <ThemeProvider>
      <div className="App" data-theme={theme}>
        <BreedNavigation title='Woofer'>
          <ToggleButton onChange={onThemeChange} defaultChecked={undefined} label="Dark Mode" />
        </BreedNavigation>
        <DoggieGrid />
      </div>
    </ThemeProvider>
  );
}

export default App;
