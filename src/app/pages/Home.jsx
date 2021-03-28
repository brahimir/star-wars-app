import rebelLogo from "../../assets/media/logos/rebel_logo.png";

function Home() {
  return (
    <div className="container my-5">
      <h1 className="mb-5 text-warning">Home Page</h1>
      <p className="mb-5">Welcome to the Star Wars Compendium!</p>
      <img src={rebelLogo} alt="Rebel Logo" width={"300vh"} />
    </div>
  );
}

export default Home;
