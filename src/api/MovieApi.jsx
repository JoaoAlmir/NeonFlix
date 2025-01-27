
const dictCategories = {
        "acao": 28,
        "aventura": 12,
        "drama": 18,
        "comedia": 35,
        "infantil": 10751
    }

const chaveApi = import.meta.env.VITE_CHAVEAPI;

const fetchMovies = async (page = 1, currentCategory, query = '') => {
    try {
        let url = `https://api.themoviedb.org/3/movie/popular?api_key=${chaveApi}&language=pt-BR&page=${page}`;
        
        if (query) {
            url = `https://api.themoviedb.org/3/search/movie?api_key=${chaveApi}&language=pt-BR&query=${query}&page=${page}`;
        } else if (currentCategory) {
            let cat = dictCategories[currentCategory];
            url = `https://api.themoviedb.org/3/discover/movie?api_key=${chaveApi}&language=pt-BR&with_genres=${cat}&page=${page}`;
        }
        
        const response = await fetch(url);
        const res = await response.json();
        console.log(res)
        return res;
    } catch (error) {
        console.error('Error fetching movies:', error);
        return null;
    }
};

const fetchPopularMovies = async () => {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${chaveApi}&language=pt-BR&page=1`);
        const res = await response.json();
        return res.results.slice(0, 15);
    } catch (error) {
        console.error('Error fetching popular movies:', error);
        return [];
    }
};

const fetchTopRatedMovies = async () => {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${chaveApi}&language=pt-BR&page=1`);
        const res = await response.json();
        return res.results.slice(0, 15);
    } catch (error) {
        console.error('Error fetching top rated movies:', error);
        return [];
    }
};

const fetchRandomMovie = async () => {
    try {
        const randomPage = Math.floor(Math.random() * (400 - 50 + 1)) + 50;
        const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${chaveApi}&language=pt-BR&page=${randomPage}`);
        const res = await response.json();
        return res.results.slice(0, 15);
    } catch (error) {
        console.error('Error fetching random movie:', error);
        return [];
    }
};

const searchMovies = async (query) => {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${chaveApi}&language=pt-BR&query=${query}&page=1`);
        const res = await response.json();
        return res.results;
    } catch (error) {
        console.error('Error searching movies:', error);
        return [];
    }
};

export { fetchMovies ,fetchPopularMovies, fetchTopRatedMovies, fetchRandomMovie, searchMovies };
