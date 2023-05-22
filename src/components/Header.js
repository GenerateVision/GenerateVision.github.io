import heroImage from "../assets/hero.jpg";
import video from "../assets/video.mp4";

function Header() {
  return (
    <header>
      {/* <img src={heroImage} alt="logo" className="logo" /> */}
      <video src={video} loop autoPlay muted></video>
      <h1>Generate Vision</h1>
      <h2>Helping to build the future of ministry through the power of refined AI models and generated content</h2>
      {/* <div className="row">
        <button className="btn" style={{ cursor: "pointer" }}>
          Sign Up
        </button>

        <button className="btn" style={{ cursor: "pointer" }}>
          Log in
        </button>
      </div> */}

      <div className="headerbg"></div>
    </header>
  );
}
export default Header;
