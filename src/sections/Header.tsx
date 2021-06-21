import ThemeToggle from '../components/ThemeToggle/ThemeToggle';

export interface IHeader {
  handleTheme: (e: JSX.TargetedEvent<HTMLInputElement, Event>) => void;
  checked: boolean;
}

const Header = ({ handleTheme, checked }: IHeader): JSX.Element => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <a>Home</a>
            </li>
            <li>
              <a
                href="https://github.com/salixar/resume-preact-ts"
                target="_blank"
                rel="norefferer"
              >
                Github
              </a>
            </li>
            <li>
              <a>Minesweeper</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
          <ThemeToggle onClick={handleTheme} checked={checked} />
        </nav>
      </header>
      <svg viewBox="0 0 500 130" preserveAspectRatio="xMidYMax slice">
        <path d="M0.00,92.27 C216.83,192.92 304.30,8.39 500.00,109.03 L500.00,0.00 L0.00,0.00 Z"></path>
      </svg>
    </>
  );
};

export default Header;
