import banner from "../../assets/Images/banner.png";

function JumboTron() {
  return (
    <div
      class="jumbotron responsive"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div class="container text-center">
        <h1>My Portfolio</h1>
        <p>Coding, coffee, and creativity!</p>
      </div>
    </div>
  );
}

export default JumboTron;
