import { useState } from "react";
import "./App.css";
import { StickyNavbar } from "./Components/Navbar/StickyNavbar";
import { CarouselCustomNavigation } from "./Components/Hero/CarouselCustomNavigation";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <StickyNavbar/>
      <CarouselCustomNavigation/>
    </>
  );
}

export default App;
