import React, { useEffect } from 'react';
import './Dashboard.css';
import ViewAgendaIcon from '@mui/icons-material/ViewAgenda';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import '../Home/Home.css';
import { CustomMouse } from '../../components/customMouse/CustomMouse';
import MovieCard from '../../components/movieCard/MovieCard';


const Dashboard = () => {
    const [currentPage, setCurrentPage] = React.useState('filmes');
    const [currentCategory, setCurrentCategory] = React.useState(null);
    const [isSidebarHovered, setIsSidebarHovered] = React.useState(false);
    const [data, setData] = React.useState([]);
    const chaveApi = import.meta.env.VITE_CHAVEAPI;


    const dictCategories = {
        "acao": 28,
        "aventura": 12,
        "drama": 18,
        "comedia": 35,
        "infantil": 10751
    }





    useEffect(() => {
        const fetchMovies = async () => {
            try {
                let cat = dictCategories[currentCategory];
                let url = `https://api.themoviedb.org/3/movie/popular?api_key=${chaveApi}&language=pt-BR&page=1`;
                if (currentCategory) {
                    url = `https://api.themoviedb.org/3/discover/movie?api_key=${chaveApi}&language=pt-BR&with_genres=${cat}`;
                }
                const response = await fetch(url);
                const res = await response.json();
                setData(res);
                console.log(res);
            } catch (error) {
                console.error('Error fetching movies:', error);
            }
        };

        fetchMovies();
    }, [currentCategory]);

    const setCategory = (cat) => {
        if (cat === currentCategory) {
            setCurrentCategory(null);
        }
        else {
            const allMovies = document.querySelectorAll('.filmes-grid');
            allMovies.forEach(movie => {
                movie.classList.add('fade-out');
                setTimeout(() => {
                    movie.classList.remove('fade-out');
                    movie.classList.add('fade-in');
                }, 10);
            });
            setCurrentCategory(cat);
        }
    }

    return (
        <>
            <CustomMouse />
            <div className='main-container'>
                <div
                    className='sidebar background'
                    onMouseEnter={() => setIsSidebarHovered(true)}
                    onMouseLeave={() => setIsSidebarHovered(false)}
                >
                    <label className='neonTextLower'>{isSidebarHovered ? 'NeonFlix' : 'NF'}</label>
                    <div className='sidebar-menu'>
                        <div className='icon-sidebar' onClick={() => setCurrentPage('filmes')}>
                            <ViewAgendaIcon style={{ color: currentPage === 'filmes' ? 'rgb(171, 20, 209)' : 'white' }} />
                            {isSidebarHovered && <label style={{ color: currentPage === 'filmes' ? 'rgb(171, 20, 209)' : 'white' }} >Filmes</label>}
                        </div>
                        <div className='icon-sidebar' onClick={() => setCurrentPage('perfil')}>
                            <PersonIcon style={{ color: currentPage === 'perfil' ? 'rgb(171, 20, 209)' : 'white' }} />
                            {isSidebarHovered && <label style={{ color: currentPage === 'perfil' ? 'rgb(171, 20, 209)' : 'white' }} >Perfil</label>}
                        </div>
                        <div className='icon-sidebar' onClick={() => setCurrentPage('config')}>
                            <SettingsIcon style={{ color: currentPage === 'config' ? 'rgb(171, 20, 209)' : 'white' }} />
                            {isSidebarHovered && <label style={{ color: currentPage === 'config' ? 'rgb(171, 20, 209)' : 'white' }}>Config</label>}
                        </div>
                    </div>
                </div>
                <div className='page-container background'>
                    <div className={`page-content ${currentPage === 'filmes' ? 'fade-in' : 'fade-out'}`}>
                        {currentPage === 'filmes' && <div>
                            <div className='categorias'>
                                <h1 onClick={() => { setCategory("acao") }} style={{ color: currentCategory === 'acao' ? 'rgb(171, 20, 209)' : 'white' }}>Ação</h1>
                                <h1 onClick={() => { setCategory("aventura") }} style={{ color: currentCategory === 'aventura' ? 'rgb(171, 20, 209)' : 'white' }}>Aventura</h1>
                                <h1 onClick={() => { setCategory("drama") }} style={{ color: currentCategory === 'drama' ? 'rgb(171, 20, 209)' : 'white' }}>Drama</h1>
                                <h1 onClick={() => { setCategory("comedia") }} style={{ color: currentCategory === 'comedia' ? 'rgb(171, 20, 209)' : 'white' }}>Comedia</h1>
                                <h1 onClick={() => { setCategory("infantil") }} style={{ color: currentCategory === 'infantil' ? 'rgb(171, 20, 209)' : 'white' }}>Infantil</h1>
                            </div>

                            {currentCategory && <div className={`filmes-grid fade-in`}>
                                {data.results && data.results.map((movie) => (
                                    <MovieCard
                                        key={movie.id}
                                        title={movie.title}
                                        description={movie.overview.substring(0, 100) + '...'}
                                        image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                    />
                                ))}
                            </div>}
                        </div>}
                    </div>
                    <div className={`page-content ${currentPage === 'perfil' ? 'fade-in' : 'fade-out'}`}>
                        {currentPage === 'perfil' && <div>
                            <h2>Perfil</h2>
                        </div>}
                    </div>
                    <div className={`page-content ${currentPage === 'config' ? 'fade-in' : 'fade-out'}`}>
                        {currentPage === 'config' && <div>
                            <h2>Config</h2>
                        </div>}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;