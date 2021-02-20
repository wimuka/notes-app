import React from 'react';
import SearchBar from './components/layout/SearchBar';
import Categories from './components/layout/Categories';
import NotesDash from './components/layout/NotesDash';

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
