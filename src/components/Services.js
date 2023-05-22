import Card from "./Card";
import card1 from "../assets/card1.png";
import card2 from "../assets/card2.png";
import card3 from "../assets/card3.png";

function Services() {
  return (
    <div className="container services">
        <h2 className="main-title text-center">SERVICES</h2>
        <div className="card-cover">
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-4 mb-2">
                    <Card title="Web Services" img={card1} text="We work with our partners to produce world class Web Services to enable their use and integration everywhere you want to do ministry." />
                    </div>
                    <div className="col-md-4 mb-2">
                    <Card title="Mixed Reality Experiences" img={card2} text="Check out our mixed reality experience" link="https://youtu.be/bOcVbLapm88" />
                    </div>
                    <div className="col-md-4 mb-2">
                    <Card title="AI Generated Content" img={card3} text="Coming soon, we hope to be offering sermon, devotional, and bible study AI generation services." />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
export default Services;
