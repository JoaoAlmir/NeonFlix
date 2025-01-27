import React from 'react';
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

    const setCategory = (cat)=>{
        if(cat === currentCategory){
            setCurrentCategory(null);
            return;
        }
        setCurrentCategory(cat);
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
                                <h1 onClick={()=>{setCategory("acao")}} style={{ color: currentCategory === 'acao' ? 'rgb(171, 20, 209)' : 'white' }}>Ação</h1>
                                <h1 onClick={()=>{setCategory("aventura")}} style={{ color: currentCategory === 'aventura' ? 'rgb(171, 20, 209)' : 'white' }}>Aventura</h1>
                                <h1 onClick={()=>{setCategory("drama")}} style={{ color: currentCategory === 'drama' ? 'rgb(171, 20, 209)' : 'white' }}>Drama</h1>
                                <h1 onClick={()=>{setCategory("comedia")}} style={{ color: currentCategory === 'comedia' ? 'rgb(171, 20, 209)' : 'white' }}>Comedia</h1>
                                <h1 onClick={()=>{setCategory("infantil")}} style={{ color: currentCategory === 'infantil' ? 'rgb(171, 20, 209)' : 'white' }}>Infantil</h1>
                            </div>

                            <div className='filmes-grid'>
                                <MovieCard title={"teste"} description={"descrpariwaporawro pawoeiajepo jawpeo awdaw dawd adjawpidajd pawo awd awdjwaio djawd oaiwd jawokd ioaoiw dwiai aw iajwad awi jwdlidjapod wajdpoawdkawldkawd akodawçkwdçwakd çawpok dawopdkawçk dçawpok" }  image={"https://m.media-amazon.com/images/M/MV5BMWQzMWNkOGQtN2EwYi00YmVjLWFlMDktY2E1ZTI2YWM4ZDcxXkEyXkFqcGc@._V1_.jpg"}/>
                                <MovieCard title={"teste"} description={"descrpariwaporawro pawoeiajepo jawpeo awdaw dawd adjawpidajd pawo awd awdjwaio djawd oaiwd jawokd ioaoiw dwiai aw iajwad awi jwdlidjapod wajdpoawdkawldkawd akodawçkwdçwakd çawpok dawopdkawçk dçawpok" }  image={"https://m.media-amazon.com/images/M/MV5BMWQzMWNkOGQtN2EwYi00YmVjLWFlMDktY2E1ZTI2YWM4ZDcxXkEyXkFqcGc@._V1_.jpg"}/>
                                <MovieCard title={"teste"} description={"descrpariwaporawro pawoeiajepo jawpeo awdaw dawd adjawpidajd pawo awd awdjwaio djawd oaiwd jawokd ioaoiw dwiai aw iajwad awi jwdlidjapod wajdpoawdkawldkawd akodawçkwdçwakd çawpok dawopdkawçk dçawpok" }  image={"https://m.media-amazon.com/images/M/MV5BMWQzMWNkOGQtN2EwYi00YmVjLWFlMDktY2E1ZTI2YWM4ZDcxXkEyXkFqcGc@._V1_.jpg"}/>
                                <MovieCard title={"teste"} description={"descrpariwaporawro pawoeiajepo jawpeo awdaw dawd adjawpidajd pawo awd awdjwaio djawd oaiwd jawokd ioaoiw dwiai aw iajwad awi jwdlidjapod wajdpoawdkawldkawd akodawçkwdçwakd çawpok dawopdkawçk dçawpok" }  image={"https://m.media-amazon.com/images/M/MV5BMWQzMWNkOGQtN2EwYi00YmVjLWFlMDktY2E1ZTI2YWM4ZDcxXkEyXkFqcGc@._V1_.jpg"}/>
                                <MovieCard title={"teste"} description={"descrpariwaporawro pawoeiajepo jawpeo awdaw dawd adjawpidajd pawo awd awdjwaio djawd oaiwd jawokd ioaoiw dwiai aw iajwad awi jwdlidjapod wajdpoawdkawldkawd akodawçkwdçwakd çawpok dawopdkawçk dçawpok" }  image={"https://m.media-amazon.com/images/M/MV5BMWQzMWNkOGQtN2EwYi00YmVjLWFlMDktY2E1ZTI2YWM4ZDcxXkEyXkFqcGc@._V1_.jpg"}/>
                                <MovieCard title={"teste"} description={"descrpariwaporawro pawoeiajepo jawpeo awdaw dawd adjawpidajd pawo awd awdjwaio djawd oaiwd jawokd ioaoiw dwiai aw iajwad awi jwdlidjapod wajdpoawdkawldkawd akodawçkwdçwakd çawpok dawopdkawçk dçawpok" }  image={"https://m.media-amazon.com/images/M/MV5BMWQzMWNkOGQtN2EwYi00YmVjLWFlMDktY2E1ZTI2YWM4ZDcxXkEyXkFqcGc@._V1_.jpg"}/>
                                <MovieCard title={"teste"} description={"descrpariwaporawro pawoeiajepo jawpeo awdaw dawd adjawpidajd pawo awd awdjwaio djawd oaiwd jawokd ioaoiw dwiai aw iajwad awi jwdlidjapod wajdpoawdkawldkawd akodawçkwdçwakd çawpok dawopdkawçk dçawpok" }  image={"https://m.media-amazon.com/images/M/MV5BMWQzMWNkOGQtN2EwYi00YmVjLWFlMDktY2E1ZTI2YWM4ZDcxXkEyXkFqcGc@._V1_.jpg"}/>
                                <MovieCard title={"teste"} description={"descrpariwaporawro pawoeiajepo jawpeo awdaw dawd adjawpidajd pawo awd awdjwaio djawd oaiwd jawokd ioaoiw dwiai aw iajwad awi jwdlidjapod wajdpoawdkawldkawd akodawçkwdçwakd çawpok dawopdkawçk dçawpok" }  image={"https://m.media-amazon.com/images/M/MV5BMWQzMWNkOGQtN2EwYi00YmVjLWFlMDktY2E1ZTI2YWM4ZDcxXkEyXkFqcGc@._V1_.jpg"}/>
                                <MovieCard title={"teste"} description={"descrpariwaporawro pawoeiajepo jawpeo awdaw dawd adjawpidajd pawo awd awdjwaio djawd oaiwd jawokd ioaoiw dwiai aw iajwad awi jwdlidjapod wajdpoawdkawldkawd akodawçkwdçwakd çawpok dawopdkawçk dçawpok" }  image={"https://m.media-amazon.com/images/M/MV5BMWQzMWNkOGQtN2EwYi00YmVjLWFlMDktY2E1ZTI2YWM4ZDcxXkEyXkFqcGc@._V1_.jpg"}/>
                                <MovieCard title={"teste"} description={"descrpariwaporawro pawoeiajepo jawpeo awdaw dawd adjawpidajd pawo awd awdjwaio djawd oaiwd jawokd ioaoiw dwiai aw iajwad awi jwdlidjapod wajdpoawdkawldkawd akodawçkwdçwakd çawpok dawopdkawçk dçawpok" }  image={"https://m.media-amazon.com/images/M/MV5BMWQzMWNkOGQtN2EwYi00YmVjLWFlMDktY2E1ZTI2YWM4ZDcxXkEyXkFqcGc@._V1_.jpg"}/>
                                <MovieCard title={"teste"} description={"descrpariwaporawro pawoeiajepo jawpeo awdaw dawd adjawpidajd pawo awd awdjwaio djawd oaiwd jawokd ioaoiw dwiai aw iajwad awi jwdlidjapod wajdpoawdkawldkawd akodawçkwdçwakd çawpok dawopdkawçk dçawpok" }  image={"https://m.media-amazon.com/images/M/MV5BMWQzMWNkOGQtN2EwYi00YmVjLWFlMDktY2E1ZTI2YWM4ZDcxXkEyXkFqcGc@._V1_.jpg"}/>
                                <MovieCard title={"teste"} description={"descrpariwaporawro pawoeiajepo jawpeo awdaw dawd adjawpidajd pawo awd awdjwaio djawd oaiwd jawokd ioaoiw dwiai aw iajwad awi jwdlidjapod wajdpoawdkawldkawd akodawçkwdçwakd çawpok dawopdkawçk dçawpok" }  image={"https://m.media-amazon.com/images/M/MV5BMWQzMWNkOGQtN2EwYi00YmVjLWFlMDktY2E1ZTI2YWM4ZDcxXkEyXkFqcGc@._V1_.jpg"}/>
                                <MovieCard title={"teste"} description={"descrpariwaporawro pawoeiajepo jawpeo awdaw dawd adjawpidajd pawo awd awdjwaio djawd oaiwd jawokd ioaoiw dwiai aw iajwad awi jwdlidjapod wajdpoawdkawldkawd akodawçkwdçwakd çawpok dawopdkawçk dçawpok" }  image={"https://m.media-amazon.com/images/M/MV5BMWQzMWNkOGQtN2EwYi00YmVjLWFlMDktY2E1ZTI2YWM4ZDcxXkEyXkFqcGc@._V1_.jpg"}/>
                                <MovieCard title={"teste"} description={"descrpariwaporawro pawoeiajepo jawpeo awdaw dawd adjawpidajd pawo awd awdjwaio djawd oaiwd jawokd ioaoiw dwiai aw iajwad awi jwdlidjapod wajdpoawdkawldkawd akodawçkwdçwakd çawpok dawopdkawçk dçawpok" }  image={"https://m.media-amazon.com/images/M/MV5BMWQzMWNkOGQtN2EwYi00YmVjLWFlMDktY2E1ZTI2YWM4ZDcxXkEyXkFqcGc@._V1_.jpg"}/>
                                <MovieCard title={"teste"} description={"descrpariwaporawro pawoeiajepo jawpeo awdaw dawd adjawpidajd pawo awd awdjwaio djawd oaiwd jawokd ioaoiw dwiai aw iajwad awi jwdlidjapod wajdpoawdkawldkawd akodawçkwdçwakd çawpok dawopdkawçk dçawpok" }  image={"https://m.media-amazon.com/images/M/MV5BMWQzMWNkOGQtN2EwYi00YmVjLWFlMDktY2E1ZTI2YWM4ZDcxXkEyXkFqcGc@._V1_.jpg"}/>
                                <MovieCard title={"teste"} description={"descrpariwaporawro pawoeiajepo jawpeo awdaw dawd adjawpidajd pawo awd awdjwaio djawd oaiwd jawokd ioaoiw dwiai aw iajwad awi jwdlidjapod wajdpoawdkawldkawd akodawçkwdçwakd çawpok dawopdkawçk dçawpok" }  image={"https://m.media-amazon.com/images/M/MV5BMWQzMWNkOGQtN2EwYi00YmVjLWFlMDktY2E1ZTI2YWM4ZDcxXkEyXkFqcGc@._V1_.jpg"}/>
                                <MovieCard title={"teste"} description={"descrpariwaporawro pawoeiajepo jawpeo awdaw dawd adjawpidajd pawo awd awdjwaio djawd oaiwd jawokd ioaoiw dwiai aw iajwad awi jwdlidjapod wajdpoawdkawldkawd akodawçkwdçwakd çawpok dawopdkawçk dçawpok" }  image={"https://m.media-amazon.com/images/M/MV5BMWQzMWNkOGQtN2EwYi00YmVjLWFlMDktY2E1ZTI2YWM4ZDcxXkEyXkFqcGc@._V1_.jpg"}/>

                            </div>  
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