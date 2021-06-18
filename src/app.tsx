import { useEffect, useState } from 'preact/hooks';

import Navigation from './components/Navigation/Navigation';
import ThemeToggle from './components/ThemeToggle/ThemeToggle';

// routes
import Home from './sections/Home';
import Joke from './sections/Joke';

export function App(): JSX.Element {
  const activeTheme = localStorage.getItem('theme') || 'dark';
  const [theme, setTheme] = useState(activeTheme);
  const handleTheme = (): void => {
    const currentTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(currentTheme);
    localStorage.setItem('theme', currentTheme);
  };
  useEffect(() => {
    try {
      setTheme(activeTheme);
    } catch {
      setTheme('dark');
    }
  }, []);
  return (
    <div className="container" data-theme={theme}>
      <svg viewBox="0 0 500 150" preserveAspectRatio="xMidYMax slice">
        <path d="M0.00,92.27 C216.83,192.92 304.30,8.39 500.00,109.03 L500.00,0.00 L0.00,0.00 Z"></path>
      </svg>
      <div className="wrapper">
        <Navigation />
        <main>
          <Home />
          <Joke />
        </main>
        <ThemeToggle onClick={handleTheme} />
      </div>
    </div>
  );
}
