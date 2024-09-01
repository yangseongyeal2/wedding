import React, { useEffect, useRef, useState } from 'react';

interface ScrollVideoProps {
  src: string;
}

const ScrollVideo: React.FC<ScrollVideoProps> = ({ src }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [aspectRatio, setAspectRatio] = useState<number | null>(null);

  useEffect(() => {
    console.log("Component mounted. Video src:", src);
    const observer = new IntersectionObserver(
        ([entry]) => {
          const newIsVisible = entry.isIntersecting;
          console.log("Intersection status changed. Is visible:", newIsVisible);
          setIsVisible(newIsVisible);
        },
        { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
      console.log("Observer attached to container");
    } else {
      console.warn("Container ref is null");
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
        console.log("Observer detached from container");
      }
    };
  }, [src]);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) {
      console.warn("Video ref is null");
      return;
    }

    const handleCanPlay = () => {
      console.log("Video can play");
      setIsVideoReady(true);
    };

    const handleLoadedMetadata = () => {
      console.log("Video metadata loaded");
      if (videoElement.videoWidth && videoElement.videoHeight) {
        const ratio = videoElement.videoHeight / videoElement.videoWidth;
        setAspectRatio(ratio);
        console.log("Video aspect ratio set:", ratio);
      }
    };

    videoElement.addEventListener('canplay', handleCanPlay);
    videoElement.addEventListener('loadedmetadata', handleLoadedMetadata);
    console.log("Event listeners added");

    if (videoElement.readyState >= 3) {
      console.log("Video is already loaded");
      setIsVideoReady(true);
      handleLoadedMetadata();
    }

    return () => {
      videoElement.removeEventListener('canplay', handleCanPlay);
      videoElement.removeEventListener('loadedmetadata', handleLoadedMetadata);
      console.log("Event listeners removed");
    };
  }, []);

  useEffect(() => {
    console.log("Visibility or video readiness changed. Is visible:", isVisible, "Is video ready:", isVideoReady);
    if (isVisible && isVideoReady && videoRef.current) {
      console.log("Attempting to play video");
      videoRef.current.play()
          .then(() => console.log("Video playback started successfully"))
          .catch(error => console.error("Video play failed:", error));
    } else if (!isVisible && videoRef.current) {
      console.log("Pausing video");
      videoRef.current.pause();
    }
  }, [isVisible, isVideoReady]);

  return (
      <div
          className="w-full bg-black overflow-hidden"
          ref={containerRef}
          style={{ aspectRatio: aspectRatio ? `1 / ${aspectRatio}` : undefined }}
      >
        <video
            ref={videoRef}
            src={src}
            className="w-full h-full object-cover"
            loop
            muted
            playsInline
            autoPlay
            preload="auto"
            poster={src.replace(/\.[^/.]+$/, ".jpg")}  // Assumes a jpg poster with the same name exists
            onError={(e) => console.error("Video error:", (e.target as HTMLVideoElement).error)}
        />
      </div>
  );
};

export default ScrollVideo;