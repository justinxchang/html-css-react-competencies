import React, { Component } from 'react';
import axios from 'axios'

class StarWars extends Component {
    state = {
        post: [],
        input: ''
    }

    getStars(){
        axios.get('https://swapi.co/api/people/1')
        .then(res => this.setState({post: res.data}))
        console.log(this.state.post)
    }

    
    render() {
        return (
            <div>
               <input type='text' onChange={(event) => this.setState({input: event.target.value})}></input> 
               <button onClick={() => {this.getStars()}}>Star Wars</button> 

               <h3>Character Name: {this.state.post.name}</h3>
               <p>height: {this.state.post.height}</p>
               <p>mass: {this.state.post.mass}</p>
               <p>gender: {this.state.post.gender}</p>
               <p>birth_year: {this.state.post.birth_year}</p>

            </div>
        );
    }
}

export default StarWars;