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
import { Avatar, Modal } from '@mui/material';
import perfilIcon from '../../assets/profileIcon.jpg';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import pinkMouse from "../../components/customMouse/pinkMouse.png";
import blueMouse from "../../components/customMouse/blueMouse.png";
import greenMouse from "../../components/customMouse/greenMouse.png";
import LogoutIcon from '@mui/icons-material/Logout';


const Dashboard = () => {
    const nav = useNavigate()

    const [currentTab, setCurrentTab] = React.useState('filmes');
    const [currentCategory, setCurrentCategory] = React.useState(null);
    const [isSidebarHovered, setIsSidebarHovered] = React.useState(false);
    const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768);

    const [topMovies, setTopMovies] = React.useState([]);
    const [popularMovies, setPopularMovies] = React.useState([]);
    const [randomMovies, setRandomMovies] = React.useState([]);
    const [categoryMovies, setCategoryMovies] = React.useState([]);

    const [searchQuery, setSearchQuery] = React.useState('');

    const [infoMovie, setInfoMovie] = React.useState(null);
    const [modalIsOpen, setModalIsOpen] = React.useState(false);

    const [themeColor, setThemeColor] = React.useState('rosa');

    const [imgCursor, setImgCursor] = React.useState(pinkMouse);


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


    const handleThemeChange = (color) => {
        setThemeColor(color);
        setImgCursor(color === 'rosa' ? pinkMouse : color === 'azul' ? blueMouse : greenMouse);
    }

    const handleExit = () => {
        const transitionElement = document.createElement("div");
        transitionElement.style.position = "fixed";
        transitionElement.style.top = 0;
        transitionElement.style.left = 0;
        transitionElement.style.width = "100%";
        transitionElement.style.height = "100%";
        transitionElement.style.background = "radial-gradient(circle, #570a4c, #104f53)";
        transitionElement.style.zIndex = 9999;
        transitionElement.style.transition = "opacity 0.5s ease-in-out";
        transitionElement.style.opacity = 0;
        transitionElement.innerHTML = "<h1 class='neonText' style='text-align: center; margin-top: 20%; font-size: 3rem; animation: grow 0.5s forwards;'>Até Logo</h1>";
        const style = document.createElement('style');
        style.innerHTML = `
          @keyframes grow {
          from { font-size: 3rem; }
          to { font-size: 7rem; }
          }
        `;
        document.head.appendChild(style);
        document.body.appendChild(transitionElement);

        requestAnimationFrame(() => {
            transitionElement.style.opacity = 1;
        });

        setTimeout(() => {
            nav("/");
        }, 500);

        setTimeout(() => {
            transitionElement.style.opacity = 0;
            setTimeout(() => {
                document.body.removeChild(transitionElement);
                document.head.removeChild(style);
            }, 500);
        }, 1500);
    };

    return (
        <div className='dashboard'>
            { !isMobile && <CustomMouse cursorImage={imgCursor} />}
            <div id='main-container' className={`main-container`} >
                <div
                    className={`sidebar neon-border  ${themeColor}`}
                    onMouseEnter={isMobile? null : () => setIsSidebarHovered(true)}
                    onMouseLeave={isMobile? null : () => setIsSidebarHovered(false)}
                >
                    <label className={`neonTextLower ${themeColor}`} >{isSidebarHovered ? 'NeonFlix' : 'NF'} </label>
                    <div className='sidebar-menu'>
                        <div className={`icon-sidebar ${themeColor}`} onClick={() => setCurrentTab('filmes')}>
                            <ViewAgendaIcon style={{ color: currentTab === 'filmes' ? (themeColor === 'rosa' ? 'rgb(171, 20, 209)' : themeColor === 'azul' ? 'rgb(89, 167, 255)' : 'rgb(20, 209, 20)') : 'white' }} />
                            {isSidebarHovered && <label style={{ color: currentTab === 'filmes' ? (themeColor === 'rosa' ? 'rgb(171, 20, 209)' : themeColor === 'azul' ? 'rgb(89, 167, 255)' : 'rgb(20, 209, 20)') : 'white' }} >Filmes</label>}
                        </div>
                        <div className={`icon-sidebar ${themeColor}`} onClick={() => setCurrentTab('perfil')}>
                            <PersonIcon style={{ color: currentTab === 'perfil' ? (themeColor === 'rosa' ? 'rgb(171, 20, 209)' : themeColor === 'azul' ? 'rgb(89, 167, 255)' : 'rgb(20, 209, 20)') : 'white' }} />
                            {isSidebarHovered && <label style={{ color: currentTab === 'perfil' ? (themeColor === 'rosa' ? 'rgb(171, 20, 209)' : themeColor === 'azul' ? 'rgb(89, 167, 255)' : 'rgb(20, 209, 20)') : 'white' }} >Perfil</label>}
                        </div>
                        <div className={`icon-sidebar ${themeColor}`} onClick={() => setCurrentTab('config')}>
                            <SettingsIcon style={{ color: currentTab === 'config' ? (themeColor === 'rosa' ? 'rgb(171, 20, 209)' : themeColor === 'azul' ? 'rgb(89, 167, 255)' : 'rgb(20, 209, 20)') : 'white' }} />
                            {isSidebarHovered && <label style={{ color: currentTab === 'config' ? (themeColor === 'rosa' ? 'rgb(171, 20, 209)' : themeColor === 'azul' ? 'rgb(89, 167, 255)' : 'rgb(20, 209, 20)') : 'white' }}>Config</label>}
                        </div>
                        <div className={`icon-sidebar ${themeColor}`} onClick={() => handleExit()}>
                            <LogoutIcon style={{ color: currentTab === 'exit' ? (themeColor === 'rosa' ? 'rgb(171, 20, 209)' : themeColor === 'azul' ? 'rgb(89, 167, 255)' : 'rgb(20, 209, 20)') : 'white' }} />
                            {isSidebarHovered && <label style={{ color: currentTab === 'exit' ? (themeColor === 'rosa' ? 'rgb(171, 20, 209)' : themeColor === 'azul' ? 'rgb(89, 167, 255)' : 'rgb(20, 209, 20)') : 'white' }}>Sair</label>}
                        </div>

                    </div>
                </div>
                <div className={`page-container neon-border ${themeColor} `}>
                    <div className={`page-content ${currentTab === 'filmes' ? 'fade-in' : 'fade-out'}`}>
                        {currentTab === 'filmes' && <div>
                            <div className='categorias'>
                                <button className={themeColor} onClick={() => { setCategory("acao") }} style={{ color: currentCategory === 'acao' ? (themeColor === 'rosa' ? 'rgb(171, 20, 209)' : themeColor === 'azul' ? 'rgb(89, 167, 255)' : 'rgb(20, 209, 20)') : 'white' }}>Ação</button>
                                <button className={themeColor} onClick={() => { setCategory("aventura") }} style={{ color: currentCategory === 'aventura' ? (themeColor === 'rosa' ? 'rgb(171, 20, 209)' : themeColor === 'azul' ? 'rgb(89, 167, 255)' : 'rgb(20, 209, 20)') : 'white' }}>Aventura</button>
                                <button className={themeColor} onClick={() => { setCategory("drama") }} style={{ color: currentCategory === 'drama' ? (themeColor === 'rosa' ? 'rgb(171, 20, 209)' : themeColor === 'azul' ? 'rgb(89, 167, 255)' : 'rgb(20, 209, 20)') : 'white' }}>Drama</button>
                                <button className={themeColor} onClick={() => { setCategory("comedia") }} style={{ color: currentCategory === 'comedia' ? (themeColor === 'rosa' ? 'rgb(171, 20, 209)' : themeColor === 'azul' ? 'rgb(89, 167, 255)' : 'rgb(20, 209, 20)') : 'white' }}>Comedia</button>
                                <button className={themeColor} onClick={() => { setCategory("infantil") }} style={{ color: currentCategory === 'infantil' ? (themeColor === 'rosa' ? 'rgb(171, 20, 209)' : themeColor === 'azul' ? 'rgb(89, 167, 255)' : 'rgb(20, 209, 20)') : 'white' }}>Infantil</button>
                                <span className={themeColor} onInput={() => {
                                    setSearchQuery(document.getElementById('search-input').value)
                                }} onClick={() => { setCategory("busca"); document.getElementById('search-input').focus() }} style={{ color: currentCategory === 'busca' ? (themeColor === 'rosa' ? 'rgb(171, 20, 209)' : themeColor === 'azul' ? 'rgb(89, 167, 255)' : 'rgb(20, 209, 20)') : 'white' }}  ><SearchIcon style={{ fontSize: "3vh" }} /> <input value={searchQuery} id='search-input' onChange={(e) => setSearchQuery(e.target.value)} /></span>

                            </div>
                            {!currentCategory && <div className='showcase fade-in' >
                                <div>
                                    <h1>Populares</h1>
                                    <Carrosel movies={popularMovies} setInfoMovie={setInfoMovie} setModalIsOpen={setModalIsOpen} />

                                </div>
                                <div>
                                    <h1>Melhores notas</h1>
                                    <Carrosel movies={topMovies} setInfoMovie={setInfoMovie} setModalIsOpen={setModalIsOpen} />
                                </div>

                                <div>
                                    <h1>Deixe a sorte decidir</h1>
                                    <Carrosel movies={randomMovies} setInfoMovie={setInfoMovie} setModalIsOpen={setModalIsOpen} />
                                </div>

                            </div>}
                            {currentCategory && <div className={`filmes-grid fade-in`}>
                                {categoryMovies.results && categoryMovies.results.map((movie) => (
                                    <MovieCard
                                        onClick={() => {
                                            setInfoMovie(movie);
                                            setModalIsOpen(true);
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
                                            className={`page-button ${themeColor}`}
                                            onClick={() => {
                                                changePage(1);
                                            }}
                                        >
                                            {1}
                                        </button>
                                    )}
                                    {categoryMovies.page > 1 && (
                                        <button
                                            className={`page-button ${themeColor}`}
                                            onClick={() => {
                                                changePage(categoryMovies.page - 1);
                                            }}
                                        >
                                            {categoryMovies.page - 1}
                                        </button>
                                    )}
                                    <button
                                        className={`page-button ${themeColor}`}
                                    >
                                        {categoryMovies.page}
                                    </button>
                                    {(categoryMovies.page < categoryMovies.total_pages && categoryMovies.page < 400) && (
                                        <button
                                            className={`page-button ${themeColor}`}
                                            onClick={() => {
                                                changePage(categoryMovies.page + 1);
                                            }}
                                        >
                                            {categoryMovies.page + 1}
                                        </button>
                                    )}
                                    {categoryMovies.page < 399 && (
                                        <button
                                            className={`page-button ${themeColor}`}
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
                            <Modal className="fade-in-fast"
                                open={modalIsOpen}
                                onClose={() => setModalIsOpen(false)}
                                aria-labelledby="modal-title"
                                aria-describedby="modal-description"
                                style={{ cursor: 'none' }}
                            >
                                <div className={`modal-content neon-border-strong ${themeColor}`}>
                                    <div className="modal-left">
                                        <h2 id="modal-title">{infoMovie.title}</h2>
                                        <p id="modal-description">{infoMovie.overview}</p>
                                    </div>
                                   {infoMovie.vote_count > 0 &&<div className='nota' style={{ backgroundColor: infoMovie.vote_average >= 7 ? 'green' : infoMovie.vote_average >= 5 ? 'rgb(102, 102, 7)' : 'red' }}>
                                        {infoMovie.vote_average.toFixed(1)}
                                    </div>}
                                    <div className="modal-right">
                                        <img src={`https://image.tmdb.org/t/p/w500${infoMovie.backdrop_path}`} alt={infoMovie.title} />
                                        <div className="modal-info">
                                            { infoMovie.vote_count > 0 && <p>Qtd votos: {infoMovie.vote_count}</p>}
                                            <p>{new Date(infoMovie.release_date).toLocaleDateString('pt-BR')}</p>
                                        </div>
                                    </div>
                                </div>
                            </Modal>
                        )}
                    </div>
                    <div className={`page-content ${currentTab === 'perfil' ? 'fade-in' : 'fade-out'}`}>
                        {currentTab === 'perfil' && <div>
                            <div className='perfil-container'>
                                <div className={`user-info ${themeColor}`}>
                                    <Avatar sx={{ width: 150, height: 150 }} src={perfilIcon} />
                                    <h2>Nome do usuário</h2>


                                </div>

                                <h3 className={themeColor}>Email : email@email.com <ModeEditIcon className={`central-circle ${themeColor}`} /></h3>
                                <h3 className={themeColor}>Nome : Nome do Usuario  <ModeEditIcon className={`central-circle ${themeColor}`} /> </h3>
                                <h3 className={themeColor}>Senha : **************  <ModeEditIcon className={`central-circle ${themeColor}`} /></h3>




                            </div>


                        </div>}
                    </div>
                    <div className={`page-content ${currentTab === 'config' ? 'fade-in' : 'fade-out'}`}>
                        {currentTab === 'config' && <div>
                            <div className='config-container'>
                                <h2 className={themeColor} >Mudança do tema</h2>
                                <div className='tema-container'>
                                    <div onClick={() => { handleThemeChange('rosa') }} className='tema' style={{ backgroundColor: 'rgb(171, 20, 209)' }}></div>
                                    <div onClick={() => { handleThemeChange('azul') }} className='tema' style={{ backgroundColor: 'rgb(89, 167, 255)' }}></div>
                                    <div onClick={() => { handleThemeChange('verde') }} className='tema' style={{ backgroundColor: 'rgb(20, 209, 20)' }}></div>
                                </div>

                            </div>
                        </div>}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Dashboard;