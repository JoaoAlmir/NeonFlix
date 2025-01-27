import React, { useEffect, useRef, useState } from 'react';
import MovieCard from '../movieCard/MovieCard'; // Componente para o card do filme
import './Carrosel.css';

const Carrosel = ({ movies }) => {
    const carroselRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const carrosel = carroselRef.current;
        if (!carrosel) return;

        const scrollAmount = 265; // Distância a ser rolada a cada intervalo
        const scrollInterval = 3000; // Intervalo de 3 segundos

        const moveCarrosel = () => {
            const maxScrollLeft = carrosel.scrollWidth - carrosel.clientWidth;
            if (carrosel.scrollLeft < maxScrollLeft) {
                carrosel.scrollBy({ left: scrollAmount, behavior: 'smooth' }); // Move para a direita
            } else {
                carrosel.scrollTo({ left: 0, behavior: 'smooth' }); // Volta ao início
            }
        };

        // Definindo a rolagem automática
        const intervalId = setInterval(() => {
            if (!isHovered) { // Se o mouse não estiver sobre o carrossel
                moveCarrosel();
            }
        }, scrollInterval);

        // Limpando o intervalo ao desmontar
        return () => clearInterval(intervalId);

    }, [isHovered]);

    return (
        <div
            className="carrosel-wrapper"
            onMouseEnter={() => setIsHovered(true)} // Quando o mouse entra, para a rolagem
            onMouseLeave={() => setIsHovered(false)} // Quando o mouse sai, retoma a rolagem
        >
            <div className="carrosel-container" ref={carroselRef}>
                {movies.map((movie) => (
                    <MovieCard
                        key={movie.id}
                        title={movie.title}
                        description={movie.overview ? movie.overview.substring(0, 120) + '...' : null}
                        image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carrosel;
