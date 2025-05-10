import React from "react";

const NavbarSearch = ({ modifier }) => {
  return (
    <div>
      <div className={`bp5-input-group ${modifier}`}>
        <span className="bp5-icon bp5-icon-search"></span>
        <input
          type="text"
          className={`bp5-input ${modifier}`}
          placeholder="Search"
        />
        <button
          className={`bp5-button bp5-minimal bp5-intent-primary bp5-icon-arrow-right ${modifier}`}
        ></button>
      </div>
    </div>
  );
};

export default NavbarSearch;
