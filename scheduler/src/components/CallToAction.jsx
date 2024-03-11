//sometimes referred to as the jumbotron or the hero, this component is the call-to-action section that guides the user to click a call-to-action button while enticing them to do so in as few words as possible
import logo from "../images/restauranfood.jpg";

export default function CallToAction() {
  return (
    <>
<div className="marginBottom">
      <section className="callToActionTotal">

        <section className="callToActionLeft">
          <div className="title">
            <h1>Little Lemon</h1>
            <h3>Chicago</h3>
          </div>
          <p>
            The little Lemon restaurant is a charming neighbourhood beistro that
            serves simple food in a casual environment. The restaurant features
            a locally-sourced menu daily specials.
          </p>
          <button>Reserve a table</button>
        </section>
        <section className="callToActionRight">
          <img className="callToArmsImg" src={logo}></img>
        </section>
      </section>
      </div>
    </>
  );
}
