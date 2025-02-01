import React from "react";
import "../assets/styles/DiscographySection.css";

const DiscographySection = () => {
  const albums = [
    { alt: "Pantropiko", image: "src/assets/images/image 11.png" },
    { alt: "Karera", image: "src/assets/images/image 10.png" },
    { alt: "Feel Good", image: "src/assets/images/image 9.png" },
    { alt: "Lagi", image: "src/assets/images/image 8.png" },
    { alt: "Goldern Arrow", image: "src/assets/images/image 7.png" },
    { alt: "Kapit Lang", image: "src/assets/images/image 4.png" },
    { alt: "Born to Win", image: "src/assets/images/image 5.png" },
    { alt: "Da Coconut Nut", image: "src/assets/images/image 2.png" },
  ];

  return (
    <section className="disc-section">
      <div className="disc-container">
        <h2>Discography</h2>
        <div className="disc-grid">
          {albums.map((album) => (
            <div key={album.title} className="album">
              <div className="album-image-container">
                <img src={album.image} />
              </div>
              <h3 className="album-title">{album.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiscographySection;
