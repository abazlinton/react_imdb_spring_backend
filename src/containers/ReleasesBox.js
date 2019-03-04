import React, { Component } from 'react';
import Header from '../components/Header';
import MovieList from '../components/MovieList';
import MoreReleases from '../components/MoreReleases';
import './ReleasesBox.css';

class ReleasesBox extends Component {

  constructor(props) {
    super(props)
    this.state = {
      movies: [
        
      ]
    }
  }

  componentDidMount(){
    fetch('http://localhost:8080/movies')
      .then(res => res.json())
      .then((data) => {
        this.setState({movies: data._embedded.movies})
      })
  }

  render() {
    return (
      <div className='releases-box'>
        <Header title='Upcoming Film Releases for UK' />
        <MovieList movies={this.state.movies} />
        <MoreReleases />
      </div>
    );
  }
}

export default ReleasesBox;
