import satData from "./satData.js";

const Buttons = (props) => {
  const filterByType = props.filterByType;
  const setSat = props.setSat;
  const displaySats = props.displaySats;

  return (
    <div>
      <div>
        {displaySats.map((sat, id) => {
          return (
            <button onClick={() => 
            filterByType(sat)} key={id}>
              {sat} Orbit
            </button>
          );
        })}
      </div>
      <button onClick={() => setSat(satData)}>All Orbits</button>
      </div>
  );
};

export default Buttons;