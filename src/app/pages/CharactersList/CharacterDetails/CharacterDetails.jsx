// Styles
import "./CharacterDetails.scss";
// State/Effect
import { useEffect, useState } from "react";
// Router
import { Link, useHistory } from "react-router-dom";
// Effects
import Spinner from "../../../components/content/Spinner";

function CharacterDetails({ match }) {
  let characterID = match.params.id;

  // Router hisory.
  const history = useHistory();

  // State variables.
  const [character, setCharacter] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  // Character metadata.
  const [films, setFilms] = useState([]);
  const [species, setSpecies] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [starships, setStarships] = useState([]);

  // Fetch Characters on page load.
  useEffect(() => {
    fetchSingleCharacter(characterID);
  }, []);

  // Fetches the Characters.
  const fetchSingleCharacter = async (id) => {
    const ROUTE = `https://swapi.dev/api/people/${id}`;

    // Reset Character metadata states.
    resetCharacterMetadataStates();

    setIsLoading(true);
    let response = await fetch(ROUTE);
    const characterData = await response.json();

    // Fetch Character Homeworld
    if (characterData.homeworld) {
      let characterHomeworld;

      response = await fetch(characterData.homeworld);
      characterHomeworld = await response.json();

      characterData.homeworld = characterHomeworld.name;
      setCharacter(characterData);
    }

    // Fetch Character Films
    if (characterData.films.length) {
      let films = [];
      for (const filmPath of characterData.films) {
        const response = await fetch(filmPath);
        const film = await response.json();

        films.push(film.title);
        setFilms(films);
      }
    }

    // Fetch Character Species
    if (characterData.species.length) {
      let species = [];
      for (const speciesPath of characterData.species) {
        const response = await fetch(speciesPath);
        const specie = await response.json();

        species.push(specie.name);
        setSpecies(species);
      }
    }

    // Fetch Character Vehicles
    if (characterData.vehicles.length) {
      let vehicles = [];
      for (const vehiclesPath of characterData.vehicles) {
        const response = await fetch(vehiclesPath);
        const vehicle = await response.json();

        vehicles.push(vehicle.name);
        setVehicles(vehicles);
      }
    }

    // Fetch Character Starships
    if (characterData.starships.length) {
      let starships = [];
      for (const starshipPath of characterData.starships) {
        const response = await fetch(starshipPath);
        const vehicle = await response.json();

        starships.push(vehicle.name);
        setStarships(starships);
      }
    }

    setIsLoading(false);
  };

  /**
   * Resets the states for Character Metadata.
   */
  function resetCharacterMetadataStates() {
    setFilms([]);
    setSpecies([]);
    setVehicles([]);
    setStarships([]);
  }

  /**
   * Handles navigation to next Character.
   */
  function nextCharacter() {
    let nextID = parseInt(characterID) + 1;

    // ! Temporary fix for missing index at ID 17
    if (nextID === 17) nextID = 18;

    history.push(`/details/${nextID}`);
    fetchSingleCharacter(nextID);
  }

  /**
   * Handles navigation to previous Character.
   */
  function previousCharacter() {
    let previousID = parseInt(characterID) - 1;

    // ! Temporary fix for missing index at ID 17
    if (previousID === 17) previousID = 16;

    history.push(`/details/${previousID}`);
    fetchSingleCharacter(previousID);
  }

  return (
    <div className="container my-4">
      {/* begin:: Snapshot Navigation */}
      <div className="row snapshot-nav mb-4">
        <div className="col text-left">
          <button
            disabled={characterID <= 1}
            onClick={previousCharacter}
            className="btn btn-danger snapshot-nav-btn"
          >
            Previous Character
          </button>
        </div>
        <div className="col">
          <Link to="/list" className="btn btn-primary snapshot-nav-btn">
            Back to List
          </Link>
        </div>
        <div className="col text-right">
          <button
            disabled={characterID >= 82}
            onClick={nextCharacter}
            className="btn btn-success snapshot-nav-btn"
          >
            Next Character
          </button>
        </div>
      </div>
      {/* end:: Snapshot Navigation */}

      {/* begin:: Character Card */}
      {!isLoading && (
        <div className="card">
          <div className="card-body">
            {/* begin:: Card Title */}
            <h2 className="card-title">
              <button disabled className="btn btn-warning">
                <h2>{character.name}</h2>
              </button>
            </h2>
            {/* end:: Card Title */}

            {/* begin:: Card Content */}
            {/* begin:: General Information */}
            <div className="card-section my-4 text-left">
              <h4 className="text-left text-warning mb-3">General Information</h4>
              {/* start:: Character Height */}
              <div className="row">
                <div className="col-2 font-weight-bold">Height:</div>
                <div className="col-10">{character.height}cm</div>
              </div>
              {/* end:: Character Height */}

              {/* start:: Character Mass */}
              <div className="row">
                <div className="col-2 font-weight-bold">Mass:</div>
                <div className="col-10">{character.mass}kg</div>
              </div>
              {/* end:: Character Mass */}

              {/* start:: Character Hair Color */}
              <div className="row">
                <div className="col-2 font-weight-bold">Hair Color:</div>
                <div className="col-10">{character.hair_color}</div>
              </div>
              {/* end:: Character Hair Color */}

              {/* start:: Character Skin Color */}
              <div className="row">
                <div className="col-2 font-weight-bold">Skin Color:</div>
                <div className="col-10">{character.skin_color}</div>
              </div>
              {/* end:: Character Skin Color */}

              {/* start:: Character Eye Color */}
              <div className="row">
                <div className="col-2 font-weight-bold">Eye Color:</div>
                <div className="col-10">{character.eye_color}</div>
              </div>
              {/* end:: Character Eye Color */}

              {/* start:: Character Species */}
              {species.length > 0 && (
                <div className="row">
                  <div className="col-2 font-weight-bold">Species:</div>
                  <div className="col-10">
                    {species.map((specie, index) => {
                      return (
                        <span key={index}>
                          &nbsp;{specie}
                          {index !== species.length - 1 && <span>,</span>}
                        </span>
                      );
                    })}
                  </div>
                </div>
              )}
              {/* end:: Character Species */}

              {/* start:: Character Birth Year */}
              <div className="row">
                <div className="col-2 font-weight-bold">Birth Year:</div>
                <div className="col-10">{character.birth_year}</div>
              </div>
              {/* end:: Character Birth Year */}

              {/* start:: Character Gender */}
              <div className="row">
                <div className="col-2 font-weight-bold">Gender:</div>
                <div className="col-10">{character.gender}</div>
              </div>
              {/* end:: Character Gender */}

              {/* start:: Character Homeworld */}
              <div className="row">
                <div className="col-2 font-weight-bold">Homeworld:</div>
                <div className="col-10">{character.homeworld}</div>
              </div>
              {/* end:: Character Homeworld */}
            </div>
            {/* end:: General Information */}

            {/* begin:: Assets */}
            {vehicles.length > 0 && starships.length > 0 && (
              <div className="card-section my-4 text-left">
                <h4 className="text-left text-warning mb-3">Assets</h4>

                {/* start:: Character Vehicles */}
                {vehicles.length > 0 && (
                  <div className="row">
                    <div className="col-2 font-weight-bold">Vehicles:</div>
                    <div className="col-10">
                      {vehicles.map((vehicle, index) => {
                        return (
                          <span key={index}>
                            &nbsp;{vehicle}
                            {index !== vehicles.length - 1 && <span>,</span>}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                )}
                {/* end:: Character Vehicles */}

                {/* start:: Character Starships */}
                {starships.length > 0 && (
                  <div className="row">
                    <div className="col-2 font-weight-bold">Starships:</div>
                    <div className="col-10">
                      {starships.map((starship, index) => {
                        return (
                          <span key={index}>
                            &nbsp;{starship}
                            {index !== starships.length - 1 && <span>,</span>}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                )}
                {/* end:: Character Starships */}
              </div>
            )}
            {/* end:: Assets */}

            {/* begin:: Character Films */}
            <div className="card-section my-4 text-left">
              <h4 className="text-left text-warning mb-3">Films</h4>

              <div className="row">
                <div className="col">
                  {films.map((film, index) => {
                    return <div key={index}>&nbsp;{film}</div>;
                  })}
                </div>
              </div>
            </div>
            {/* start:: Character Films */}
            {/* end:: Card Content */}
          </div>
        </div>
      )}
      {/* end:: Character Card */}

      {/* begin:: Loading Spinner */}
      {isLoading && <Spinner role="status" color="warning" />}
      {/* end:: Loading Spinner */}
    </div>
  );
}

export default CharacterDetails;
