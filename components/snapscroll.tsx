// @ts-nocheck

import { useState, useRef, useEffect } from "react";
import Image from 'next/image';


export default function SnapScrollComponent() {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    { id: 0, src: "/image1.jpg", alt: "Image 1" },
    { id: 1, src: "/image2.jpg", alt: "Image 2" },
    { id: 2, src: "/image3.jpg", alt: "Image 3" },
    { id: 3, src: "/image4.jpg", alt: "Image 4" },
  ];

  const handleScroll = () => {
    const container = containerRef.current;
    const scrollPosition = container.scrollTop;
    const sectionHeight = window.innerHeight / 2;
    const index = Math.round(scrollPosition / sectionHeight);
    setActiveIndex(index);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const handleButtonClick = (index) => {
    setActiveIndex(index);
    const container = containerRef.current;
    if (container) {
      container.scrollTo({ top: index * (window.innerHeight / 2), behavior: "smooth" });
    }
  };

  return (
    <div ref={containerRef} className="snap-container">
      {/* Top Div */}
      <div className="snap-top">
        <Image
          src={images[activeIndex].src}
          alt={images[activeIndex].alt}
          className="snap-image"
          width={500}  // Specify width
          height={500} // Specify height
          priority={true} // Use if the image is important for SEO or above-the-fold
        />
      </div>

      {/* Bottom Div */}
      <div className="snap-bottom">
        <div className="button-container">
          {images.map((image, index) => (
            <button
              key={image.id}
              className={`snap-button ${index === activeIndex ? "active" : ""}`}
              onClick={() => handleButtonClick(index)}
            >
              Button {index + 1}
            </button>
          ))}
        </div>
      </div>

      <style jsx>{`
        .snap-container {
          display: flex;
          flex-direction: column;
          height: 100vh;
          scroll-snap-type: y mandatory;
          overflow-y: scroll;
        }

        .snap-top {
          height: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          scroll-snap-align: start;
        }

        .snap-bottom {
          height: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          scroll-snap-align: end;
        }

        .snap-image {
          max-height: 100%;
          max-width: 100%;
        }

        .button-container {
          display: flex;
          gap: 10px;
        }

        .snap-button {
          padding: 10px 20px;
          cursor: pointer;
          border: none;
          background: #ddd;
          transition: background 0.3s;
        }

        .snap-button.active {
          background: #555;
          color: #fff;
        }

        .snap-button:hover {
          background: #ccc;
        }
      `}</style>
    </div>
  );
}
