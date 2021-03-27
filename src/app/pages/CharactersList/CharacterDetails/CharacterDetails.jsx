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

    // todo Fetch Character Homeworld
    response = await fetch(characterData.homeworld);
    const characterHomeworld = await response.json();

    // todo Fetch Character Films
    // let characterFilms = [];
    // characterData.films.forEach(element => {
    //   response = await fetch(element);
    //   characterFilms = await response.json();
    // });

    // todo Fetch Character Species
    // response = await fetch(characterData.species);
    // const characterSpecies = await response.json();

    // todo Fetch Character Vehicles
    // response = await fetch(characterData.vehicles);
    // const characterVehicles = await response.json();

    // todo Fetch Character Starships
    // response = await fetch(characterData.starships);
    // const characterStarships = await response.json();

    characterData.homeworld = characterHomeworld.name;

    setCharacter(characterData);
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
