import React from "react";
import { StickyNavbar } from "../../src/Components/Navbar/StickyNavbar";
import { CarouselCustomNavigation } from "../../src/Components/Hero/CarouselCustomNavigation";
import { CarouselWithContent } from "../../src/Components/Hero/CarouselWithContent";
import { SimpleFooter } from "../../src/Components/Footer/SimpleFooter";

function Home() {
  return (
    <>
      <StickyNavbar/>
      <CarouselCustomNavigation/>
      <CarouselWithContent />
      <SimpleFooter/>
    </>
  );
}

export default Home;
