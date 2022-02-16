import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import { randomNumber, formatPokeData } from "./helperFunctions";
import MainPage from "./components/MainPage";
import NavBar from "./components/NavBar";
import RightSideBar from "./components/RightSideBar";
import React, { useState, useEffect } from 'react';


 const url = `https://pokeapi.co/api/v2/pokemon/`; // the base url for searching a pokemon, minus the actual number or name

// // Helpers to make fetching cleaner to read:

// function fetchPokemonFromSearchTerm(term) {
//   return fetch(`${url}${term}`)
//     .then((response) => response.json())
//     .then(formatPokeData);
// }

// function fetchRandomPokemon() {
//   return fetchPokemonFromSearchTerm(randomNumber(900));
// }
function App() {
  //  useEffect(() => {
  //    fetchRandomPokemon().then((pokeData) => {
  //   setSearchHistory(pokeData);
  // })
  // }, [])


  const [searchTerm, setSearchTerm] = useState('');
  const [searchHistory, setSearchHistory] = useState([]);
  const [myTeam, setMyTeam] = useState([]);
  const [showTeam, setShowTeam] = useState(true);
  const [error, setError] = useState(false);

  //const [handleSearchClick, sethandleSearchClick] = useState();

  const toggleRightBarMode = () => setShowTeam(!showTeam)

  const fetchPokemonFromSearchTerm = (term) => fetch(`${url}${term}`)
  .then((response) => response.json())
  .then(formatPokeData)

  const fetchRandomPokemon = () => fetchPokemonFromSearchTerm(randomNumber(900));


    useEffect(() => {
      fetchRandomPokemon().then((pokeData) => {
        let array = []
          array.push(pokeData)
        setSearchHistory(array);
      })
    }, [])


  //fetchRandomPokemon().then

 // const handleSearchClick = (e) => setError(false)

//   componentDidMount() {
//     fetchRandomPokemon().then((pokeData) => {
//       let { searchHistory } = this.state;
//       searchHistory = searchHistory.filter(
//         (item) => item.name !== pokeData.name
//       );

//       this.setState({ searchHistory: [pokeData, ...searchHistory] });
//     });
//   }

//   handleSearchClick(e) {
//     this.setState({ error: false });

//     fetchPokemonFromSearchTerm(this.state.searchTerm)
//       .then((pokeData) => {
//         let { searchHistory } = this.state;
//         searchHistory = searchHistory.filter(
//           (item) => item.name !== pokeData.name
//         );

//         this.setState({ searchHistory: [pokeData, ...searchHistory] });
//       })
//       .catch((err) => {
//         this.setState({ error: "No Pokemon Found" });
//       });
//     let searchBar = document.querySelector("#search-bar");
//     searchBar.value = "";
//     e.preventDefault();
//   }

//   handleSearchChange(e) {
//     this.setState({ searchTerm: e.target.value });
//   }
//   handleAddToTeamClick(e) {
//     let { searchHistory, myTeam } = this.state;
//     myTeam = new Set([searchHistory[0], ...myTeam]);
//     this.setState({ myTeam: [...myTeam] });
//   }
//   handleRemoveFromTeamClick(removalIndex) {
//     console.log(removalIndex);
//     let { myTeam } = this.state;
//     myTeam.splice(removalIndex, 1);
//     this.setState({ myTeam: myTeam });
//   }

//   handleHistoryCardClick(historyIndex) {
//     let { searchHistory } = this.state;
//     let clicked = searchHistory.splice(historyIndex, 1);
//     searchHistory = [...clicked, ...searchHistory];
//     this.setState({ searchHistory });
//   }
let lastSearched = searchHistory.length > 0 ? searchHistory[0] : false;
console.log(searchHistory)
  return(
    <div className = "App">
      <div className="App column">
          <NavBar
             showTeam={showTeam}
            // handleSearchChange={this.handleSearchChange}
            // handleSearchClick={this.handleSearchClick}
             toggleRightBarMode={toggleRightBarMode}
          />
          <div className="row">
            <MainPage
               lastSearched={lastSearched}
               searchTerm={searchTerm}
               error={error}
              // handleAddToTeamClick={this.handleAddToTeamClick}
            />
            <RightSideBar
               myTeam={myTeam}
               searchHistory={searchHistory}
               showTeam={showTeam}
              // handleRemoveFromTeamClick={this.handleRemoveFromTeamClick}
              // handleHistoryCardClick={this.handleHistoryCardClick}
            />
          </div>
        </div>
      </div>


    )
//   render() {
//     let { searchTerm, searchHistory, myTeam, showTeam, error } = this.state;
//     let lastSearched = searchHistory.length > 0 ? searchHistory[0] : false;
//  used for main page
//     return (
      // <div className="App column">
      //   <NavBar
      //     showTeam={showTeam}
      //     handleSearchChange={this.handleSearchChange}
      //     handleSearchClick={this.handleSearchClick}
      //     toggleRightBarMode={this.toggleRightBarMode}
      //   />
      //   <div className="row">
      //     <MainPage
      //       lastSearched={lastSearched}
      //       searchTerm={searchTerm}
      //       error={error}
      //       handleAddToTeamClick={this.handleAddToTeamClick}
      //     />
      //     <RightSideBar
      //       myTeam={myTeam}
      //       searchHistory={searchHistory}
      //       showTeam={showTeam}
      //       handleRemoveFromTeamClick={this.handleRemoveFromTeamClick}
      //       handleHistoryCardClick={this.handleHistoryCardClick}
      //     />
      //   </div>
      // </div>
//     );
//   }
// }
};

export default App;
