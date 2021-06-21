export interface IThemeToggle {
  onClick: (e: JSX.TargetedEvent<HTMLInputElement, Event>) => void;
  checked: boolean;
}

const ThemeToggle = ({
  onClick,
  checked = false,
}: IThemeToggle): JSX.Element => {
  const handleChange = (e: JSX.TargetedEvent<HTMLInputElement, Event>) => {
    onClick(e);
  };
  return (
    <label className="label theme-toggle">
      {checked ? 'Light Theme' : 'Dark Theme'}
      <input type="checkbox" checked={checked} onChange={handleChange} />
      <span />
    </label>
  );
};

export default ThemeToggle;
