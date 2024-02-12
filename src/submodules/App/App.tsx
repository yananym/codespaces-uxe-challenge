import { useState } from 'react';
import './App.scss';

import { BreedNavigation } from './BreedNavigation';
import { ToggleButton } from '../components';
import { ThemeProvider } from '../components';
import { DoggieGrid } from './DoggieGrid';
import { RecoilRoot } from 'recoil';

const App = () => {
  const [theme, setTheme] = useState('light');
  

  const onThemeChange = (isChecked: boolean) => {
    setTheme(isChecked ? 'dark' : 'light');
  }

  return (
    <ThemeProvider>
      <RecoilRoot>
      <div className="App" data-theme={theme}>
        <BreedNavigation title='Woofer'>
          <ToggleButton onChange={onThemeChange} defaultChecked={undefined} label="Dark Mode" />
        </BreedNavigation>
        <DoggieGrid />
      </div>
      </RecoilRoot>
    </ThemeProvider>
  );
}

export default App;
