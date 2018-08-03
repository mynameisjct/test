import React, {Component} from 'react';
import {View,Text} from 'react-native';
import _fetchBasic from '../Utils/Fetch';
import Detail from './MovieDetail';

class MovieList extends Component{
    state = {
        movies: []
    };

    componentWillMount(){
        fetch('http://www.mocky.io/v2/5b46c3c43200006e00301c91', {
            method: 'get',
            headers: {},
            body: ''
        })
        .then((response) => response.json())
        .then((response) => {
            console.log(response);
            this.setState({movies: response.data});
            }
        )
        .catch((e) => {console.log(e)});
    };

    getMovieList(){
        // 'key' is reserved word
        let movies = this.state.movies.map(movie => 
            <Detail key = {movie.name} movie = {movie}></Detail>
        );

        return(
            movies
        );
    };

    render(){
        return(
                this.getMovieList()
        );
    }
};

export default MovieList;
