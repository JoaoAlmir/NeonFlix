import React, { useEffect } from 'react';
import './Dashboard.css';
import ViewAgendaIcon from '@mui/icons-material/ViewAgenda';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import '../Home/Home.css';
import { CustomMouse } from '../../components/customMouse/CustomMouse';
import MovieCard from '../../components/movieCard/MovieCard';
import SearchIcon from '@mui/icons-material/Search';
import Carrosel from '../../components/carrossel/Carrosel';
import { fetchMovies, fetchRandomMovie, fetchTopRatedMovies, fetchPopularMovies } from '../../api/MovieApi';
import { useNavigate } from 'react-router-dom';
import { Modal } from '@mui/material';


const Dashboard = () => {
    const nav = useNavigate()

    const [currentTab, setCurrentTab] = React.useState('filmes');
    const [currentCategory, setCurrentCategory] = React.useState(null);
    const [isSidebarHovered, setIsSidebarHovered] = React.useState(false);

    const [topMovies, setTopMovies] = React.useState([]);
    const [popularMovies, setPopularMovies] = React.useState([]);
    const [randomMovies, setRandomMovies] = React.useState([]);
    const [categoryMovies, setCategoryMovies] = React.useState([]);

    const [searchQuery, setSearchQuery] = React.useState('');

    const [infoMovie, setInfoMovie] = React.useState(null);
    const [modalIsOpen, setModalIsOpen] = React.useState(false);


    useEffect(() => {
        fetchRandomMovie().then(movies => setRandomMovies(movies));
        fetchTopRatedMovies().then(movies => setTopMovies(movies));
        fetchPopularMovies().then(movies => setPopularMovies(movies));
    }, []);



    useEffect(() => {
        if (currentCategory === 'busca') {
            const query = document.getElementById('search-input').value;
            if (query) {
                setTimeout(() => {
                    fetchMovies(1, 'search', query).then(mov => setCategoryMovies(mov));
                }, 500);
            }
        }
        else {
            fetchMovies(1, currentCategory).then(mov => setCategoryMovies(mov));
        }
    }, [currentCategory, searchQuery]);

    const setCategory = (cat) => {
        if (cat === currentCategory && cat != 'busca') {
            setCurrentCategory(null);
        }
        else {
            const allMovies = document.querySelectorAll('.filmes-grid');
            const pagination = document.querySelectorAll('.pagination');

            allMovies.forEach(movie => {
                movie.classList.add('fade-out');
                setTimeout(() => {
                    movie.classList.remove('fade-out');

                }, 500);
            });
            pagination.forEach(pag => {
                pag.style.display = 'none';
                setTimeout(() => {
                    pag.style.display = 'flex';
                }, 1000);
            });
            setTimeout(() => {
                setCurrentCategory(cat);
            }, 500);
        }
    }

    const changePage = (page) => {
        const allMovies = document.querySelectorAll('.filmes-grid');
        const pagination = document.querySelectorAll('.pagination');
        allMovies.forEach(movie => {
            movie.classList.add('fade-out');
            setTimeout(() => {
                movie.classList.remove('fade-out');
            }, 500);
        });
        pagination.forEach(pag => {
            pag.style.display = 'none';
            setTimeout(() => {
                pag.style.display = 'flex';
            }, 1000);
        });

        setTimeout(() => {
            fetchMovies(page, currentCategory).then(mov => setCategoryMovies(mov));
        }, 500);
    };

    return (
        <>
            <CustomMouse />
            <div className={`main-container`} >
                <div
                    className='sidebar neon-border'
                    onMouseEnter={() => setIsSidebarHovered(true)}
                    onMouseLeave={() => setIsSidebarHovered(false)}
                >
                    <label className='neonTextLower' onClick={() => { nav('/') }} >{isSidebarHovered ? 'NeonFlix' : 'NF'} </label>
                    <div className='sidebar-menu'>
                        <div className='icon-sidebar' onClick={() => setCurrentTab('filmes')}>
                            <ViewAgendaIcon style={{ color: currentTab === 'filmes' ? 'rgb(171, 20, 209)' : 'white' }} />
                            {isSidebarHovered && <label style={{ color: currentTab === 'filmes' ? 'rgb(171, 20, 209)' : 'white' }} >Filmes</label>}
                        </div>
                        <div className='icon-sidebar' onClick={() => setCurrentTab('perfil')}>
                            <PersonIcon style={{ color: currentTab === 'perfil' ? 'rgb(171, 20, 209)' : 'white' }} />
                            {isSidebarHovered && <label style={{ color: currentTab === 'perfil' ? 'rgb(171, 20, 209)' : 'white' }} >Perfil</label>}
                        </div>
                        <div className='icon-sidebar' onClick={() => setCurrentTab('config')}>
                            <SettingsIcon style={{ color: currentTab === 'config' ? 'rgb(171, 20, 209)' : 'white' }} />
                            {isSidebarHovered && <label style={{ color: currentTab === 'config' ? 'rgb(171, 20, 209)' : 'white' }}>Config</label>}
                        </div>
                    </div>
                </div>
                <div className='page-container neon-border'>
                    <div className={`page-content ${currentTab === 'filmes' ? 'fade-in' : 'fade-out'}`}>
                        {currentTab === 'filmes' && <div>
                            <div className='categorias'>
                                <button onClick={() => { setCategory("acao") }} style={{ color: currentCategory === 'acao' ? 'rgb(171, 20, 209)' : 'white' }}>Ação</button>
                                <button onClick={() => { setCategory("aventura") }} style={{ color: currentCategory === 'aventura' ? 'rgb(171, 20, 209)' : 'white' }}>Aventura</button>
                                <button onClick={() => { setCategory("drama") }} style={{ color: currentCategory === 'drama' ? 'rgb(171, 20, 209)' : 'white' }}>Drama</button>
                                <button onClick={() => { setCategory("comedia") }} style={{ color: currentCategory === 'comedia' ? 'rgb(171, 20, 209)' : 'white' }}>Comedia</button>
                                <button onClick={() => { setCategory("infantil") }} style={{ color: currentCategory === 'infantil' ? 'rgb(171, 20, 209)' : 'white' }}>Infantil</button>
                                <span onInput={() => {
                                    setSearchQuery(document.getElementById('search-input').value)
                                }} onClick={() => { setCategory("busca"); document.getElementById('search-input').focus() }} style={{ color: currentCategory === 'busca' ? 'rgb(171, 20, 209)' : 'white' }}  ><SearchIcon style={{ fontSize: "3vh" }} /> <input value={searchQuery} id='search-input' onChange={(e) => setSearchQuery(e.target.value)} /></span>

                            </div>
                            {!currentCategory && <div className='showcase fade-in' >
                                <div>
                                    <h1>Populares</h1>
                                    <Carrosel movies={popularMovies} />

                                </div>
                                <div>
                                    <h1>Melhores notas</h1>
                                    <Carrosel movies={topMovies} />
                                </div>

                                <div>
                                    <h1>Deixe a sorte decidir</h1>
                                    <Carrosel movies={randomMovies} />
                                </div>

                            </div>}
                            {currentCategory && <div className={`filmes-grid fade-in`}>
                                {categoryMovies.results && categoryMovies.results.map((movie) => (
                                    <MovieCard
                                        onClick={() => {
                                            setInfoMovie(movie);
                                            setModalIsOpen(true);
                                            console.log('teste');
                                        }}
                                        key={movie.id}
                                        title={movie.title}
                                        description={movie.overview ? movie.overview.substring(0, 120) + '...' : null}
                                        image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                    />
                                ))}
                            </div>}

                            {(categoryMovies.total_pages > 1 && currentCategory != 'busca') && (
                                currentCategory && (<div className="pagination">
                                    {categoryMovies.page > 2 && (
                                        <button
                                            className="page-button"
                                            onClick={() => {
                                                changePage(1);
                                            }}
                                        >
                                            {1}
                                        </button>
                                    )}
                                    {categoryMovies.page > 1 && (
                                        <button
                                            className="page-button"
                                            onClick={() => {
                                                changePage(categoryMovies.page - 1);
                                            }}
                                        >
                                            {categoryMovies.page - 1}
                                        </button>
                                    )}
                                    <button
                                        className="page-button actual"
                                    >
                                        {categoryMovies.page}
                                    </button>
                                    {(categoryMovies.page < categoryMovies.total_pages && categoryMovies.page < 400) && (
                                        <button
                                            className="page-button"
                                            onClick={() => {
                                                changePage(categoryMovies.page + 1);
                                            }}
                                        >
                                            {categoryMovies.page + 1}
                                        </button>
                                    )}
                                    {categoryMovies.page < 399 && (
                                        <button
                                            className="page-button"
                                            onClick={() => {
                                                changePage(400);
                                            }}
                                        >
                                            {400}
                                        </button>
                                    )}
                                </div>)
                            )}
                        </div>}

                        {infoMovie && (
                            <Modal
                                open={modalIsOpen}
                                onClose={() => setModalIsOpen(false)}
                                aria-labelledby="modal-title"
                                aria-describedby="modal-description"
                            >
                                <div className="modal-content neon-border">
                                    <div className="modal-left">
                                        <h2 id="modal-title">{infoMovie.title}</h2>
                                        <p id="modal-description">{infoMovie.overview}</p>
                                    </div>
                                    <div className="modal-right">
                                        <img src={`https://image.tmdb.org/t/p/w500${infoMovie.backdrop_path}`} alt={infoMovie.title} />
                                        <div className="modal-info">
                                            <p>Nota: {infoMovie.vote_average}</p>
                                            <p>Qtd votos: {infoMovie.vote_count}</p>
                                            <p>{new Date(infoMovie.release_date).toLocaleDateString('pt-BR')}</p>
                                        </div>
                                    </div>
                                </div>
                            </Modal>
                        )}
                    </div>
                    <div className={`page-content ${currentTab === 'perfil' ? 'fade-in' : 'fade-out'}`}>
                        {currentTab === 'perfil' && <div>
                            <h2>Perfil</h2>
                        </div>}
                    </div>
                    <div className={`page-content ${currentTab === 'config' ? 'fade-in' : 'fade-out'}`}>
                        {currentTab === 'config' && <div>
                            <h2>Config</h2>
                        </div>}
                    </div>
                </div>
            </div>

        </>
    );
};

export default Dashboard;