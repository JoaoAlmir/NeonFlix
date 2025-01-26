import React from 'react';
import './Dashboard.css';
import ViewAgendaIcon from '@mui/icons-material/ViewAgenda';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import '../Home/Home.css';
const Dashboard = () => {
    const [currentPage, setCurrentPage] = React.useState('movies');
    const [isSidebarHovered, setIsSidebarHovered] = React.useState(false);

    return (
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
            <div className='page-container'>
                aa
            </div>
        </div>
    );
};

export default Dashboard;