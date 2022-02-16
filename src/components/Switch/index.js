import React, { useState } from 'react';
import { Container } from './styles';

function Header() {
  const [isChecked, setIsChecked] = useState(false);

  const handleChangeToggle = (e) => {
    setIsChecked(e.target.checked);
  };
  const toggleChecked = () => {
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
