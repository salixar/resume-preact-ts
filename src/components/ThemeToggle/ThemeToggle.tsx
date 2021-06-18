export interface IThemeToggle {
  onClick?: () => void;
}

const ThemeToggle = ({ onClick }: IThemeToggle): JSX.Element => {
  return (
    <button type="button" onClick={onClick} className="button theme-toggle">
      Toggle theme
    </button>
  );
};

export default ThemeToggle;
