import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';

// Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export interface GalleryImage {
    src: string;
    alt: string;
}

interface CoverflowSwiperProps {
    images: GalleryImage[];
}

const CoverflowSwiper: React.FC<CoverflowSwiperProps> = ({ images }) => {
    return (
        <>
            <style jsx global>{`
                .swiper-button-next,
                .swiper-button-prev {
                    color: #ffffff; /* White */
                    text-shadow: 0 0 3px rgba(0, 0, 0, 0.3); /* Subtle shadow for visibility */
                }
                .swiper-pagination-bullet {
                    background-color: #ffffff; /* White */
                    opacity: 0.7;
                    box-shadow: 0 0 3px rgba(0, 0, 0, 0.3); /* Subtle shadow for visibility */
                }
                .swiper-pagination-bullet-active {
                    background-color: #ffffff; /* White */
                    opacity: 1;
                }
            `}</style>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={{ clickable: true }}
                navigation={true}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="w-full h-[calc(100vh-100px)]"
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index} className="w-3/4">
                        <div className="relative w-full h-full">
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default CoverflowSwiper;