import React, { useState } from 'react';
import './MovieCard.css';

const MovieCard = ({ title, description, image }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div 
            className={`movie-card ${isHovered ? 'hovered' : ''}`} 
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)}
        >
            <img src={image} alt={title} className="movie-image" />
            <div className="movie-info">
                <h3>{title}</h3>
                {isHovered && <p>{description}</p>}
            </div>
        </div>
    );
};

export default MovieCard;