   import React from 'react';
   import ReactDOM from 'react-dom';
   import SearchBar from './components/search_bar';
 
  const API_KEY = 'AIzaSyB6tWgYaD4gVw0UVz31VxCqNUUHDIWNRIQ';
  
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