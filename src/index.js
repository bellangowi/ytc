   import React from 'react';
   import ReactDOM from 'react-dom';
   import YTSearch from 'youtube-api-search';
   import SearchBar from './components/search_bar';
 
  const API_KEY = 'AIzaSyBDJ9k3b53xDafH1W4VOnNsbF3TFyplnHM';
  
  YTSearch({key:API_KEY,term:'surfboards',function(data){
    console.log(data);
  }});
   //create a new component.This component should provide some HTML
  const App = () =>{
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
  //put the comonent's html on the page(dom)
 ReactDOM.render(<App />,document.querySelector('.container'));