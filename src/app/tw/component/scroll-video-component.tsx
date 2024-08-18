import React, { useEffect, useRef, useState } from 'react';

interface ScrollVideoProps {
  src: string;
}

const ScrollVideo: React.FC<ScrollVideoProps> = ({ src }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isVideoReady, setIsVideoReady] = useState(false);

  useEffect(() => {
    console.log("Component mounted. Video src:", src);
    const observer = new IntersectionObserver(
        ([entry]) => {
          const newIsVisible = entry.isIntersecting;
          console.log("Intersection status changed. Is visible:", newIsVisible);
          setIsVisible(newIsVisible);
        },
        { threshold: 0.5 }  // Changed from 1.0 to 0.5
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

    videoElement.addEventListener('canplay', handleCanPlay);
    console.log("CanPlay event listener added");

    // Check if video is already loaded
    if (videoElement.readyState >= 3) {
      console.log("Video is already loaded");
      setIsVideoReady(true);
    }

    return () => {
      videoElement.removeEventListener('canplay', handleCanPlay);
      console.log("CanPlay event listener removed");
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
      <div ref={containerRef} style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <video
            ref={videoRef}
            src={src}
            style={{ maxWidth: '100%', maxHeight: '100%' }}
            loop
            muted
            playsInline
            autoPlay
            preload="auto"
            onLoadedMetadata={() => console.log("Video metadata loaded")}
            onError={(e) => console.error("Video error:", (e.target as HTMLVideoElement).error)}
        />
      </div>
  );
};

export default ScrollVideo;