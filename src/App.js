import { useEffect, useState } from "react";
import AstronautsTable from "./components/AstronautsTable";

function App() {
  const [astronauts, setAstronauts] = useState([]);

  useEffect(() => {
    fetch("http://api.open-notify.org/astros.json")
      .then((res) => res.json())
      .then((data) => setAstronauts(data.people))
      .catch((err) => console.log(err));
  }, []);

  return <AstronautsTable astronautList={astronauts} />;
}

export default App;
