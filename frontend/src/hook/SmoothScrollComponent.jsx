
import { useRef, useEffect } from 'react';

const SmoothScrollComponent = () => {
  const dom = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
          entry.target.style.opacity = 1;
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1
      }
    );

    if (dom.current) {
      dom.current.style.opacity = 0;
      dom.current.style.transform = 'translateY(50px)';
      observer.observe(dom.current);
    }

    return () => observer && observer.disconnect();
  }, []);

  return {
    ref: dom
  };
};

export default SmoothScrollComponent ;
