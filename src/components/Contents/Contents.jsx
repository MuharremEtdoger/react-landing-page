import Slider from "./Slider/Slider.jsx";
import Products from "./Products/Products.jsx";
import Welcome from "./Welcome/Welcome.jsx";
import Band from "./Band/Band.jsx";
import Projects from "./Projects/Projects.jsx";

export default function Contents() {
    return (
      <>
        <Slider/>
        <Welcome/>
        <Products/>
        <Projects/>
        <Band/>
      </>
    )
}
