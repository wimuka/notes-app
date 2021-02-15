import React from 'react';
import SearchBar from './components/SearchBar';
import Categories from './components/Categories';
import NotesDash from './components/NotesDash';

import './App.css';

function App() {
  return (
    <div className='App'>
      <SearchBar />
      <Categories />
      <NotesDash />
    </div>
  );
}

export default App;
