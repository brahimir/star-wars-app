// State/Effect
import { useEffect, useState } from "react";
import Spinner from "../components/content/Spinner";

function List() {
  const ROUTE = "https://swapi.dev/api/people";

  // State.
  const [response, setCharacters] = useState([]);
  // todo
  const [isLoading, setIsLoading] = useState(false);

  // Fetch Characters on page load.
  useEffect(() => {
    fetchCharacters();
  }, []);

  // Fetches the Characters.
  const fetchCharacters = async () => {
    const data = await fetch(ROUTE);

    const response = await data.json();
    setCharacters(response.results);
  };

  return (
    <div className="container my-5">
      {/* begin:: Character Table */}
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
          </tr>
        </thead>
        <tbody>
          {response.map((character, index) => {
            return (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{character.name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* end:: Character Table */}

      {/* begin:: Loading Spinner */}
      {isLoading && <Spinner color="warning" size="50px" />}
      {/* end:: Loading Spinner */}
    </div>
  );
}

export default List;
