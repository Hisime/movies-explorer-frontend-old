import './Movies.css';
import Header from "../Header/Header";
import MoviesCardList from "../ MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";

function Movies() {
    return (
        <>
            <SearchForm/>
            <MoviesCardList/>
            <Footer/>
        </>
    );
}

export default Movies;
