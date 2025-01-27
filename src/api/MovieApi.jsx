
const dictCategories = {
        "acao": 28,
        "aventura": 12,
        "drama": 18,
        "comedia": 35,
        "infantil": 10751
    }


const fetchMovies = async (chaveApi, page = 1, currentCategory) => {
    try {
        let cat = dictCategories[currentCategory];
        let url = `https://api.themoviedb.org/3/movie/popular?api_key=${chaveApi}&language=pt-BR&page=${page}`;
        if (currentCategory) {
            url = `https://api.themoviedb.org/3/discover/movie?api_key=${chaveApi}&language=pt-BR&with_genres=${cat}&page=${page}`;
        }
        const response = await fetch(url);
        const res = await response.json();
        return res;
    } catch (error) {
        console.error('Error fetching movies:', error);
        return null;
    }
};

const fetchPopularMovies = async (chaveApi) => {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${chaveApi}&language=pt-BR&page=1`);
        const res = await response.json();
        return res.results.slice(0, 15);
    } catch (error) {
        console.error('Error fetching popular movies:', error);
        return [];
    }
};

const fetchTopRatedMovies = async (chaveApi) => {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${chaveApi}&language=pt-BR&page=1`);
        const res = await response.json();
        return res.results.slice(0, 15);
    } catch (error) {
        console.error('Error fetching top rated movies:', error);
        return [];
    }
};

const fetchRandomMovie = async (chaveApi) => {
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

export { fetchMovies ,fetchPopularMovies, fetchTopRatedMovies, fetchRandomMovie };
