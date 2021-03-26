// Styles
import "./CharacterDetails.scss";
// State/Effect
import { useEffect, useState } from "react";
// Router
import { Link } from "react-router-dom";
// Effects
import Spinner from "../../../components/content/Spinner";

function CharacterDetails({ match }) {
  let characterID = match.params.id;

  // ! This is a temporary fix for the "Not found" when retrieving a character with an ID of 17.
  // todo - come back to this and try and find a better workaround.
  if (characterID >= 17) characterID++;

  const ROUTE = `https://swapi.dev/api/people/${characterID}`;

  // State variables.
  const [character, setCharacter] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  // Fetch Characters on page load.
  useEffect(() => {
    fetchSingleCharacter();
  }, []);

  // Fetches the Characters.
  const fetchSingleCharacter = async () => {
    setIsLoading(true);
    const response = await fetch(ROUTE);
    const data = await response.json();

    setCharacter(data);
    setIsLoading(false);
  };

  return (
    <div className="container my-5">
      <h2>{character.name}</h2>
      {/* begin:: Character Table */}
      {character.length > 0 && (
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
            </tr>
          </thead>
          <tbody>
            {character.map((character, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>
                    <Link to={`/details/${index + 1}`} className="table-item">
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

export default CharacterDetails;
