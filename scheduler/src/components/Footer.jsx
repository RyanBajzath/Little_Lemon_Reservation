import imagesrc from "../images/restaurant chef B.jpg";

export default function Footer() {
  return (
    <footer>
      <div className="footerContainer">
        <img className="footerImg" src={imagesrc} />
        <section className="footerList">
          <h4>Doormat Navigation</h4>
          <ul className="footerListItems">
            <li>home</li>
            <li>about</li>
            <li>menu</li>
            <li>reservations</li>
            <li>order online</li>
            <li>login</li>
          </ul>
        </section>
        <section className="footerList">
          <h4>Contact</h4>
          <ul className="footerListItems">
            <li>address</li>
            <li>phone number</li>
            <li>email</li>
          </ul>
        </section>
        <section className="footerList">
          <h4>Social Media Links</h4>
          <ul className="footerListItems">
            <li>address</li>
            <li>phone number</li>
            <li>email</li>
          </ul>
        </section>
      </div>
    </footer>
  );
}
