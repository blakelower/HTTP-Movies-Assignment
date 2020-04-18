import React, { Component } from "react";
import axios from "axios";

class MoviePost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      director: "",
      metascore: 0,
      stars: [],
    };
  }

 handleChange = e => {
    this.setState({
      movieUpdate: {
        ...this.state.movieUpdate,
        [e.target.name]: e.target.value
      },
    });
  };

  handleSubmit = e => {
   e.preventDefault();
   axios.post('http://localhost:5000/api/movies/')
   .then(response => {
       console.log(response)
   })
   .catch(error => {
       console.log(error)
   })
  }
  render() {
    return (
    <div>
        <form onSubmit={this.handleSubmit}>
        <h2>Post Movie</h2>
        <label>
          Movie Title:
          <input
            type="text"
            name="title"
            onChange={this.handleChange}
            placeholder="title"
            value={this.title}
          />
        </label>
        <label>
          Director:
          <input
            type="text"
            name="director"
            onChange={this.handleChange}
            placeholder="director"
            value={this.director}
          />
        </label>
        <label>
          Metascore:
          <input
            type="number"
            name="metascore"
            onChange={this.handleChange}
            placeholder="metascore"
            value={this.metascore}
          />
        </label>
        <button>Update Movie</button>
        </form>
    </div>
    )
  }
}

export default MoviePost;
