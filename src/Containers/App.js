import CardList from "../Components/CardList";
import SearchBox from "../Components/SearchBox";
import Scroll from "../Components/Scroll";
import "./App.css";
import ErrorBoundry from "../Components/ErrorBoundry";
import { useState, useEffect } from "react";

function App() {
  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchField] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setRobots(users));
  }, []);

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  };

  const filteredRobots = robots.filter((robot) => {
    return robot.name
      .toLocaleLowerCase()
      .includes(searchfield.toLocaleLowerCase());
  });
  return (
    <div className="tc">
      <h1 className="f2">Robotos</h1>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <ErrorBoundry>
          <CardList robots={filteredRobots} />
        </ErrorBoundry>
      </Scroll>
    </div>
  );
}

export default App;
