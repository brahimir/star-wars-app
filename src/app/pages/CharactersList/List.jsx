// Styles
import "./List.scss";
// State/Effect
import { useEffect, useState } from "react";
// Router
import { Link } from "react-router-dom";
// Effects
import Spinner from "../../components/content/Spinner";

function List() {
  const ROUTE = "https://swapi.dev/api/people";

  // State variables.
  const [arrayCharacters, setResponse] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Fetch Characters on page load.
  useEffect(() => {
    fetchList();
  }, []);

  // Fetches the Characters.
  const fetchList = async () => {
    let characters = [];
    let next = ROUTE;

    // Keep
    setIsLoading(true);
    while (next !== null) {
      const response = await fetch(next);
      const data = await response.json();

      characters.push(...data.results);
      next = data.next;
    }
    setResponse(characters);
    setIsLoading(false);
  };

  return (
    <div className="container my-5">
      <h2 className="mb-5">Star Wars Characters</h2>
      {/* begin:: Character Table */}
      {arrayCharacters.length > 0 && (
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Birth Year</th>
              <th scope="col">Height</th>
              <th scope="col">Mass</th>
            </tr>
          </thead>
          <tbody>
            {arrayCharacters.map((character, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>
                    <Link to={`/details/${index + 1}`} className="table-item">
                      <u>{character.name}</u>
                    </Link>
                  </td>
                  <td>{character.birth_year}</td>
                  <td>{character.height}</td>
                  <td>{character.mass}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
      {/* end:: Character Table */}

      {/* begin:: Loading Spinner */}
      {isLoading && <Spinner role="status" color="warning" />}
      {/* end:: Loading Spinner */}
    </div>
  );
}

export default List;
