import React, { useState, useEffect } from 'react';
import Rating from "./rating.component";
import Table from "./common/table.component";
import getMovies from "../service/get-movies.service";
import getGenres from "../service/get-genres.service";
import _ from "lodash";
import Pagination from "./common/pagination.component";
import Filter from "./common/filtering.component";

const Movies = () => {

    const [movies, setMovies] = useState([]);
    const [genres, setGenres] = useState([]);
    const [sortColumn, setSortColumn] = useState({ path: "id", order: "asc" });
    const [selectedGenre, setSelectedGenre] = useState("All Genres");
    const [activePage, setActivePage] = useState(1);
    const [pageCount, setPageCount] = useState(5);

    useEffect(() => {
        setMovies(getMovies());
        setGenres(["All Genres", ...getGenres()]);
    }, [])

    const handleToggleRating = (movieRank) => {
        const movie = movies.find((movie) => movie.id === movieRank);
        movie.your_rating = !movie.your_rating;
        setMovies(movies);
    };

    const handleSort = (sortColumn) => {
        // this.setState({ ...this.state, sortColumn });
        setSortColumn(sortColumn);
    };

    const handClick = (activePage) => {
        // this.setState({ ...this.state, activePage });
        setActivePage(activePage);
    }

    const handClickFilter = (selectedGenre) => {
        // this.setState({ ...this.state, selectedGenre });
        setSelectedGenre(selectedGenre);
    }

    const paginateMovies = (movies) => {
        const start = pageCount * (activePage - 1);
        const paginatedMovies = movies.slice(start, start + pageCount);
        return paginatedMovies;
    }

    const sortMovies = (movies) => {
        const sortedMovies = _.orderBy(movies, [sortColumn.path], [sortColumn.order]);
        return sortedMovies;
    };

    const filterMovies = () => {
        const filteredMovies = movies.filter(movie => {
            if (selectedGenre === "All Genres") return true;

            if (movie.genres.includes(selectedGenre)) return true;
            return false;
        });
        return filteredMovies;
    }

    const filteredMovies = filterMovies();
    const paginatedMovies = paginateMovies(filteredMovies);
    const movies1 = sortMovies(paginatedMovies);
    const columns = [
        {
            label: "Rank",
            path: "id",
            sorting: true,
            content: (movie, key) => <td>{movie[key]}</td>,
        },
        {
            label: "Movie Name",
            path: "title",
            sorting: true,
            content: (movie, key) => <td>{movie[key]}</td>,
        },
        {
            label: "Genre",
            path: "genre",
            content: (movie, key) => <td>{movie[key]}</td>,
        },
        {
            label: "Poster",
            path: "posterUrl",
            sorting: true,
            content: (movie, key) => (
                <td>
                    <img src={movie[key]} style={{ height: "100px", width: "auto" }} />
                </td>
            ),
        },
        {
            label: "Release Date",
            path: "year",
            sorting: true,
            content: (movie, key) => <td>{movie[key]}</td>,
        },
        {
            label: "Your Rating",
            path: "your_rating",
            sorting: true,
            content: (movie, key) => (
                <td>
                    <Rating
                        isRated={movie[key]}
                        rank={movie.id}
                        handleToggleRating={handleToggleRating}
                    />
                </td>
            ),
        },
    ];

    return (
        <>
            <div className="container">
                <div className="row">
                    <Filter items={genres} selectedGenre={selectedGenre} onClickFilter={handClickFilter} />
                    <div className="col-lg-8">
                        <Table
                            items={movies1}
                            columns={columns}
                            onSort={handleSort}
                            sortColumn={sortColumn}
                        />
                        <Pagination
                            totalItems={filteredMovies.length}
                            pageCount={pageCount}
                            activePage={activePage}
                            onClickPage={handClick}
                        />
                    </div>
                </div>
            </div>

        </>

    );

}

export default Movies;


