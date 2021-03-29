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
  const [arrayCharacters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Fetch Characters on page load.
  useEffect(() => {
    fetchList();
  }, []);

  // Fetches the Characters.
  const fetchList = async () => {
    let characters = [];
    let nextRoute = ROUTE;

    // Keep fetching the next page in SWAPI until no more pages exist (data.next === null).
    setIsLoading(true);
    while (nextRoute !== null) {
      const response = await fetch(nextRoute);
      const data = await response.json();

      characters.push(...data.results);
      nextRoute = data.next;
    }
    setCharacters(characters);
    setIsLoading(false);
  };

  return (
    <div className="container my-5">
      <h2 className="mb-5">Star Wars Characters</h2>
      {/* begin:: Character Table */}
      {!isLoading && (
        <table className="table table-dark">
          {/* start:: Table Headers */}
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Birth Year</th>
              <th scope="col">Height</th>
              <th scope="col">Mass</th>
            </tr>
          </thead>
          {/* end:: Table Headers */}

          {/* start:: Table Entries */}
          <tbody>
            {arrayCharacters.map((character, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>
                    {/* ! This is a temporary fix for the "Not found" when retrieving a character with an ID of 17 */}
                    <Link
                      to={index + 1 === 17 ? `/details/${index + 2}` : `/details/${index + 1}`}
                      className="table-item"
                    >
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
          {/* end:: Table Entries */}
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
