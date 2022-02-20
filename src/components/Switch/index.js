import React, { useState } from 'react';
import { Container } from './styles';
import { useTheme } from '../../hooks/ThemeContext';

function Header() {
  const [isChecked, setIsChecked] = useState(false);

  const { toggleTheme } = useTheme();

  const handleChangeToggle = e => {
    setIsChecked(e.target.checked);
  };
  const toggleChecked = () => {
    toggleTheme();
    setIsChecked(!isChecked);
  };

  return (
    <Container isChecked={isChecked}>
      <span>
        <input
          type="checkbox"
          name="toggleInput"
          value={isChecked}
          checked={isChecked}
          onChange={handleChangeToggle}
        />
        <button
          className="slider"
          type="button"
          onClick={toggleChecked}
        ></button>
      </span>
    </Container>
  );
}

export default Header;
