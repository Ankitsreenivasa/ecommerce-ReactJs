import { Carousel } from "@material-tailwind/react";

export function CarouselCustomNavigation() {
  return (
    <div className="flex justify-center bg-black">
      <Carousel
        className="my-14 mx-50 w-4/5 h-1/2"
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "w-8 bg-blue-600" : "w-4 bg-white/50"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        <img
          src="src/Components/Assets/iPhone/maxresdefault.jpg"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <img
          src="src/Components/Assets/iPhone/ip14.jpg"
          alt="image 2"
          className="h-full w-full object-cover"
        />

        <img
          src="src/Components/Assets/TVs/apple-tv__e7aqjl2rqzau_og.png"
          alt="image 1"
          className="h-full w-full object-cover"
        />

        <img
          src="src/Components/Assets/Macbook/macbook-air_overview__15sjf4iagj6q_og.png"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <img
          src="src/Components/Assets/Macbook/mcbpro.jpeg"
          alt="image 1"
          className="h-full w-full object-cover"
        />
      </Carousel>
    </div>
  );
}
