import { useEffect, useState } from "react";

function App() {
  const [astronauts, setAstronauts] = useState([]);

  useEffect(() => {
    fetch("http://api.open-notify.org/astros.json")
      .then((res) => res.json())
      .then((data) => setAstronauts(data.people))
      .catch((err) => console.log(err));
  }, []);

  const astronautsList = astronauts.map((astronaut, index) => (
    <li key={index}>
      <p>
        {astronaut.name} Craft: {astronaut.craft}
      </p>
    </li>
  ));

  return (
    <div>
      <ul>{astronautsList}</ul>
    </div>
  );
}

export default App;
