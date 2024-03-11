//the component that loops over the specials that come from a data source
import salad from "../images/greek salad.jpg";
import lemon from "../images/lemon dessert.jpg";
import food from "../images/bruchetta.svg";

export default function Specials() {
  return (
    <>
      <section className="specials">
        <div className="specialsTitle">
          <h2>This weeks specials!</h2>
          <button>online order</button>
        </div>
        <div className="specialsContainer">
          <div className="specialItem">
            <img src={salad} className="specialImage" />
            <div className="specialItemBio">
              <div className="specialItemHeader">
                <p>Greek salad</p>
                <p className="price">13$</p>
              </div>
              <p>
                The famous greek salad of crispy lettuce, peppers, olives and
                our Chicago style feta cheese, garnished with crunchy garlic and
                rosemary croutons.{" "}
              </p>
              <p>Order a delivery</p>
            </div>
          </div>
          <div className="specialItem">
            <img src={food} className="specialImage" />
            <div className="specialItemBio">
            <div className="specialItemHeader">
              <p>Greek salad</p>
              <p className="price">13$</p>
            </div>
            <p>Bruchetta</p>
            <p>
              Our Bruschetta is made from grilled bread that has been smeared
              with garlic and seasoned with salt and olive oil.{" "}
            </p>
            <p>Order a delivery</p>
            </div>
          </div>
          <div className="specialItem">
            <img src={lemon} className="specialImage" />
            <div className="specialItemBio">
            <div className="specialItemHeader">
              <p>Greek salad</p>
              <p className="price">13$</p>
            </div>
            <p>Lemon Dessert</p>
            <p>
              This comes straight from grandma’s recipe book, every last
              ingredient has been sourced and is as authentic as can be
              imagined.
            </p>
            <p>Order a delivery</p>
          </div>
          </div>
        </div>
      </section>
    </>
  );
}
