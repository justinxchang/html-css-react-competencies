import React, { Component } from 'react';
import axios from 'axios'

class StarWars extends Component {
    state = {
        post: [],
        input: ''
    }

    getStars(input){
        console.log(input)
        axios.post(`https://swapi.co/api/people?search=${input}`)
        .then(res => this.setState({post: res.data}))
        console.log(this.state.post)
    }

    
    render() {
        if (this.state.post.results) {
            return (
                <div>
                    <input type='text' onChange={(event) => this.setState({input: event.target.value})}></input> 
                    <button onClick={() => {this.getStars(this.state.input)}}>Star Wars</button> 
                    <h3>Character Name: {this.state.post.results[0].name}</h3>
                    <p>height: {this.state.post.results[0].height}</p>
                    <p>mass: {this.state.post.results[0].mass}</p>
                    <p>gender: {this.state.post.results[0].gender}</p>
                    <p>birth_year: {this.state.post.results[0].birth_year}</p>
                </div>
            )
        }


        return (
            <div>
               <input type='text' onChange={(event) => this.setState({input: event.target.value})}></input> 
               <button onClick={() => {this.getStars(this.state.input)}}>Star Wars</button> 

            </div>
        );
    }
}

export default StarWars;