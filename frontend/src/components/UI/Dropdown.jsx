import React, { useState } from "react";
import * as S from "../../styles/Dropdown";

const Dropdown = ({ list, handleSelectedItem }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("");

  const handleDropdownClick = () => {
    setIsOpen((prev) => !prev);
  };

  const handleItemClick = (e) => {
    let selectedItem = e.target.innerText;
    setSelected(selectedItem);
    handleSelectedItem(selectedItem);
  };

  return (
    <S.Dropdown>
      <div onClick={handleDropdownClick} className="dropdown-btn">
        {selected ? <p>{selected}</p> : <p>Choose one</p>}
      </div>
      {isOpen &&
        list.map((item) => (
          <li key={item} onClick={handleItemClick} className="option">
            {item}
          </li>
        ))}
    </S.Dropdown>
  );
};

export default Dropdown;
