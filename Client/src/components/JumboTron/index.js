import banner from "../../assets/images/banner.png";

function JumboTron() {
  return (
    <div
      class="jumbotron responsive"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div class="container text-center">
        <h1>_____ Community HOA</h1>
        <p>Communities, H's, O's, and A's!</p>
      </div>
    </div>
  );
}

export default JumboTron;
