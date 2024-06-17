import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faTimes } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect, useRef } from "react";

const AboutVeterinary = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [counts, setCounts] = useState({
    happyClients: 0,
    memberActive: 0,
    clientRatings: 0,
    expertTeam: 0,
  });
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const targetCounts = {
    happyClients: 21,
    memberActive: 3,
    clientRatings: 4.7,
    expertTeam: 67,
  };

  useEffect(() => {
    const handleIntersection = (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting && !hasAnimated) {
        startCounting();
        setHasAnimated(true);
      }
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  const startCounting = () => {
    const duration = 2000; 
    const incrementInterval = 20;
    const steps = duration / incrementInterval;

    const incrementCounters = () => {
      setCounts((prevCounts) => {
        const newCounts = {};
        for (let key in targetCounts) {
          newCounts[key] =
            prevCounts[key] < targetCounts[key]
              ? prevCounts[key] + targetCounts[key] / steps
              : targetCounts[key];
        }
        return newCounts;
      });
    };

    const interval = setInterval(incrementCounters, incrementInterval);
    setTimeout(() => clearInterval(interval), duration);
  };

  const handleVideoClick = () => {
    setIsVideoPlaying(true);
  };

  const handleVideoClose = () => {
    setIsVideoPlaying(false);
  };

  return (
    <section id="aboutVeterinary" ref={sectionRef}>
      <div className="left">
        {isVideoPlaying ? (
          <>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube-nocookie.com/embed/W2nV1mpqrmw?si=KEc8G4zCxcLucR5Y"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Veterinary Video"
            ></iframe>
            <button className="close-button" onClick={handleVideoClose}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </>
        ) : (
          <div className="video" onClick={handleVideoClick}>
            <FontAwesomeIcon icon={faPlay} />
          </div>
        )}
      </div>
      <div className="right">
        <h4>Trust Ziggy for Tailored Pet Care Solutions.</h4>
        <p>
          Lorem ipsum dolor sit amet, est vide voluptaria ex, nec in hinc solum
          indoctum. Est ad veri sonet soluta, vim eu esse accusamus. In eam
          solum impetus.
        </p>
      </div>
      <div className="abselutes">
        <div className="col">
          <h4>{Math.floor(counts.happyClients)+1}K+</h4>
          <h5>Happy Clients</h5>
        </div>
        <div className="col">
          <h4>{Math.floor(counts.memberActive)+1}K+</h4>
          <h5>Member Active</h5>
        </div>
        <div className="col">
          <h4>{counts.clientRatings.toFixed(1)}</h4>
          <h5>Client Ratings</h5>
        </div>
        <div className="col">
          <h4>{Math.floor(counts.expertTeam)+1}</h4>
          <h5>Expert Team</h5>
        </div>
      </div>
    </section>
  );
};

export default AboutVeterinary;
