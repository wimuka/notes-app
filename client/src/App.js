import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

import SearchBar from './components/layout/SearchBar';
import Categories from './components/layout/Categories';
import NotesDash from './components/layout/NotesDash';

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <SearchBar />
        <Categories />
        <NotesDash />
      </div>
    </Provider>
  );
}

export default App;
