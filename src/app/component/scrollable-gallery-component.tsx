import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

interface GalleryImage {
  src: string;
  alt: string;
}

interface ScrollableGalleryProps {
  images: GalleryImage[];
}

const ScrollableGallery: React.FC<ScrollableGalleryProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const gallery = galleryRef.current;
    if (gallery) {
      const scrollTo = currentIndex * gallery.offsetWidth;
      gallery.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  }, [currentIndex]);

  const handleScroll = () => {
    const gallery = galleryRef.current;
    if (gallery) {
      const index = Math.round(gallery.scrollLeft / gallery.offsetWidth);
      setCurrentIndex(index);
    }
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div
        ref={galleryRef}
        className="flex snap-x snap-mandatory overflow-x-auto scrollbar-hide"
        style={{ scrollSnapType: 'x mandatory' }}
        onScroll={handleScroll}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full snap-center"
            style={{ scrollSnapAlign: 'center' }}
          >
            <div className="relative w-full h-[calc(100vh-100px)]">
              <Image
                src={image.src}
                alt={image.alt}
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={prevImage}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full"
      >
        ←
      </button>
      <button
        onClick={nextImage}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full"
      >
        →
      </button>
    </div>
  );
};

export default ScrollableGallery;
