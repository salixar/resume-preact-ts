import { useEffect, useState } from 'preact/hooks';
import Typing from 'react-typing-animation';

import Header from './sections/Header';

// sections
import Home from './sections/Home';
import Joke from './sections/Joke';

export function App(): JSX.Element {
  const activeTheme = localStorage.getItem('theme') || 'dark';
  const [isReady, setReady] = useState(false);
  const [theme, setTheme] = useState(activeTheme);
  const [checked, setChecked] = useState(false);
  const handleTheme = (e: JSX.TargetedEvent<HTMLInputElement, Event>): void => {
    const currentTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(currentTheme);
    localStorage.setItem('theme', currentTheme);
    setChecked(e.currentTarget.checked);
  };
  useEffect(() => {
    try {
      setTheme(activeTheme);
    } catch {
      setTheme('dark');
    }
  }, []);
  if (!isReady) {
    return (
      <main className="start-screen">
        <Typing>
          <h1>Hello, I'm Arkady</h1>
        </Typing>
      </main>
    );
  }
  return (
    <div className="container" data-theme={theme}>
      <Header handleTheme={handleTheme} checked={checked} />
      <div className="wrapper">
        <main>
          <Home />
          <Joke />
        </main>
      </div>
    </div>
  );
}
