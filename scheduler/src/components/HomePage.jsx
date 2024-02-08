//the component for the homepage
import CallToAction from "./CallToAction";
import Specials from "./Specials";
import CustomerSay from "./CustomersSay";
import Chicago from "./Chicago";

export default function HomePage() {
  return (
    <>
      <CallToAction />
      <Specials/>
      <CustomerSay/>
      <Chicago/>
    </>
  );
}
