import React, { Component } from 'react';
import './App.css';
import MovieRow from './MovieRow.js';

class App extends Component {

  constructor (props) {
    super(props)
    console.log("This is my initialize")
    const movies = [
      {id: 0, poster_src: "https://images.fandango.com/ImageRenderer/0/0/redesign/static/img/default_poster.png/0/images/masterrepository/other/INTRO_AvengersAgeUltron_FINAL.jpg", title: "Avengers", overview: "This is awesome, and this should win an oscar"},
      {id: 1,poster_src: "https://images.fandango.com/ImageRenderer/0/0/redesign/static/img/default_poster.png/0/images/masterrepository/other/INTRO_AvengersAgeUltron_FINAL.jpg",title: "Infinity", overview: "This is awesome, 2and this should win an oscar"},
      {id: 2,poster_src: "https://images.fandango.com/ImageRenderer/0/0/redesign/static/img/default_poster.png/0/images/masterrepository/other/INTRO_AvengersAgeUltron_FINAL.jpg", title: "War", overview: "This is awesome, 3 and this should win an oscar"},
    ]

    var moviewRows = []

    movies.forEach((movie)=>{
      console.log(movie.title)
      const moviewRow = <MovieRow movie={movie}/>
      
      moviewRows.push(moviewRow)
    })
    this.state = {rows: moviewRows}
  }

  render() {
    return (
      <div className="App">

        <table className="titleBar">
          <tbody>
            <tr>
              <td>
                <img alt="app icon" width="50" src="green_app_icon.svg"/>
              </td>
              <td width="8"></td>
              <td>
               <h1>MoviesDB Search</h1> 
              </td>
            </tr>
          </tbody>
        </table >
        <input style={{
          fontSize: 24,
          display: 'block',
          width: "99%",
          paddingTop: 8,
          paddingBottom: 8,
          paddingLeft: 16,
        }} placeholder="Enter search term"/>

        {this.state.rows}
      </div>
    );
  }
}

export default App;
