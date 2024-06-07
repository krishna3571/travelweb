import React from 'react';
import { useInView } from 'react-intersection-observer';
import './FadingGallery.css';
import offer from "../components/image-01.png";
import offer02 from "../components/offer_02-3150-min.png";
import offer03 from "../components/pexels-anne-sophie-parent-1111377-2105416.jpg";

const images = [
    offer, // Replace with your actual image paths
    offer02,
    offer03,
   
];

const FadingGallery = () => {
    return (
        <div className="gallery">
            {images.map((src, index) => (
                <FadeInImage key={index} src={src} delay={index * 0.2} />
            ))}
        </div>
    );
};

const FadeInImage = ({ src, delay }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <div
            ref={ref}
            className="image-container"
            style={{
                transitionDelay: `${delay}s`,
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(20px)',
            }}
        >
            <img src={src} alt="" className="image" />
        </div>
    );
};

export default FadingGallery;
