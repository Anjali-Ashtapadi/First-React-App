import { useState } from "react";

function CitySelectorFunction() {
  const countries = ['Ireland', 'Switzerland', 'Finland', 'Italy', 'Britain', 'USA', 'UK'];
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>List of Countries: Choose your Favourite</h1>

      <ul className="list-group">
        {countries.map((item, index) => (
          <li
            key={index}
            className="list-group-item"
            onClick={() => setSelectedIndex(index)}
            style={{ cursor: "pointer" }}
          >
            {index + 1} - {item}
          </li>
        ))}
      </ul>
      <br /><br />
        {selectedIndex >= 0 && (
          <p>Your favourite country is: {countries[selectedIndex]}</p>
        )}
    </>
  );
}

export default CitySelectorFunction;
