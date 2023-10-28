import { useEffect, useState } from "react";

const Carrousel = () => {
  const data = [
    "https://images5.alphacoders.com/996/996329.jpg",
    "https://img.freepik.com/free-photo/dumbbell-floor_587448-4800.jpg?t=st=1698520174~exp=1698523774~hmac=d3a2cde2f6426f2a3a6b455b26479234f294a79802b717f3acea8f18480d1a12&w=1380",
    "https://img.freepik.com/premium-photo/dumbbell-floor_587448-3502.jpg?w=1380",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const styleTrans = { transform: `translate(-${currentIndex * 100}%)` };
  const infinteScroll = () => {
    if (currentIndex === data.length - 1) {
      return setCurrentIndex(0);
    }
    return setCurrentIndex(currentIndex + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      infinteScroll();
    }, 4000);
    return () => clearInterval(interval);
  });

  return (
    <div className="carousel-container">
      {data.map((item, index) => {
        return (
          <div className="carousel-item" key={index} style={styleTrans}>
            <img src={item} alt={index} />
          </div>
        );
      })}
    </div>
  );
};

export default Carrousel;
