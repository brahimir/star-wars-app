// Styles
import "./List.scss";
// State/Effect
import { useEffect, useState } from "react";
import Spinner from "../../components/content/Spinner";
// Router
import { Link } from "react-router-dom";

function List() {
  const ROUTE = "https://swapi.dev/api/people";

  // State variables.
  const [response, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Fetch Characters on page load.
  useEffect(() => {
    fetchCharacters();
  }, []);

  // Fetches the Characters.
  const fetchCharacters = async () => {
    setIsLoading(true);
    const data = await fetch(ROUTE);

    const response = await data.json();
    setCharacters(response.results);
    setIsLoading(false);
  };

  return (
    <div className="container my-5">
      {/* begin:: Character Table */}
      {response.length > 0 && (
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
                  <td>
                    <Link to={`/details/${character.name}`} className="table-item">
                      {character.name}
                    </Link>
                  </td>
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
