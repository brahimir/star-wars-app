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
      let characterFilms = [];
      for (const filmPath of characterData.films) {
        const response = await fetch(filmPath);
        const film = await response.json();

        characterFilms.push(film.title);
        characterData.films = characterFilms;
        setCharacter(characterData);
      }
    }

    // Fetch Character Species
    if (characterData.species.length) {
      let characterSpecies = [];
      for (const speciesPath of characterData.species) {
        const response = await fetch(speciesPath);
        const specie = await response.json();

        characterSpecies.push(specie.name);
        characterData.species = characterSpecies;
        setCharacter(characterData);
      }
    }

    // Fetch Character Vehicles
    if (characterData.vehicles.length) {
      let characterVehicles = [];
      for (const vehiclesPath of characterData.vehicles) {
        const response = await fetch(vehiclesPath);
        const vehicle = await response.json();

        characterVehicles.push(vehicle.name);
        characterData.vehicles = characterVehicles;
        setCharacter(characterData);
      }
    }

    // Fetch Character Starships
    if (characterData.starships.length) {
      let characterStarships = [];
      for (const starshipPath of characterData.starships) {
        const response = await fetch(starshipPath);
        const vehicle = await response.json();

        characterStarships.push(vehicle.name);
        characterData.starships = characterStarships;
        setCharacter(characterData);
      }
    }

    setIsLoading(false);
  };

  return (
    <div className="container my-4">
      {/* begin:: Snapshot Navigation */}
      <div className="row snapshot-nav mb-4">
        <div className="col text-left">
          <button className="btn btn-danger snapshot-nav-btn">Previous Character</button>
        </div>
        <div className="col">
          <Link to="/list" className="btn btn-primary snapshot-nav-btn">
            Back to List
          </Link>
        </div>
        <div className="col text-right">
          <button className="btn btn-success snapshot-nav-btn">Next Character</button>
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
              <div className="row">
                <div className="col-2 font-weight-bold">Species:</div>
                <div className="col-10">{character.species}</div>
              </div>
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
            <div className="card-section my-4 text-left">
              <h4 className="text-left text-warning mb-3">Assets</h4>

              {/* start:: Character Vehicles */}
              <div className="row">
                <div className="col-2 font-weight-bold">Vehicles:</div>
                <div className="col-10">{character.vehicles}</div>
              </div>
              {/* end:: Character Vehicles */}

              {/* start:: Character Starships */}
              <div className="row">
                <div className="col-2 font-weight-bold">Starships:</div>
                <div className="col-10">{character.starships}</div>
              </div>
              {/* end:: Character Starships */}
            </div>
            {/* end:: Assets */}

            {/* begin:: Character Films */}
            <div className="card-section my-4 text-left">
              <h4 className="text-left text-warning mb-3">Films</h4>

              <div className="row">
                <div className="col font-weight-bold">{character.films}</div>
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
