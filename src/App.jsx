import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100,
    });
  });

  return (
    <div className="overflow-x-hidden">
      <Navbar />
    </div>
  );
};

export default App;
